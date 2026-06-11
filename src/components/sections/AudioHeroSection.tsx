"use client";

import { useState, useCallback, useRef } from "react";
import { UploadCloud, Package, Trash2, Settings, Music } from "lucide-react";
import { AudioFileListItem } from "@/components/ui/AudioFileListItem";
import {
  createZip,
  downloadFile,
  preloadFFmpeg,
  type AudioFormat,
  type AudioConversionResult,
} from "@/lib/audioConverter";

const ALL_FORMATS: AudioFormat[] = [
  "mp3",
  "wav",
  "ogg",
  "aac",
  "flac",
  "m4a",
  "opus",
  "aiff",
  "wma",
];

interface AudioHeroSectionProps {
  title: string;
  subtitle: string;
  defaultOutputFormat?: AudioFormat;
  description?: string;
}

export function AudioHeroSection({
  title,
  subtitle,
  defaultOutputFormat = "mp3",
  description,
}: AudioHeroSectionProps) {
  const [files, setFiles] = useState<{ file: File; id: string }[]>([]);
  const [defaultFormat, setDefaultFormat] =
    useState<AudioFormat>(defaultOutputFormat);
  const [bitrate, setBitrate] =
    useState<"64k" | "128k" | "192k" | "256k" | "320k">("192k");
  const [isDragging, setIsDragging] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [results, setResults] = useState<
    Record<string, AudioConversionResult>
  >({});
  const [zipLoading, setZipLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (f) => f.type.startsWith("audio/") || isAudioFile(f.name)
    );
    setFiles((prev) => [
      ...prev,
      ...droppedFiles.map((f) => ({
        file: f,
        id: `${f.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      })),
    ]);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files || []).filter(
        (f) => f.type.startsWith("audio/") || isAudioFile(f.name)
      );
      setFiles((prev) => [
        ...prev,
        ...selected.map((f) => ({
          file: f,
          id: `${f.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        })),
      ]);
      e.target.value = "";
    },
    []
  );

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((item) => item.id !== id));
    setResults((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setFiles([]);
    setResults({});
  }, []);

  const handleConverted = useCallback(
    (id: string, result: AudioConversionResult) => {
      setResults((prev) => ({ ...prev, [id]: result }));
    },
    []
  );

  const handleDownloadAll = useCallback(async () => {
    const successful = Object.values(results).filter(
      (r) => r.success && r.url
    );
    if (successful.length === 0) return;

    if (successful.length === 1) {
      downloadFile(successful[0].url!, successful[0].filename);
      return;
    }

    setZipLoading(true);
    try {
      const zipBlob = await createZip(successful);
      const zipUrl = URL.createObjectURL(zipBlob);
      downloadFile(zipUrl, "pixconvert-audio.zip");
      URL.revokeObjectURL(zipUrl);
    } catch (error) {
      console.error("ZIP creation failed:", error);
    } finally {
      setZipLoading(false);
    }
  }, [results]);

  const convertedCount = Object.values(results).filter((r) => r.success).length;

  return (
    <section
      className="flex flex-col items-center justify-center pt-20 pb-12 px-6 mx-auto max-w-[1120px] text-center"
      id="tools"
    >
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-on-background mb-4 max-w-3xl leading-tight">
        {title}
      </h1>
      <p className="text-lg text-on-surface-variant mb-4 max-w-2xl leading-relaxed">
        {subtitle}
      </p>
      {description && (
        <p className="text-sm text-on-surface-variant/80 mb-8 max-w-xl">
          {description}
        </p>
      )}

      {/* Settings Bar */}
      <div className="w-full max-w-[800px] mb-4">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          <Settings className="h-4 w-4" />
          <span>{showSettings ? "Hide" : "Show"} Settings</span>
        </button>

        {showSettings && (
          <div className="mt-3 bg-surface-container-lowest border border-border rounded-lg p-4 text-left">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="text-sm font-medium text-on-background block mb-1">
                  Output Format
                </label>
                <select
                  value={defaultFormat}
                  onChange={(e) =>
                    setDefaultFormat(e.target.value as AudioFormat)
                  }
                  className="text-sm border border-border rounded-md px-3 py-2 bg-background text-on-background focus:border-primary focus:outline-none"
                >
                  {ALL_FORMATS.map((fmt) => (
                    <option key={fmt} value={fmt}>
                      {fmt.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-grow">
                <label className="text-sm font-medium text-on-background block mb-1">
                  Bitrate
                </label>
                <div className="flex gap-2 flex-wrap">
                  {(["64k", "128k", "192k", "256k", "320k"] as const).map(
                    (b) => (
                      <button
                        key={b}
                        onClick={() => setBitrate(b)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                          bitrate === b
                            ? "bg-primary text-white"
                            : "bg-surface-container text-on-background hover:bg-surface-container-high"
                        }`}
                      >
                        {b}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dropzone Card */}
      <div className="bg-surface-container-lowest border border-border rounded-xl w-full max-w-[800px] p-4 mb-6 shadow-sm">
        <div
          className={`border-2 border-dashed rounded-lg bg-surface flex flex-col items-center justify-center py-16 px-6 cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-primary bg-accent-light border-solid"
              : "border-primary hover:bg-surface-container-low"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Music className="h-12 w-12 text-primary mb-4" strokeWidth={1.5} />
          <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-on-background mb-2">
            Drag & Drop audio files here
          </p>
          <p className="text-base text-on-surface-variant">
            or click to browse from your computer
          </p>
          <p className="text-xs text-on-surface-variant/70 mt-2">
            Supports MP3, WAV, OGG, AAC, FLAC, M4A, OPUS, AIFF, WMA
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="audio/*"
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="w-full max-w-[800px] mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-background">
              Files ({files.length})
              {convertedCount > 0 && (
                <span className="text-sm text-success ml-2">
                  {convertedCount} converted
                </span>
              )}
            </h3>
            <div className="flex items-center gap-2">
              {convertedCount > 0 && (
                <button
                  onClick={handleDownloadAll}
                  disabled={zipLoading}
                  className="flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-primary-hover transition-colors disabled:opacity-50"
                >
                  {zipLoading ? (
                    <Package className="h-4 w-4 animate-spin" />
                  ) : (
                    <Package className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">
                    {convertedCount === 1
                      ? "Download"
                      : "Download All (ZIP)"}
                  </span>
                </button>
              )}
              <button
                onClick={clearAll}
                className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-error transition-colors px-3 py-2"
              >
                <Trash2 className="h-4 w-4" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {files.map((item) => (
              <AudioFileListItem
                key={item.id}
                file={item.file}
                defaultFormat={defaultFormat}
                bitrate={bitrate}
                onRemove={() => removeFile(item.id)}
                onConverted={(result) => handleConverted(item.id, result)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Output Format Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {ALL_FORMATS.map((fmt) => (
          <button
            key={fmt}
            onClick={() => setDefaultFormat(fmt)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              defaultFormat === fmt
                ? "bg-primary text-white"
                : "bg-surface-container-lowest border border-border text-on-background hover:border-primary"
            }`}
          >
            {fmt.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}

function isAudioFile(filename: string): boolean {
  const ext = filename.split(".").pop()?.toLowerCase();
  const audioExts = [
    "mp3",
    "wav",
    "ogg",
    "aac",
    "flac",
    "m4a",
    "opus",
    "aiff",
    "wma",
    "w4a",
  ];
  return ext ? audioExts.includes(ext) : false;
}

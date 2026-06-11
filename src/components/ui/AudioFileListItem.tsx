"use client";

import { useState, useEffect, useRef } from "react";
import { X, Download, CheckCircle, AlertCircle, Loader2, Music } from "lucide-react";
import {
  convertAudio,
  downloadFile,
  formatBytes,
  getSavingsPercent,
  preloadFFmpeg,
  type AudioFormat,
  type AudioConversionResult,
} from "@/lib/audioConverter";

interface AudioFileListItemProps {
  file: File;
  defaultFormat: AudioFormat;
  bitrate: "64k" | "128k" | "192k" | "256k" | "320k";
  onRemove: () => void;
  onConverted: (result: AudioConversionResult) => void;
}

const FORMAT_OPTIONS: { value: AudioFormat; label: string }[] = [
  { value: "mp3", label: "MP3" },
  { value: "wav", label: "WAV" },
  { value: "ogg", label: "OGG" },
  { value: "aac", label: "AAC" },
  { value: "flac", label: "FLAC" },
  { value: "m4a", label: "M4A" },
  { value: "opus", label: "OPUS" },
  { value: "aiff", label: "AIFF" },
  { value: "wma", label: "WMA" },
];

export function AudioFileListItem({
  file,
  defaultFormat,
  bitrate,
  onRemove,
  onConverted,
}: AudioFileListItemProps) {
  const [outputFormat, setOutputFormat] = useState<AudioFormat>(defaultFormat);
  const [status, setStatus] = useState<"idle" | "loading-ffmpeg" | "converting" | "done" | "error">("idle");
  const [result, setResult] = useState<AudioConversionResult | null>(null);
  const [progress, setProgress] = useState(0);

  const handleConvert = async () => {
    setStatus("loading-ffmpeg");
    setProgress(10);

    try {
      await preloadFFmpeg();
      setProgress(40);
      setStatus("converting");

      const conversionResult = await convertAudio(file, {
        outputFormat,
        bitrate,
      });

      setProgress(100);
      setResult(conversionResult);
      setStatus(conversionResult.success ? "done" : "error");
      onConverted(conversionResult);
    } catch (error) {
      setStatus("error");
      onConverted({
        success: false,
        blob: null,
        url: null,
        filename: file.name,
        originalSize: file.size,
        convertedSize: 0,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  const handleDownload = () => {
    if (result?.url) {
      downloadFile(result.url, result.filename);
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-border rounded-lg p-4 mb-3">
      <div className="flex items-center gap-4">
        {/* Audio icon */}
        <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-surface-container flex items-center justify-center">
          <Music className="h-7 w-7 text-primary" strokeWidth={1.5} />
        </div>

        {/* File info */}
        <div className="flex-grow min-w-0">
          <p className="text-sm font-medium text-on-background truncate">
            {file.name}
          </p>
          <p className="text-xs text-on-surface-variant">
            {formatBytes(file.size)}
          </p>
          {result && result.success && (
            <p className="text-xs text-success">
              {formatBytes(result.convertedSize)}{" "}
              {getSavingsPercent(result.originalSize, result.convertedSize) > 0 &&
                `(-${getSavingsPercent(result.originalSize, result.convertedSize)}%)`}
            </p>
          )}
          {result && !result.success && (
            <p className="text-xs text-error">{result.error}</p>
          )}
        </div>

        {/* Format selector */}
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value as AudioFormat)}
          disabled={status === "loading-ffmpeg" || status === "converting" || status === "done"}
          className="text-sm border border-border rounded-md px-2 py-1 bg-background text-on-background focus:border-primary focus:outline-none disabled:opacity-50"
        >
          {FORMAT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {status === "idle" && (
            <button
              onClick={handleConvert}
              className="bg-primary text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-primary-hover transition-colors"
            >
              Convert
            </button>
          )}
          {(status === "loading-ffmpeg" || status === "converting") && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
              <span className="text-xs text-on-surface-variant">
                {status === "loading-ffmpeg" ? "Loading..." : "Converting..."}
              </span>
            </div>
          )}
          {status === "done" && (
            <button
              onClick={handleDownload}
              className="bg-success text-white text-sm font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
          )}
          {status === "error" && (
            <AlertCircle className="h-5 w-5 text-error" />
          )}
          <button
            onClick={onRemove}
            className="text-on-surface-variant hover:text-error transition-colors p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {(status === "loading-ffmpeg" || status === "converting") && (
        <div className="mt-3">
          <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Success indicator */}
      {status === "done" && (
        <div className="mt-2 flex items-center gap-1 text-xs text-success">
          <CheckCircle className="h-3.5 w-3.5" />
          <span>Conversion complete</span>
        </div>
      )}
    </div>
  );
}

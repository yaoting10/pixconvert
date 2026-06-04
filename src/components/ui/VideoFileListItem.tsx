"use client";

import { useState, useEffect, useRef } from "react";
import { X, Download, CheckCircle, AlertCircle, Loader2, Play } from "lucide-react";
import {
  convertVideo,
  downloadFile,
  formatBytes,
  getSavingsPercent,
  preloadFFmpeg,
  type VideoFormat,
  type VideoConversionResult,
} from "@/lib/videoConverter";

interface VideoFileListItemProps {
  file: File;
  defaultFormat: VideoFormat;
  quality: "high" | "medium" | "low";
  onRemove: () => void;
  onConverted: (result: VideoConversionResult) => void;
}

const FORMAT_OPTIONS: { value: VideoFormat; label: string }[] = [
  { value: "mp4", label: "MP4" },
  { value: "webm", label: "WebM" },
  { value: "mov", label: "MOV" },
  { value: "avi", label: "AVI" },
  { value: "mkv", label: "MKV" },
  { value: "wmv", label: "WMV" },
  { value: "flv", label: "FLV" },
  { value: "gif", label: "GIF" },
];

export function VideoFileListItem({
  file,
  defaultFormat,
  quality,
  onRemove,
  onConverted,
}: VideoFileListItemProps) {
  const [outputFormat, setOutputFormat] = useState<VideoFormat>(defaultFormat);
  const [status, setStatus] = useState<"idle" | "loading-ffmpeg" | "converting" | "done" | "error">("idle");
  const [result, setResult] = useState<VideoConversionResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Generate preview thumbnail
  useEffect(() => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleConvert = async () => {
    setStatus("loading-ffmpeg");
    setProgress(10);

    try {
      // Preload FFmpeg first
      await preloadFFmpeg();
      setProgress(40);
      setStatus("converting");

      const conversionResult = await convertVideo(file, {
        outputFormat,
        quality,
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
        {/* Preview thumbnail */}
        {previewUrl && (
          <div className="w-20 h-14 rounded-md overflow-hidden flex-shrink-0 bg-surface-container relative">
            <video
              ref={videoRef}
              src={previewUrl}
              className="w-full h-full object-cover"
              muted
              preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="h-5 w-5 text-white" fill="white" />
            </div>
          </div>
        )}

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
          onChange={(e) => setOutputFormat(e.target.value as VideoFormat)}
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

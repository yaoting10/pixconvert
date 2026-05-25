"use client";

import { useState } from "react";
import { X, Download, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import {
  convertImage,
  downloadFile,
  formatBytes,
  getSavingsPercent,
  type OutputFormat,
  type ConversionResult,
} from "@/lib/imageConverter";

interface FileListItemProps {
  file: File;
  defaultFormat: OutputFormat;
  quality: number;
  onRemove: () => void;
  onConverted: (result: ConversionResult) => void;
}

const FORMAT_OPTIONS: { value: OutputFormat; label: string }[] = [
  { value: "jpg", label: "JPG" },
  { value: "png", label: "PNG" },
  { value: "webp", label: "WebP" },
  { value: "avif", label: "AVIF" },
  { value: "bmp", label: "BMP" },
  { value: "gif", label: "GIF" },
];

export function FileListItem({
  file,
  defaultFormat,
  quality,
  onRemove,
  onConverted,
}: FileListItemProps) {
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(defaultFormat);
  const [status, setStatus] = useState<"idle" | "converting" | "done" | "error">("idle");
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Generate preview
  const reader = new FileReader();
  reader.onload = (e) => setPreview(e.target?.result as string);
  reader.readAsDataURL(file);

  const handleConvert = async () => {
    setStatus("converting");
    const conversionResult = await convertImage(file, {
      outputFormat,
      quality: quality / 100,
    });
    setResult(conversionResult);
    setStatus(conversionResult.success ? "done" : "error");
    onConverted(conversionResult);
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
        {preview && (
          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-surface-container">
            <img
              src={preview}
              alt={file.name}
              className="w-full h-full object-cover"
            />
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
          onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
          disabled={status === "converting" || status === "done"}
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
          {status === "converting" && (
            <Loader2 className="h-5 w-5 text-primary animate-spin" />
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

      {/* Progress bar for converting */}
      {status === "converting" && (
        <div className="mt-3">
          <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse w-2/3" />
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

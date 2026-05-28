export type OutputFormat = "jpg" | "jpeg" | "png" | "webp" | "avif" | "bmp" | "gif" | "tiff" | "heic";

export interface ConversionOptions {
  quality: number; // 0.1 - 1.0
  outputFormat: OutputFormat;
}

export interface ConversionResult {
  success: boolean;
  blob: Blob | null;
  url: string | null;
  filename: string;
  originalSize: number;
  convertedSize: number;
  error?: string;
}

const MIME_TYPES: Record<OutputFormat, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
  bmp: "image/bmp",
  gif: "image/gif",
  tiff: "image/tiff",
  heic: "image/heic",
};

const EXTENSIONS: Record<OutputFormat, string> = {
  jpg: ".jpg",
  jpeg: ".jpeg",
  png: ".png",
  webp: ".webp",
  avif: ".avif",
  bmp: ".bmp",
  gif: ".gif",
  tiff: ".tiff",
  heic: ".heic",
};

/**
 * Check if browser supports output format natively via canvas
 */
export function isFormatSupported(format: OutputFormat): boolean {
  if (format === "jpg" || format === "jpeg" || format === "png" || format === "webp" || format === "bmp") {
    return true;
  }
  // Check for AVIF support
  if (format === "avif") {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/avif").startsWith("data:image/avif");
  }
  return false;
}

function getOutputFilename(originalName: string, format: OutputFormat): string {
  const baseName = originalName.replace(/\.[^/.]+$/, "");
  return `${baseName}${EXTENSIONS[format]}`;
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}

function imageToCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context");
  ctx.drawImage(img, 0, 0);
  return canvas;
}

function canvasToBlob(canvas: HTMLCanvasElement, format: OutputFormat, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const mimeType = MIME_TYPES[format];

    // For PNG/GIF/BMP, quality parameter is ignored by canvas API
    const q = ["jpg", "jpeg", "webp", "avif"].includes(format) ? quality : undefined;

    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error(`Failed to convert to ${format.toUpperCase()}`));
      },
      mimeType,
      q
    );
  });
}

/**
 * Convert canvas to TIFF blob using UTIF.js
 */
async function canvasToTiff(canvas: HTMLCanvasElement): Promise<Blob> {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context");

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const rgba = imageData.data;

  // Dynamic import UTIF for browser
  const UTIF = await import("utif2");

  // Encode RGBA to TIFF
  const tiffBuffer = (UTIF as any).encodeImage(new Uint8Array(rgba.buffer), canvas.width, canvas.height);
  return new Blob([tiffBuffer], { type: "image/tiff" });
}

/**
 * Convert a single image file to the target format
 */
export async function convertImage(
  file: File,
  options: ConversionOptions
): Promise<ConversionResult> {
  const outputFilename = getOutputFilename(file.name, options.outputFormat);

  try {
    const img = await loadImage(file);
    const canvas = imageToCanvas(img);

    // Handle HEIC input (try to decode)
    if (file.name.toLowerCase().endsWith(".heic") || file.type === "image/heic") {
      // HEIC decoding would need a WASM library
      // For now, we attempt canvas conversion which may not work
      console.warn("HEIC input may have limited support in browsers");
    }

    let blob: Blob;

    // Handle TIFF output using UTIF.js
    if (options.outputFormat === "tiff") {
      blob = await canvasToTiff(canvas);
    } else {
      blob = await canvasToBlob(canvas, options.outputFormat, options.quality);
    }

    // Clean up
    URL.revokeObjectURL(img.src);

    return {
      success: true,
      blob,
      url: URL.createObjectURL(blob),
      filename: outputFilename,
      originalSize: file.size,
      convertedSize: blob.size,
    };
  } catch (error) {
    return {
      success: false,
      blob: null,
      url: null,
      filename: outputFilename,
      originalSize: file.size,
      convertedSize: 0,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Download a converted file
 */
export function downloadFile(url: string, filename: string): void {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Create ZIP from multiple conversion results
 */
export async function createZip(results: ConversionResult[]): Promise<Blob> {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

  for (const result of results) {
    if (result.blob && result.success) {
      zip.file(result.filename, result.blob);
    }
  }

  return zip.generateAsync({ type: "blob" });
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function getSavingsPercent(original: number, converted: number): number {
  if (original === 0) return 0;
  return Math.round(((original - converted) / original) * 100);
}

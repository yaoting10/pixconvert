import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export type VideoFormat = "mp4" | "webm" | "mov" | "avi" | "mkv" | "wmv" | "flv" | "gif";

export interface VideoConversionOptions {
  outputFormat: VideoFormat;
  quality?: "high" | "medium" | "low";
}

export interface VideoConversionResult {
  success: boolean;
  blob: Blob | null;
  url: string | null;
  filename: string;
  originalSize: number;
  convertedSize: number;
  error?: string;
}

const MIME_TYPES: Record<VideoFormat, string> = {
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  mkv: "video/x-matroska",
  wmv: "video/x-ms-wmv",
  flv: "video/x-flv",
  gif: "image/gif",
};

const EXTENSIONS: Record<VideoFormat, string> = {
  mp4: ".mp4",
  webm: ".webm",
  mov: ".mov",
  avi: ".avi",
  mkv: ".mkv",
  wmv: ".wmv",
  flv: ".flv",
  gif: ".gif",
};

const QUALITY_PRESETS: Record<string, string> = {
  high: "-crf 18 -preset slow",
  medium: "-crf 23 -preset medium",
  low: "-crf 28 -preset fast",
};

let ffmpegInstance: FFmpeg | null = null;
let ffmpegLoading = false;
let ffmpegLoaded = false;

async function getFFmpeg(): Promise<FFmpeg> {
  if (ffmpegInstance) return ffmpegInstance;
  if (ffmpegLoading) {
    // Wait for existing load
    while (ffmpegLoading) {
      await new Promise((r) => setTimeout(r, 100));
    }
    if (ffmpegInstance) return ffmpegInstance;
  }

  ffmpegLoading = true;
  try {
    const ffmpeg = new FFmpeg();
    await ffmpeg.load({
      coreURL: "https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd/ffmpeg-core.js",
      wasmURL: "https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd/ffmpeg-core.wasm",
    });
    ffmpegInstance = ffmpeg;
    ffmpegLoaded = true;
    return ffmpeg;
  } catch (error) {
    throw new Error(
      "Failed to load FFmpeg: " +
        (error instanceof Error ? error.message : String(error))
    );
  } finally {
    ffmpegLoading = false;
  }
}

function getOutputFilename(originalName: string, format: VideoFormat): string {
  const baseName = originalName.replace(/\.[^/.]+$/, "");
  return `${baseName}${EXTENSIONS[format]}`;
}

function getQualityArgs(format: VideoFormat, quality: string = "medium"): string {
  if (format === "gif") {
    // GIF uses different settings
    return "-vf fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse";
  }
  if (format === "webm") {
    // VP9 with libopus audio (WebM standard)
    const bitrate = quality === "high" ? "2M" : quality === "low" ? "500k" : "1M";
    return `-c:v libvpx-vp9 -b:v ${bitrate} -deadline good -cpu-used 2 -c:a libopus -b:a 128k`;
  }
  return QUALITY_PRESETS[quality] || QUALITY_PRESETS.medium;
}

/**
 * Convert a single video file to the target format using FFmpeg.wasm
 */
export async function convertVideo(
  file: File,
  options: VideoConversionOptions
): Promise<VideoConversionResult> {
  const outputFilename = getOutputFilename(file.name, options.outputFormat);

  try {
    const ffmpeg = await getFFmpeg();
    const inputName = "input" + file.name.substring(file.name.lastIndexOf("."));
    const outputName = "output" + EXTENSIONS[options.outputFormat];

    // Write input file to FFmpeg virtual filesystem
    await ffmpeg.writeFile(inputName, await fetchFile(file));

    // Build FFmpeg command
    const qualityArgs = getQualityArgs(options.outputFormat, options.quality);
    const args = ["-i", inputName, ...qualityArgs.split(" "), outputName];

    // Execute conversion
    const exitCode = await ffmpeg.exec(args);
    if (exitCode !== 0) {
      throw new Error(`FFmpeg conversion failed with exit code ${exitCode}`);
    }

    // Read output file
    const data = await ffmpeg.readFile(outputName);
    // @ts-ignore - FFmpeg wasm FileData type mismatch with BlobPart
    const blob = new Blob([data], { type: MIME_TYPES[options.outputFormat] });

    // Clean up virtual filesystem
    try {
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
    } catch {
      // Ignore cleanup errors
    }

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
 * Check if FFmpeg is loaded and ready
 */
export function isFFmpegReady(): boolean {
  return ffmpegLoaded;
}

/**
 * Preload FFmpeg in the background
 */
export async function preloadFFmpeg(): Promise<void> {
  if (!ffmpegLoaded && !ffmpegLoading) {
    await getFFmpeg();
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
export async function createZip(
  results: VideoConversionResult[]
): Promise<Blob> {
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

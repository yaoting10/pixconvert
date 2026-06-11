import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export type AudioFormat = "mp3" | "wav" | "ogg" | "aac" | "flac" | "m4a" | "wma" | "aiff" | "opus";

export interface AudioConversionOptions {
  outputFormat: AudioFormat;
  bitrate?: "64k" | "128k" | "192k" | "256k" | "320k";
  sampleRate?: "22050" | "44100" | "48000";
}

export interface AudioConversionResult {
  success: boolean;
  blob: Blob | null;
  url: string | null;
  filename: string;
  originalSize: number;
  convertedSize: number;
  error?: string;
}

const MIME_TYPES: Record<AudioFormat, string> = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",
  aac: "audio/aac",
  flac: "audio/flac",
  m4a: "audio/mp4",
  wma: "audio/x-ms-wma",
  aiff: "audio/aiff",
  opus: "audio/opus",
};

const EXTENSIONS: Record<AudioFormat, string> = {
  mp3: ".mp3",
  wav: ".wav",
  ogg: ".ogg",
  aac: ".aac",
  flac: ".flac",
  m4a: ".m4a",
  wma: ".wma",
  aiff: ".aiff",
  opus: ".opus",
};

// Shared FFmpeg instance (same as videoConverter)
let ffmpegInstance: FFmpeg | null = null;
let ffmpegLoading = false;
let ffmpegLoaded = false;

async function getFFmpeg(): Promise<FFmpeg> {
  if (ffmpegInstance) return ffmpegInstance;
  if (ffmpegLoading) {
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

function getOutputFilename(originalName: string, format: AudioFormat): string {
  const baseName = originalName.replace(/\.[^/.]+$/, "");
  return `${baseName}${EXTENSIONS[format]}`;
}

function getFFmpegArgs(
  inputName: string,
  outputName: string,
  format: AudioFormat,
  bitrate?: string,
  sampleRate?: string
): string[] {
  const args: string[] = ["-i", inputName];

  // Audio codec selection
  const codecMap: Record<AudioFormat, string> = {
    mp3: "libmp3lame",
    wav: "pcm_s16le",
    ogg: "libvorbis",
    aac: "aac",
    flac: "flac",
    m4a: "aac",
    wma: "wmav2",
    aiff: "pcm_s16be",
    opus: "libopus",
  };

  args.push("-c:a", codecMap[format]);

  // Bitrate
  if (bitrate) {
    args.push("-b:a", bitrate);
  }

  // Sample rate
  if (sampleRate) {
    args.push("-ar", sampleRate);
  }

  // Format-specific options
  if (format === "mp3") {
    args.push("-q:a", "0"); // Best quality VBR
  } else if (format === "ogg") {
    args.push("-q:a", "6");
  }

  args.push("-y", outputName);
  return args;
}

/**
 * Convert a single audio file to the target format using FFmpeg.wasm
 */
export async function convertAudio(
  file: File,
  options: AudioConversionOptions
): Promise<AudioConversionResult> {
  const outputFilename = getOutputFilename(file.name, options.outputFormat);

  try {
    const ffmpeg = await getFFmpeg();
    const inputName = "input" + file.name.substring(file.name.lastIndexOf("."));
    const outputName = "output" + EXTENSIONS[options.outputFormat];

    // Write input file to FFmpeg virtual filesystem
    await ffmpeg.writeFile(inputName, await fetchFile(file));

    // Build FFmpeg command
    const args = getFFmpegArgs(
      inputName,
      outputName,
      options.outputFormat,
      options.bitrate,
      options.sampleRate
    );

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
  results: AudioConversionResult[]
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

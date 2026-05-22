"use client";

import { useState, useCallback } from "react";
import { UploadCloud } from "lucide-react";

const FORMATS = ["JPG", "PNG", "WebP", "AVIF"];

export function HeroSection() {
  const [selectedFormat, setSelectedFormat] = useState("PNG");
  const [isDragging, setIsDragging] = useState(false);

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
    // File handling would go here
  }, []);

  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-12 px-6 mx-auto max-w-[1120px] text-center" id="tools">
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-[56px] font-bold text-on-background mb-6 max-w-3xl leading-tight">
        Convert Images Instantly. No Upload Needed.
      </h1>
      <p className="text-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
        Lightning-fast, secure image conversion powered by local WebAssembly. Your files never leave your device.
      </p>

      {/* Dropzone Card */}
      <div className="bg-surface-container-lowest border border-border rounded-xl w-full max-w-[800px] p-4 mb-10 shadow-sm">
        <div
          className={`border-2 border-dashed rounded-lg bg-surface flex flex-col items-center justify-center py-16 px-6 cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-primary bg-accent-light border-solid"
              : "border-primary hover:bg-surface-container-low"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadCloud className="h-12 w-12 text-primary mb-4" strokeWidth={1.5} />
          <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-on-background mb-2">
            Drag & Drop images here
          </p>
          <p className="text-base text-on-surface-variant">
            or click to browse from your computer
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            id="file-input"
            onChange={() => {}}
          />
          <label
            htmlFor="file-input"
            className="mt-4 bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Select Files
          </label>
        </div>
      </div>

      {/* Format Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {FORMATS.map((fmt) => (
          <button
            key={fmt}
            onClick={() => setSelectedFormat(fmt)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedFormat === fmt
                ? "bg-primary text-white"
                : "bg-surface-container-lowest border border-border text-on-background hover:border-primary"
            }`}
          >
            {fmt}
          </button>
        ))}
      </div>
    </section>
  );
}

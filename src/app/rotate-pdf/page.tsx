"use client";

import { useState } from "react";
import { FileUp, X, Download, FileText, RotateCw } from "lucide-react";
import { PDFDocument, degrees } from "pdf-lib";

export default function RotatePDFPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState(90); // 90, 180, 270
  const [rotating, setRotating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFile = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }
    setPdfFile(file);
  };

  const clearFile = () => {
    setPdfFile(null);
    setProgress(0);
  };

  const rotatePDF = async () => {
    if (!pdfFile) return;
    setRotating(true);
    setProgress(0);

    try {
      const bytes = await pdfFile.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      
      const pages = pdf.getPages();
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + rotation));
        setProgress(Math.round(((i + 1) / pages.length) * 50));
      }
      
      const pdfBytes = await pdf.save();
      setProgress(100);
      
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `rotated-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF rotation failed:", err);
      alert("PDF rotation failed. Please try again.");
    } finally {
      setRotating(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Rotate PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Rotate all pages in your PDF document. Choose the rotation angle and apply instantly.
        </p>
      </section>

      {/* Upload Area */}
      <section className="px-6 max-w-[1120px] mx-auto">
        {!pdfFile ? (
          <div
            className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest"
            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-primary", "bg-primary/5"); }}
            onDragLeave={(e) => { e.currentTarget.classList.remove("border-primary", "bg-primary/5"); }}
            onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-primary", "bg-primary/5"); handleFile(e.dataTransfer.files); }}
            onClick={() => document.getElementById("pdf-input")?.click()}
          >
            <FileText className="h-12 w-12 text-error mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-on-background mb-2">Drag & drop a PDF file here</h3>
            <p className="text-sm text-on-surface-variant mb-4">Select a PDF to rotate its pages</p>
            <input
              id="pdf-input"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files)}
            />
            <button className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Choose PDF
            </button>
          </div>
        ) : (
          <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="h-10 w-10 text-error" />
              <div className="flex-1">
                <h3 className="font-semibold text-on-background">{pdfFile.name}</h3>
                <p className="text-sm text-on-surface-variant">{(pdfFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button onClick={clearFile} className="text-on-surface-variant hover:text-error">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Rotation Options */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Rotation</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setRotation(90)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    rotation === 90 ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <RotateCw className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-on-background text-sm">90° Clockwise</div>
                  <div className="text-xs text-on-surface-variant mt-1">Rotate right</div>
                </button>
                <button
                  onClick={() => setRotation(180)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    rotation === 180 ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <RotateCw className="h-5 w-5 text-success mb-2" />
                  <div className="font-medium text-on-background text-sm">180°</div>
                  <div className="text-xs text-on-surface-variant mt-1">Flip upside down</div>
                </button>
                <button
                  onClick={() => setRotation(270)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    rotation === 270 ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <RotateCw className="h-5 w-5 text-tertiary mb-2" />
                  <div className="font-medium text-on-background text-sm">90° Counter-Clockwise</div>
                  <div className="text-xs text-on-surface-variant mt-1">Rotate left</div>
                </button>
              </div>
            </div>

            {/* Rotate Button */}
            <button
              onClick={rotatePDF}
              disabled={rotating}
              className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {rotating ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Rotating... {progress}%
                </>
              ) : (
                <>
                  <RotateCw className="h-5 w-5" />
                  Rotate PDF
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Rotate PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Rotate all pages in your PDF document at once. Choose between 90° clockwise, 90° counter-clockwise, or 180° flip. Perfect for fixing scanned documents that were uploaded in the wrong orientation.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

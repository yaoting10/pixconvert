"use client";

import { useState } from "react";
import { FileUp, X, Download, FileText, Type } from "lucide-react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default function PDFAddTextPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [fontSize, setFontSize] = useState(14);
  const [adding, setAdding] = useState(false);
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
    setText("");
    setProgress(0);
  };

  const addText = async () => {
    if (!pdfFile || !text) return;
    setAdding(true);
    setProgress(0);

    try {
      const bytes = await pdfFile.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      
      const pages = pdf.getPages();
      const targetPage = pages[Math.min(pageNumber - 1, pages.length - 1)];
      const font = await pdf.embedFont(StandardFonts.Helvetica);
      
      targetPage.drawText(text, {
        x,
        y,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      });
      
      setProgress(50);
      
      const pdfBytes = await pdf.save();
      setProgress(100);
      
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `edited-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF add text failed:", err);
      alert("Failed to add text. Please try again.");
    } finally {
      setAdding(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Add Text to PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Add text annotations to your PDF pages. Specify position and font size.
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
            <p className="text-sm text-on-surface-variant mb-4">Select a PDF to add text</p>
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

            {/* Text Settings */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Text</label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text to add"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Page</label>
                  <input
                    type="number"
                    min={1}
                    value={pageNumber}
                    onChange={(e) => setPageNumber(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">X Position</label>
                  <input
                    type="number"
                    value={x}
                    onChange={(e) => setX(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Y Position</label>
                  <input
                    type="number"
                    value={y}
                    onChange={(e) => setY(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Font Size</label>
                  <input
                    type="number"
                    min={8}
                    max={72}
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value) || 14)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                  />
                </div>
              </div>
            </div>

            {/* Add Button */}
            <button
              onClick={addText}
              disabled={adding || !text}
              className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {adding ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Adding... {progress}%
                </>
              ) : (
                <>
                  <Type className="h-5 w-5" />
                  Add Text
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Add Text to PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Add text annotations to your PDF documents at specific positions. Choose the page number, X/Y coordinates, and font size. Perfect for adding labels, signatures, or notes to existing PDFs.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { FileUp, X, Download, FileText, Scissors } from "lucide-react";
import { PDFDocument } from "pdf-lib";

export default function SplitPDFPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [splitMode, setSplitMode] = useState("all"); // all, range, extract
  const [pageRange, setPageRange] = useState("");
  const [extractPages, setExtractPages] = useState("");
  const [splitting, setSplitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFile = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }
    setPdfFile(file);
    
    // Get page count
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    setPageCount(pdf.getPageCount());
  };

  const clearFile = () => {
    setPdfFile(null);
    setPageCount(0);
    setPageRange("");
    setExtractPages("");
  };

  const splitPDF = async () => {
    if (!pdfFile) return;
    setSplitting(true);
    setProgress(0);

    try {
      const bytes = await pdfFile.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const totalPages = pdf.getPageCount();

      let pagesToExtract: number[] = [];

      if (splitMode === "all") {
        // Split each page into separate PDF
        pagesToExtract = Array.from({ length: totalPages }, (_, i) => i);
      } else if (splitMode === "range") {
        // Parse range like "1-3,5,7-9"
        const ranges = pageRange.split(",").map(r => r.trim());
        for (const range of ranges) {
          if (range.includes("-")) {
            const [start, end] = range.split("-").map(n => parseInt(n.trim()) - 1);
            for (let i = start; i <= end; i++) {
              if (i >= 0 && i < totalPages) pagesToExtract.push(i);
            }
          } else {
            const page = parseInt(range) - 1;
            if (page >= 0 && page < totalPages) pagesToExtract.push(page);
          }
        }
      } else if (splitMode === "extract") {
        // Extract specific pages
        const pages = extractPages.split(",").map(p => parseInt(p.trim()) - 1);
        pagesToExtract = pages.filter(p => p >= 0 && p < totalPages);
      }

      if (pagesToExtract.length === 0) {
        alert("No valid pages selected.");
        return;
      }

      // Create new PDF with extracted pages
      const newPdf = await PDFDocument.create();
      const pages = await newPdf.copyPages(pdf, pagesToExtract);
      pages.forEach(page => newPdf.addPage(page));

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      
      if (splitMode === "all") {
        a.download = `split-pages-${Date.now()}.pdf`;
      } else {
        a.download = `extracted-pages-${Date.now()}.pdf`;
      }
      
      a.click();
      URL.revokeObjectURL(url);
      setProgress(100);
    } catch (err) {
      console.error("PDF split failed:", err);
      alert("PDF split failed. Please check your page selection and try again.");
    } finally {
      setSplitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Split PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Extract pages or split your PDF into multiple files. Choose specific pages or ranges to extract.
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
            <p className="text-sm text-on-surface-variant mb-4">Select a PDF to split or extract pages from</p>
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
                <p className="text-sm text-on-surface-variant">{pageCount} pages • {(pdfFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button onClick={clearFile} className="text-on-surface-variant hover:text-error">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Split Mode */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Split Mode</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSplitMode("all")}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    splitMode === "all" ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <Scissors className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-on-background text-sm">Extract All Pages</div>
                  <div className="text-xs text-on-surface-variant mt-1">Each page as separate PDF</div>
                </button>
                <button
                  onClick={() => setSplitMode("range")}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    splitMode === "range" ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <Scissors className="h-5 w-5 text-success mb-2" />
                  <div className="font-medium text-on-background text-sm">Page Range</div>
                  <div className="text-xs text-on-surface-variant mt-1">Extract a range of pages</div>
                </button>
                <button
                  onClick={() => setSplitMode("extract")}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    splitMode === "extract" ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <Scissors className="h-5 w-5 text-tertiary mb-2" />
                  <div className="font-medium text-on-background text-sm">Specific Pages</div>
                  <div className="text-xs text-on-surface-variant mt-1">Extract specific page numbers</div>
                </button>
              </div>
            </div>

            {/* Page Input */}
            {splitMode === "range" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Page Range (e.g., 1-3, 5, 7-9)
                </label>
                <input
                  type="text"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder={`1-${pageCount}`}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                />
                <p className="text-xs text-on-surface-variant mt-1">Total pages: {pageCount}</p>
              </div>
            )}

            {splitMode === "extract" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Pages to Extract (comma separated, e.g., 1, 3, 5)
                </label>
                <input
                  type="text"
                  value={extractPages}
                  onChange={(e) => setExtractPages(e.target.value)}
                  placeholder="1, 3, 5"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                />
                <p className="text-xs text-on-surface-variant mt-1">Total pages: {pageCount}</p>
              </div>
            )}

            {/* Split Button */}
            <button
              onClick={splitPDF}
              disabled={splitting}
              className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {splitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Splitting... {progress}%
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  Split PDF
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Split PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Extract specific pages from your PDF documents. You can extract all pages as separate files, select a range of pages, or pick specific page numbers. Perfect for sharing only relevant pages or creating smaller documents.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

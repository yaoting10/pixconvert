"use client";

import { useState, useRef } from "react";
import { FileUp, X, Download, FileText, Minimize, Image } from "lucide-react";
import { PDFDocument } from "pdf-lib";

// pdf.js types
interface PDFJSPage {
  getViewport: (options: { scale: number }) => { width: number; height: number };
  render: (options: { canvasContext: CanvasRenderingContext2D; viewport: { width: number; height: number } }) => { promise: Promise<void> };
}

interface PDFJSDocument {
  numPages: number;
  getPage: (pageNum: number) => Promise<PDFJSPage>;
}

declare global {
  interface Window {
    pdfjsLib?: {
      getDocument: (data: { data: Uint8Array }) => { promise: Promise<PDFJSDocument> };
      GlobalWorkerOptions?: { workerSrc: string };
    };
  }
}

export default function CompressPDFPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [compressing, setCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quality, setQuality] = useState("medium"); // low, medium, high
  const [result, setResult] = useState<{ originalSize: number; compressedSize: number; quality: string } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }
    setPdfFile(file);
    setResult(null);
  };

  const clearFile = () => {
    setPdfFile(null);
    setProgress(0);
    setResult(null);
  };

  // pdf.js worker (loaded as a separate script)
  const PDFJS_WORKER_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
  
  // Load pdf.js dynamically
  const loadPDFJS = async (): Promise<boolean> => {
    if (typeof window === 'undefined') return false;
    if (window.pdfjsLib) return true;
    
    return new Promise((resolve) => {
      const script = document.createElement('script');
      // Use UMD version (not ES module) so it attaches to window
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.js';
      script.onload = () => {
        setTimeout(() => {
          resolve(!!window.pdfjsLib);
        }, 200);
      };
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
  };
  // Compress PDF by rendering each page to image and re-creating PDF
  const compressPDFByRendering = async (file: File, qualityLevel: string) => {
    const imageQuality = qualityLevel === "low" ? 0.3 : qualityLevel === "medium" ? 0.6 : 0.85;
    const maxDimension = qualityLevel === "low" ? 1200 : qualityLevel === "medium" ? 1800 : 2400;
    const dpi = qualityLevel === "low" ? 72 : qualityLevel === "medium" ? 150 : 200;
    
    // Load pdf.js
    const pdfjsLoaded = await loadPDFJS();
    if (!pdfjsLoaded || !window.pdfjsLib) {
      throw new Error("PDF.js library could not be loaded");
    }
    
    const pdfjsLib = window.pdfjsLib;
    
    // Load PDF with pdf.js - pass worker source directly in options
    const bytes = await file.arrayBuffer();
    const uint8Array = new Uint8Array(bytes);
    
    // Use getDocument with workerSrc option (if supported by this version)
    // @ts-ignore - pdf.js API may vary
    const docOptions: any = { data: uint8Array };
    
    // Try to set worker source via getDocument options
    // @ts-ignore
    if (pdfjsLib.GlobalWorkerOptions) {
      // @ts-ignore
      pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC;
    }
    
    const pdfDoc = await pdfjsLib.getDocument(docOptions).promise;
    
    // Create new PDF with pdf-lib
    const newPdf = await PDFDocument.create();
    
    const totalPages = pdfDoc.numPages;
    
    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      
      // Calculate scale based on DPI and max dimension
      const viewport = page.getViewport({ scale: 1 });
      const maxDim = Math.max(viewport.width, viewport.height);
      const scale = maxDim > maxDimension ? maxDimension / maxDim : 1;
      const renderScale = (dpi / 72) * scale; // 72 is default PDF DPI
      
      const renderViewport = page.getViewport({ scale: renderScale });
      const canvasWidth = Math.round(renderViewport.width);
      const canvasHeight = Math.round(renderViewport.height);
      
      // Create canvas for rendering
      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;
      
      // Render page to canvas
      await page.render({
        canvasContext: ctx,
        viewport: renderViewport
      }).promise;
      
      // Convert to JPEG with quality setting
      const jpegData = await new Promise<Uint8Array>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) {
            const reader = new FileReader();
            reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
            reader.readAsArrayBuffer(blob);
          } else {
            resolve(new Uint8Array());
          }
        }, 'image/jpeg', imageQuality);
      });
      
      if (jpegData.length > 0) {
        // Embed JPEG into new PDF
        const embeddedImage = await newPdf.embedJpg(jpegData);
        
        // Add page with original dimensions but at 72 DPI
        const pdfWidth = viewport.width * 72 / 72; // points (1/72 inch)
        const pdfHeight = viewport.height * 72 / 72;
        
        const newPage = newPdf.addPage([pdfWidth, pdfHeight]);
        newPage.drawImage(embeddedImage, {
          x: 0,
          y: 0,
          width: pdfWidth,
          height: pdfHeight,
        });
      }
      
      // Clean up
      canvas.remove();
      
      setProgress(Math.round((pageNum / totalPages) * 80));
    }
    
    return newPdf;
  };

  const compressPDF = async () => {
    if (!pdfFile) return;
    setCompressing(true);
    setProgress(0);
    setResult(null);

    try {
      setProgress(5);
      
      // Use rendering-based compression for real quality control
      const compressedPdf = await compressPDFByRendering(pdfFile, quality);
      
      setProgress(85);
      
      // Save the new PDF
      const pdfBytes = await compressedPdf.save({ 
        useObjectStreams: true,
        addDefaultPage: false
      });
      
      setProgress(95);
      
      const originalSize = pdfFile.size;
      const compressedSize = pdfBytes.length;
      
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `compressed-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      
      setResult({ originalSize, compressedSize, quality });
      setProgress(100);
    } catch (err) {
      console.error("PDF compression failed:", err);
      alert("PDF compression failed: " + (err instanceof Error ? err.message : "Please try again."));
    } finally {
      setCompressing(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Compress PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Reduce PDF file size while maintaining quality. Remove unnecessary data and optimize the document.
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
            <p className="text-sm text-on-surface-variant mb-4">Select a PDF to compress and optimize</p>
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

            {/* Quality Settings */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Compression Level</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setQuality("low")}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    quality === "low" ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <Minimize className="h-5 w-5 text-primary mb-2" />
                  <div className="font-medium text-on-background text-sm">Maximum Compression</div>
                  <div className="text-xs text-on-surface-variant mt-1">72 DPI, 30% JPEG quality</div>
                  <div className="text-xs text-error mt-1">~70-90% smaller, visible quality loss</div>
                </button>
                <button
                  onClick={() => setQuality("medium")}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    quality === "medium" ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <Minimize className="h-5 w-5 text-success mb-2" />
                  <div className="font-medium text-on-background text-sm">Balanced</div>
                  <div className="text-xs text-on-surface-variant mt-1">150 DPI, 60% JPEG quality</div>
                  <div className="text-xs text-success mt-1">~40-60% smaller, good quality</div>
                </button>
                <button
                  onClick={() => setQuality("high")}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    quality === "high" ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                  }`}
                >
                  <Minimize className="h-5 w-5 text-tertiary mb-2" />
                  <div className="font-medium text-on-background text-sm">High Quality</div>
                  <div className="text-xs text-on-surface-variant mt-1">200 DPI, 85% JPEG quality</div>
                  <div className="text-xs text-tertiary mt-1">~20-40% smaller, best quality</div>
                </button>
              </div>
            </div>

            {/* Compress Button */}
            <button
              onClick={compressPDF}
              disabled={compressing}
              className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {compressing ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Compressing... {progress}%
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  Compress PDF
                </>
              )}
            </button>

            {/* Result */}
            {result && (
              <div className="mt-4 p-4 bg-success/10 border border-success rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-on-background">
                      Original: {(result.originalSize / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <p className="text-sm font-medium text-success">
                      Compressed: {(result.compressedSize / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-success">
                      -{((1 - result.compressedSize / result.originalSize) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-on-surface-variant">size reduction</p>
                  </div>
                </div>
                <div className="border-t border-success/20 pt-3">
                  <p className="text-xs text-on-surface-variant">
                    Quality: <span className="font-medium text-on-background">
                      {result.quality === 'low' ? 'Maximum Compression (30% JPEG)' : 
                       result.quality === 'medium' ? 'Balanced (60% JPEG)' : 
                       'High Quality (85% JPEG)'}
                    </span>
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {result.quality === 'low' ? 'Smallest file size, visible quality loss may occur' : 
                     result.quality === 'medium' ? 'Good balance of size and visual quality' : 
                     'Minimal compression, best visual quality'}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Compress PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Reduce your PDF file size for easier sharing and faster uploads. Our compression tool removes unnecessary metadata, optimizes images, and restructures the PDF to minimize file size while preserving visual quality.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useCallback } from "react";
import { X, FileText, Image } from "lucide-react";

type PDFJSLib = typeof import("pdfjs-dist");
type ConvertedImage = {
  filename: string;
  blob: Blob;
};

export default function PDFToImagesPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageFormat, setImageFormat] = useState("png"); // png, jpg, webp
  const [dpi, setDpi] = useState(2); // 1x, 2x, 3x

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

  const convertToImages = useCallback(async () => {
    if (!pdfFile) return;
    setConverting(true);
    setProgress(0);

    try {
      const pdfjsLib: PDFJSLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const numPages = pdf.numPages;
      const images: ConvertedImage[] = [];
      const extension = imageFormat === "jpg" ? "jpg" : imageFormat === "webp" ? "webp" : "png";

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const scale = dpi;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        const mimeType = imageFormat === "jpg" ? "image/jpeg" : imageFormat === "webp" ? "image/webp" : "image/png";
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob((result) => {
            if (result) {
              resolve(result);
            } else {
              reject(new Error(`Failed to render page ${i}`));
            }
          }, mimeType, 0.9);
        });

        images.push({
          filename: `page-${i}.${extension}`,
          blob,
        });

        setProgress(Math.round((i / numPages) * 100));
      }

      // Download a single image directly. For multiple pages, use one ZIP so
      // browsers do not block repeated automatic downloads.
      if (images.length === 1) {
        const url = URL.createObjectURL(images[0].blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = images[0].filename;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        const { default: JSZip } = await import("jszip");
        const zip = new JSZip();

        images.forEach((image) => {
          zip.file(image.filename, image.blob);
        });

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `pdf-pages-${Date.now()}.zip`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err: any) {
      console.error("PDF to images conversion failed:", err);
      alert("Conversion failed: " + (err?.message || "Unknown error"));
    } finally {
      setConverting(false);
    }
  }, [pdfFile, imageFormat, dpi]);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          PDF to Images
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Convert PDF pages to high-quality images. Choose your format and resolution.
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
            <p className="text-sm text-on-surface-variant mb-4">Convert PDF pages to PNG, JPG, or WebP images</p>
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

            {/* Settings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Image Format</label>
                <select 
                  value={imageFormat} 
                  onChange={(e) => setImageFormat(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                >
                  <option value="png">PNG (lossless)</option>
                  <option value="jpg">JPG (compressed)</option>
                  <option value="webp">WebP (modern)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Quality (DPI Scale)</label>
                <select 
                  value={dpi} 
                  onChange={(e) => setDpi(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
                >
                  <option value={1}>1x (72 DPI)</option>
                  <option value={2}>2x (144 DPI)</option>
                  <option value={3}>3x (216 DPI)</option>
                </select>
              </div>
            </div>

            {/* Convert Button */}
            <button
              onClick={convertToImages}
              disabled={converting}
              className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {converting ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Converting... {progress}%
                </>
              ) : (
                <>
                  <Image className="h-5 w-5" />
                  Convert to Images
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About PDF to Images
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Convert PDF documents to high-quality images. Each page becomes a separate image file. Choose between PNG for lossless quality, JPG for smaller files, or WebP for the best balance of size and quality.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

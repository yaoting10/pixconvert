"use client";

import { useState, useCallback } from "react";
import { FileUp, X, ArrowUpDown, Download, RotateCcw, FileImage } from "lucide-react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PDFDocument } from "pdf-lib";

interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

function SortableImageItem({ image, onRemove }: { image: ImageFile; onRemove: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-3 bg-surface-container-lowest border border-border rounded-lg p-3">
      <button {...attributes} {...listeners} className="cursor-grab text-on-surface-variant hover:text-primary">
        <ArrowUpDown className="h-4 w-4" />
      </button>
      <img src={image.preview} alt={image.file.name} className="h-12 w-12 object-cover rounded" />
      <span className="text-sm text-on-surface-variant flex-1 truncate">{image.file.name}</span>
      <button onClick={() => onRemove(image.id)} className="text-on-surface-variant hover:text-error">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function ImagesToPDFPage() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [pageSize, setPageSize] = useState("A4");
  const [orientation, setOrientation] = useState("portrait");
  const [margin, setMargin] = useState("none");
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback((event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const imageFiles = Array.from(files).filter((f) => f.type.startsWith("image/"));
    const newImages = imageFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  }, []);

  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    images.forEach((i) => URL.revokeObjectURL(i.preview));
    setImages([]);
  }, [images]);

  const convertToPDF = async () => {
    if (images.length === 0) return;
    setConverting(true);
    setProgress(0);

    try {
      const pdfDoc = await PDFDocument.create();
      const total = images.length;

      for (let i = 0; i < images.length; i++) {
        const imageFile = images[i];
        const bytes = await imageFile.file.arrayBuffer();
        let embeddedImage;

        if (imageFile.file.type === "image/png") {
          embeddedImage = await pdfDoc.embedPng(bytes);
        } else if (imageFile.file.type === "image/jpeg" || imageFile.file.type === "image/jpg") {
          embeddedImage = await pdfDoc.embedJpg(bytes);
        } else {
          // Convert other formats to canvas first
          const canvas = document.createElement("canvas");
          const img = new Image();
          img.src = imageFile.preview;
          await new Promise((resolve) => { img.onload = resolve; });
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d")!;
          ctx.drawImage(img, 0, 0);
          const pngBytes = await new Promise<Uint8Array>((resolve) => {
            canvas.toBlob(async (blob) => {
              const arr = await blob!.arrayBuffer();
              resolve(new Uint8Array(arr));
            }, "image/png");
          });
          embeddedImage = await pdfDoc.embedPng(pngBytes);
        }

        // Page size
        let width = 595, height = 842; // A4 default
        if (pageSize === "letter") { width = 612; height = 792; }
        if (orientation === "landscape") [width, height] = [height, width];

        const page = pdfDoc.addPage([width, height]);

        // Calculate image size with margin
        const marginPx = margin === "small" ? 36 : margin === "medium" ? 72 : 0;
        const maxW = width - marginPx * 2;
        const maxH = height - marginPx * 2;
        const imgW = embeddedImage.width;
        const imgH = embeddedImage.height;
        const scale = Math.min(maxW / imgW, maxH / imgH, 1);
        const drawW = imgW * scale;
        const drawH = imgH * scale;
        const x = (width - drawW) / 2;
        const y = (height - drawH) / 2;

        page.drawImage(embeddedImage, { x, y, width: drawW, height: drawH });
        setProgress(Math.round(((i + 1) / total) * 100));
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `converted-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF conversion failed:", err);
      alert("PDF conversion failed. Please try again.");
    } finally {
      setConverting(false);
      setProgress(0);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Images to PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Combine multiple images into a single PDF document. Drag to reorder, adjust settings, and download instantly.
        </p>
      </section>

      {/* Upload Area */}
      <section className="px-6 max-w-[1120px] mx-auto">
        <div
          className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest"
          onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-primary", "bg-primary/5"); }}
          onDragLeave={(e) => { e.currentTarget.classList.remove("border-primary", "bg-primary/5"); }}
          onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-primary", "bg-primary/5"); handleFiles(e.dataTransfer.files); }}
          onClick={() => document.getElementById("image-input")?.click()}
        >
          <FileImage className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-on-background mb-2">Drag & drop images here</h3>
          <p className="text-sm text-on-surface-variant mb-4">JPG, PNG, WebP, AVIF, GIF, BMP — up to 2GB total</p>
          <input
            id="image-input"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <button className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Choose Images
          </button>
        </div>
      </section>

      {/* Image List & Settings */}
      {images.length > 0 && (
        <section className="px-6 max-w-[1120px] mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-on-background">{images.length} image(s) selected</h2>
            <button onClick={clearAll} className="text-sm text-on-surface-variant hover:text-error flex items-center gap-1">
              <RotateCcw className="h-4 w-4" /> Clear all
            </button>
          </div>

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={images.map((i) => i.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2 mb-6">
                {images.map((image) => (
                  <SortableImageItem key={image.id} image={image} onRemove={removeImage} />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          {/* Settings */}
          <div className="bg-surface-container-lowest border border-border rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-on-background mb-4">Settings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Page Size</label>
                <select value={pageSize} onChange={(e) => setPageSize(e.target.value)} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background">
                  <option value="A4">A4</option>
                  <option value="letter">Letter (US)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Orientation</label>
                <select value={orientation} onChange={(e) => setOrientation(e.target.value)} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background">
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Margin</label>
                <select value={margin} onChange={(e) => setMargin(e.target.value)} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background">
                  <option value="none">None</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                </select>
              </div>
            </div>
          </div>

          {/* Convert Button */}
          <button
            onClick={convertToPDF}
            disabled={converting || images.length === 0}
            className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {converting ? (
              <>
                <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                Converting... {progress}%
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Convert to PDF
              </>
            )}
          </button>
        </section>
      )}

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Images to PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Convert any image format to a professional PDF document. Our tool supports JPG, PNG, WebP, AVIF, GIF, BMP, and TIFF images. Each image becomes a page in the PDF, and you can drag to reorder them before conversion.</p>
          <p>All processing happens locally in your browser using WebAssembly technology. Your images never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

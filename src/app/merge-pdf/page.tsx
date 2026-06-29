"use client";

import { useState, useCallback } from "react";
import { FileUp, X, ArrowUpDown, Download, RotateCcw, FileText } from "lucide-react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PDFDocument } from "pdf-lib";

interface PDFFile {
  id: string;
  file: File;
  name: string;
  size: string;
}

function SortablePDFItem({ pdf, onRemove }: { pdf: PDFFile; onRemove: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: pdf.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-3 bg-surface-container-lowest border border-border rounded-lg p-3">
      <button {...attributes} {...listeners} className="cursor-grab text-on-surface-variant hover:text-primary">
        <ArrowUpDown className="h-4 w-4" />
      </button>
      <FileText className="h-8 w-8 text-error" />
      <div className="flex-1 min-w-0">
        <span className="text-sm text-on-surface-variant block truncate">{pdf.name}</span>
        <span className="text-xs text-on-surface-variant/60">{pdf.size}</span>
      </div>
      <button onClick={() => onRemove(pdf.id)} className="text-on-surface-variant hover:text-error">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function MergePDFPage() {
  const [pdfs, setPdfs] = useState<PDFFile[]>([]);
  const [merging, setMerging] = useState(false);
  const [progress, setProgress] = useState(0);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback((event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setPdfs((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const pdfFiles = Array.from(files).filter((f) => f.type === "application/pdf");
    const newPdfs = pdfFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
    }));
    setPdfs((prev) => [...prev, ...newPdfs]);
  }, []);

  const removePDF = useCallback((id: string) => {
    setPdfs((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setPdfs([]);
  }, []);

  const mergePDFs = async () => {
    if (pdfs.length < 2) {
      alert("Please select at least 2 PDF files to merge.");
      return;
    }
    setMerging(true);
    setProgress(0);

    try {
      const mergedPdf = await PDFDocument.create();
      const total = pdfs.length;

      for (let i = 0; i < pdfs.length; i++) {
        const pdfFile = pdfs[i];
        const bytes = await pdfFile.file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach((page) => mergedPdf.addPage(page));
        setProgress(Math.round(((i + 1) / total) * 100));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `merged-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF merge failed:", err);
      alert("PDF merge failed. Please try again.");
    } finally {
      setMerging(false);
      setProgress(0);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Merge PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Combine multiple PDF files into one document. Drag to reorder pages, then download the merged result.
        </p>
      </section>

      {/* Upload Area */}
      <section className="px-6 max-w-[1120px] mx-auto">
        <div
          className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest"
          onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-primary", "bg-primary/5"); }}
          onDragLeave={(e) => { e.currentTarget.classList.remove("border-primary", "bg-primary/5"); }}
          onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-primary", "bg-primary/5"); handleFiles(e.dataTransfer.files); }}
          onClick={() => document.getElementById("pdf-input")?.click()}
        >
          <FileText className="h-12 w-12 text-error mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-on-background mb-2">Drag & drop PDF files here</h3>
          <p className="text-sm text-on-surface-variant mb-4">Select multiple PDFs to merge them into one</p>
          <input
            id="pdf-input"
            type="file"
            multiple
            accept=".pdf"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <button className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Choose PDFs
          </button>
        </div>
      </section>

      {/* PDF List */}
      {pdfs.length > 0 && (
        <section className="px-6 max-w-[1120px] mx-auto mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-on-background">{pdfs.length} PDF(s) selected</h2>
            <button onClick={clearAll} className="text-sm text-on-surface-variant hover:text-error flex items-center gap-1">
              <RotateCcw className="h-4 w-4" /> Clear all
            </button>
          </div>

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={pdfs.map((i) => i.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2 mb-6">
                {pdfs.map((pdf) => (
                  <SortablePDFItem key={pdf.id} pdf={pdf} onRemove={removePDF} />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          <button
            onClick={mergePDFs}
            disabled={merging || pdfs.length < 2}
            className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {merging ? (
              <>
                <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                Merging... {progress}%
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Merge PDFs
              </>
            )}
          </button>
        </section>
      )}

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Merge PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Combine multiple PDF documents into a single file. Our tool preserves all original content, formatting, and metadata from each PDF. Simply drag and drop your files, reorder them as needed, and merge with one click.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

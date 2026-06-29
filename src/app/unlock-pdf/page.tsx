"use client";

import { useState } from "react";
import { FileUp, X, Download, FileText, Unlock } from "lucide-react";
import { PDFDocument } from "@cantoo/pdf-lib";

export default function UnlockPDFPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [unlocking, setUnlocking] = useState(false);
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
    setPassword("");
    setProgress(0);
  };

  const unlockPDF = async () => {
    if (!pdfFile) return;
    setUnlocking(true);
    setProgress(0);

    try {
      const bytes = await pdfFile.arrayBuffer();
      
      // Load with password if provided, otherwise try to load ignoring encryption
      let pdf;
      if (password) {
        pdf = await PDFDocument.load(bytes, { password });
      } else {
        pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      }
      
      // Create a brand new PDF and copy all pages to remove encryption
      // This is the only reliable way to strip encryption with pdf-lib
      const newPdf = await PDFDocument.create();
      const pages = pdf.getPages();
      
      for (let i = 0; i < pages.length; i++) {
        setProgress(Math.round((i / pages.length) * 50));
        const [copiedPage] = await newPdf.copyPages(pdf, [i]);
        newPdf.addPage(copiedPage);
      }
      
      // Copy metadata if available
      try {
        const title = pdf.getTitle();
        const author = pdf.getAuthor();
        const subject = pdf.getSubject();
        const creator = pdf.getCreator();
        const keywords = pdf.getKeywords();
        const producer = pdf.getProducer();
        
        if (title) newPdf.setTitle(title);
        if (author) newPdf.setAuthor(author);
        if (subject) newPdf.setSubject(subject);
        if (creator) newPdf.setCreator(creator);
        if (keywords) newPdf.setKeywords([keywords]);
        if (producer) newPdf.setProducer(producer);
      } catch (metaErr) {
        console.warn("Could not copy metadata:", metaErr);
      }
      
      const pdfBytes = await newPdf.save();
      
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `unlocked-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      setProgress(100);
    } catch (err) {
      console.error("PDF unlock failed:", err);
      alert("PDF unlock failed: " + (err instanceof Error ? err.message : "Please check your password and try again."));
    } finally {
      setUnlocking(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-on-background mb-4">
          Unlock PDF
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Remove password protection from your PDF documents. Enter the password to unlock and download.
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
            <p className="text-sm text-on-surface-variant mb-4">Select a password-protected PDF to unlock</p>
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

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Password (if required)</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter PDF password"
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-on-background"
              />
              <p className="text-xs text-on-surface-variant mt-1">Leave empty if the PDF is not password-protected</p>
            </div>

            {/* Unlock Button */}
            <button
              onClick={unlockPDF}
              disabled={unlocking}
              className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {unlocking ? (
                <>
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Unlocking... {progress}%
                </>
              ) : (
                <>
                  <Unlock className="h-5 w-5" />
                  Unlock PDF
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant mt-12">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6 text-center">
          About Unlock PDF
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
          <p>Remove password restrictions from your PDF documents. If you have the password, enter it to unlock the file. If the PDF only has owner restrictions (no user password), you can unlock it without entering a password.</p>
          <p>All processing happens locally in your browser. Your PDFs never leave your device, ensuring complete privacy and security.</p>
        </div>
      </section>
    </main>
  );
}

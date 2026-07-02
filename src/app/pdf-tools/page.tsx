import { FileUp, ArrowRight, Image, Download, Scissors, Merge, Minimize, Lock, Unlock, RotateCw, Type, Crop, Hash, Stamp, FileText, FileOutput } from "lucide-react";

const pdfTools = [
  {
    title: "Images to PDF",
    description: "Combine multiple images into a single PDF document",
    icon: FileOutput,
    href: "/images-to-pdf",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "PDF to Images",
    description: "Convert PDF pages to JPG, PNG, or WebP images",
    icon: Image,
    href: "/pdf-to-images",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    title: "Merge PDF",
    description: "Combine multiple PDFs into one document",
    icon: Merge,
    href: "/merge-pdf",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
  {
    title: "Split PDF",
    description: "Extract pages or split into multiple PDFs",
    icon: Scissors,
    href: "/split-pdf",
    color: "text-error",
    bg: "bg-error/10",
  },
  {
    title: "Compress PDF",
    description: "Reduce PDF file size while keeping quality",
    icon: Minimize,
    href: "/compress-pdf",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    title: "Protect PDF",
    description: "Add password protection to your PDF",
    icon: Lock,
    href: "/protect-pdf",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Unlock PDF",
    description: "Remove password from PDF files",
    icon: Unlock,
    href: "/unlock-pdf",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    title: "Rotate PDF",
    description: "Rotate PDF pages left or right",
    icon: RotateCw,
    href: "/rotate-pdf",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
  {
    title: "Add Page Numbers",
    description: "Add page numbers to PDF documents",
    icon: Hash,
    href: "/pdf-page-numbers",
    color: "text-error",
    bg: "bg-error/10",
  },
  {
    title: "Watermark PDF",
    description: "Add text or image watermarks",
    icon: Stamp,
    href: "/pdf-watermark",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    title: "Add Text to PDF",
    description: "Add text annotations to PDF pages",
    icon: Type,
    href: "/pdf-add-text",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Crop PDF",
    description: "Crop PDF pages to remove margins",
    icon: Crop,
    href: "/crop-pdf",
    color: "text-success",
    bg: "bg-success/10",
  },
];

export const metadata = {
  title: "Free PDF Tools - Convert, Merge, Split & Edit PDFs | PixConvert",
  description: "Free online PDF tools. Convert images to PDF, PDF to images, merge, split, compress, protect, rotate, add watermarks and more. All processing happens locally in your browser.",
  keywords: "PDF converter, images to PDF, PDF to images, merge PDF, split PDF, compress PDF, PDF tools, free PDF editor",
};

export default function PDFToolsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 text-center max-w-[1120px] mx-auto">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-on-background mb-4">
          Free PDF Tools
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
          Convert, edit, and organize PDFs — all locally in your browser. No uploads, no servers, no waiting.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <FileUp className="h-4 w-4 text-primary" />
            No Upload
          </span>
          <span className="flex items-center gap-1.5">
            <Download className="h-4 w-4 text-success" />
            Instant Download
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-tertiary" />
            100% Private
          </span>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 px-6 max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.href}
                href={tool.href}
                className="group bg-surface-container-lowest border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`${tool.bg} rounded-lg p-3`}>
                    <Icon className={`h-6 w-6 ${tool.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-background group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1">
                      {tool.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10 text-center">
          How PDF Tools Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-on-background mb-2">1. Upload Your PDF</h3>
            <p className="text-sm text-on-surface-variant">Drag and drop your PDF files or images. Everything stays on your device.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <Scissors className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-on-background mb-2">2. Choose Operation</h3>
            <p className="text-sm text-on-surface-variant">Select the tool you need — merge, split, compress, convert, or edit.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-tertiary" />
            </div>
            <h3 className="font-semibold text-on-background mb-2">3. Download Result</h3>
            <p className="text-sm text-on-surface-variant">Get your processed PDF instantly. No waiting, no watermarks.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-[1120px] mx-auto border-t border-outline-variant">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
          PDF Tools FAQ
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-surface-container-lowest border border-border rounded-lg p-4">
            <summary className="font-medium text-on-background cursor-pointer">Are PDF tools really free?</summary>
            <p className="text-sm text-on-surface-variant mt-2">Yes, all PDF tools are completely free. No hidden costs, no watermarks, no registration required.</p>
          </details>
          <details className="bg-surface-container-lowest border border-border rounded-lg p-4">
            <summary className="font-medium text-on-background cursor-pointer">Do my files get uploaded to a server?</summary>
            <p className="text-sm text-on-surface-variant mt-2">No. All PDF processing happens locally in your browser using WebAssembly technology. Your files never leave your device.</p>
          </details>
          <details className="bg-surface-container-lowest border border-border rounded-lg p-4">
            <summary className="font-medium text-on-background cursor-pointer">What is the file size limit?</summary>
            <p className="text-sm text-on-surface-variant mt-2">There is no artificial file size limit. The only constraint is your device's available memory (RAM).</p>
          </details>
          <details className="bg-surface-container-lowest border border-border rounded-lg p-4">
            <summary className="font-medium text-on-background cursor-pointer">Can I process multiple PDFs at once?</summary>
            <p className="text-sm text-on-surface-variant mt-2">Yes! Most tools support batch processing. You can merge multiple PDFs, convert multiple images to PDF, or process several files simultaneously.</p>
          </details>
        </div>
      </section>
    </main>
  );
}

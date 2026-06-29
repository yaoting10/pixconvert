"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LogoFull } from "@/components/ui/Logo";

/* ─────────────── Dropdown Links ─────────────── */
const imageLinks = [
  { label: "Image Converter", href: "/jpg-converter" },
  { label: "Batch Image Converter", href: "/batch-image-converter" },
];

const videoLinks = [
  { label: "Video Converter", href: "/mp4-converter" },
  { label: "Batch Video Converter", href: "/batch-video-converter" },
];

const audioLinks = [
  { label: "Audio Converter", href: "/audio-converter" },
];

const pdfLinks = [
  { label: "PDF Tools", href: "/pdf-tools" },
  { label: "Images to PDF", href: "/images-to-pdf" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imagesOpen, setImagesOpen] = useState(false);
  const [videosOpen, setVideosOpen] = useState(false);
  const [audioOpen, setAudioOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const imagesRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (imagesRef.current && !imagesRef.current.contains(event.target as Node)) {
        setImagesOpen(false);
      }
      if (videosRef.current && !videosRef.current.contains(event.target as Node)) {
        setVideosOpen(false);
      }
      if (audioRef.current && !audioRef.current.contains(event.target as Node)) {
        setAudioOpen(false);
      }
      if (pdfRef.current && !pdfRef.current.contains(event.target as Node)) {
        setPdfOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-xl border-b border-outline-variant">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
        {/* Logo */}
        <LogoFull />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Images Dropdown */}
          <div className="relative" ref={imagesRef}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setImagesOpen(!imagesOpen);
                setVideosOpen(false);
                setAudioOpen(false);
              }}
            >
              Images
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  imagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {imagesOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                {imageLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                    onClick={() => setImagesOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Videos Dropdown */}
          <div className="relative" ref={videosRef}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setVideosOpen(!videosOpen);
                setImagesOpen(false);
                setAudioOpen(false);
              }}
            >
              Videos
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  videosOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {videosOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                {videoLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                    onClick={() => setVideosOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Audio Dropdown */}
          <div className="relative" ref={audioRef}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setAudioOpen(!audioOpen);
                setImagesOpen(false);
                setVideosOpen(false);
                setPdfOpen(false);
              }}
            >
              Audio
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  audioOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {audioOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                {audioLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                    onClick={() => setAudioOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* PDF Dropdown */}
          <div className="relative" ref={pdfRef}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setPdfOpen(!pdfOpen);
                setImagesOpen(false);
                setVideosOpen(false);
                setAudioOpen(false);
              }}
            >
              PDF
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  pdfOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {pdfOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                {pdfLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                    onClick={() => setPdfOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-on-background cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            <div className="px-2 py-1.5 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
              Image
            </div>
            {imageLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-outline-variant px-2 py-1.5 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
              Video
            </div>
            {videoLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-outline-variant px-2 py-1.5 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
              Audio
            </div>
            {audioLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-outline-variant px-2 py-1.5 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
              PDF
            </div>
            {pdfLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

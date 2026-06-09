"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LogoFull } from "@/components/ui/Logo";

/* ─────────────── Image Converters ─────────────── */
const imageConverters = [
  { label: "JPG Converter", href: "/jpg-converter" },
  { label: "PNG Converter", href: "/png-converter" },
  { label: "WebP Converter", href: "/webp-converter" },
  { label: "GIF Converter", href: "/gif-converter" },
  { label: "AVIF Converter", href: "/avif-converter" },
  { label: "BMP Converter", href: "/bmp-converter" },
  { label: "TIFF Converter", href: "/tiff-converter" },
  { label: "ICO Converter", href: "/ico-converter" },
];

const imageTools = [
  { label: "JPG to PNG", href: "/jpg-to-png" },
  { label: "PNG to JPG", href: "/png-to-jpg" },
  { label: "JPG to WebP", href: "/jpg-to-webp" },
  { label: "PNG to WebP", href: "/png-to-webp" },
  { label: "WebP to PNG", href: "/webp-to-png" },
  { label: "WebP to JPG", href: "/webp-to-jpg" },
  { label: "PNG to ICO", href: "/png-to-ico" },
  { label: "ICO to PNG", href: "/ico-to-png" },
  { label: "JPG to GIF", href: "/jpg-to-gif" },
  { label: "PNG to GIF", href: "/png-to-gif" },
  { label: "Batch Image Converter", href: "/batch-image-converter" },
];

/* ─────────────── Video Converters ─────────────── */
const videoConverters = [
  { label: "MP4 Converter", href: "/mp4-converter" },
  { label: "MOV Converter", href: "/mov-converter" },
  { label: "AVI Converter", href: "/avi-converter" },
  { label: "MKV Converter", href: "/mkv-converter" },
  { label: "WMV Converter", href: "/wmv-converter" },
  { label: "FLV Converter", href: "/flv-converter" },
  { label: "GIF Converter", href: "/gif-converter" },
];

const videoTools = [
  { label: "Batch Video Converter", href: "/batch-video-converter" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imagesOpen, setImagesOpen] = useState(false);
  const [videosOpen, setVideosOpen] = useState(false);
  const imagesRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (imagesRef.current && !imagesRef.current.contains(event.target as Node)) {
        setImagesOpen(false);
      }
      if (videosRef.current && !videosRef.current.contains(event.target as Node)) {
        setVideosOpen(false);
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
          {/* Images Mega Dropdown */}
          <div className="relative" ref={imagesRef}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => {
                setImagesOpen(!imagesOpen);
                setVideosOpen(false);
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
              <div className="absolute top-full right-0 mt-2 w-[480px] bg-background border border-border rounded-xl shadow-xl py-4 z-50">
                <div className="grid grid-cols-2 gap-4 px-4">
                  {/* Column 1: By Format */}
                  <div>
                    <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-2 px-2">
                      By Format
                    </h4>
                    {imageConverters.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-2 py-1.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-md transition-colors cursor-pointer"
                        onClick={() => setImagesOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  {/* Column 2: Popular Tools */}
                  <div>
                    <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-2 px-2">
                      Popular Conversions
                    </h4>
                    {imageTools.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-2 py-1.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-md transition-colors cursor-pointer"
                        onClick={() => setImagesOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
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
                {videoConverters.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                    onClick={() => setVideosOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-outline-variant my-1 mx-3" />
                {videoTools.map((link) => (
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
              Image Converters (By Format)
            </div>
            {imageConverters.map((link) => (
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
              Popular Image Conversions
            </div>
            {imageTools.map((link) => (
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
              Video Converters
            </div>
            {videoConverters.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {videoTools.map((link) => (
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

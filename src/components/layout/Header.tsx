"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LogoFull } from "@/components/ui/Logo";

const toolLinks = [
  { label: "JPG to PNG", href: "/jpg-to-png" },
  { label: "PNG to WebP", href: "/png-to-webp" },
  { label: "HEIC to JPG", href: "/heic-to-jpg" },
  { label: "JPG to WebP", href: "/jpg-to-webp" },
  { label: "WebP to PNG", href: "/webp-to-png" },
  { label: "PNG to JPG", href: "/png-to-jpg" },
  { label: "Batch Converter", href: "/batch-image-converter" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
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
          {/* All Tools Dropdown - click only */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
              onClick={() => setToolsOpen(!toolsOpen)}
            >
              All Tools
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  toolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {toolsOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                {toolLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                    onClick={() => setToolsOpen(false)}
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
              All Tools
            </div>
            {toolLinks.map((link) => (
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

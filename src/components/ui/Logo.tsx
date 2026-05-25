export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/icon.svg"
      alt="PixConvert"
      className={className}
      width="32"
      height="32"
    />
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon className="h-8 w-8 flex-shrink-0" />
      <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-primary tracking-tight">
        PixConvert
      </span>
    </a>
  );
}

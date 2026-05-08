import { Link } from "@tanstack/react-router";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "मुख्यपृष्ठ", en: "Home" },
    { to: "/products", label: "उत्पादने", en: "Products" },
    { to: "/about", label: "आमच्याबद्दल", en: "About" },
    { to: "/contact", label: "संपर्क", en: "Contact" },
    { to: "/inquiry", label: "चौकशी", en: "Inquiry" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Sprout className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary">Gurumauli Agro</div>
            <div className="text-[11px] text-muted-foreground">गुरुमाऊली अ‍ॅग्रो एजन्सी</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:9637065038"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-glow md:inline-flex"
        >
          📞 Call Now
        </a>
        <button
          aria-label="Menu"
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.label} <span className="text-xs text-muted-foreground">/ {n.en}</span>
              </Link>
            ))}
            <a
              href="tel:9637065038"
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              📞 Call Now — 9637065038
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-content flex items-center justify-between px-6 md:px-8 h-20">
        <a
          href="#"
          className={`font-serif text-lg font-semibold transition-colors duration-300 ${
            scrolled ? "text-primary" : "text-secondary"
          }`}
          style={{ textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)" }}
        >
          Hopeful Memories
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                scrolled
                  ? "text-neutral-600 hover:text-primary"
                  : "text-secondary/80 hover:text-secondary"
              }`}
              style={scrolled ? undefined : { textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-accent text-secondary px-5 py-2 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-colors duration-300"
          >
            Donate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-secondary"
            } ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-secondary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-secondary"
            } ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-secondary border-t border-warm-200 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 max-h-96"
            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-neutral-600 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="block bg-accent text-secondary text-center px-5 py-3 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}

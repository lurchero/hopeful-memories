"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = scrolled;

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-secondary/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-content flex items-center justify-between px-6 md:px-8 h-20">
        <Link
          href="/"
          className={`font-serif text-lg font-semibold transition-colors duration-300 ${
            showSolid ? "text-primary" : "text-secondary text-shadow-nav"
          }`}
        >
          Hopeful Memories
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  showSolid
                    ? active
                      ? "text-accent bg-sage-50 font-medium"
                      : "text-primary hover:text-accent hover:bg-warm-50"
                    : active
                      ? "text-secondary font-semibold text-shadow-nav"
                      : "text-secondary hover:text-secondary/80 text-shadow-nav"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="ml-4 bg-accent text-secondary px-5 py-2 text-sm font-medium tracking-wide uppercase rounded-full hover:bg-rose-400 transition-colors duration-300"
          >
            Donate
          </Link>
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
              showSolid ? "bg-primary" : "bg-secondary"
            } ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              showSolid ? "bg-primary" : "bg-secondary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              showSolid ? "bg-primary" : "bg-secondary"
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
        <div className="px-6 py-6 space-y-1">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "text-accent bg-sage-50 font-medium"
                    : "text-neutral-600 hover:text-primary hover:bg-warm-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="block bg-accent text-secondary text-center px-5 py-3 text-sm font-medium tracking-wide uppercase rounded-full hover:bg-rose-400 transition-colors mt-3"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}

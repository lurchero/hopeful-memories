import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Donate", href: "/donate" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 px-6 md:px-8">
      {/* Colored top border */}
      <div className="h-0.5 bg-gradient-to-r from-rose-400/40 via-gold-400/40 to-sage-400/40" />

      <div className="mx-auto max-w-content py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-lg font-semibold text-secondary">
              Hopeful Memories
            </Link>
            <p className="mt-2 text-sm text-neutral-500 max-w-[300px]">
              Capturing memories. Honoring lives. Sustaining the creative
              workforce through dignified storytelling.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-sage-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social / Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:info@hopefulmemories.org"
                className="text-neutral-400 hover:text-rose-400 transition-colors duration-200"
              >
                info@hopefulmemories.org
              </a>
              {/* TODO: confirm Instagram + Facebook handles with the founder */}
              <a
                href="https://www.instagram.com/hopefulmemories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-gold-400 transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/hopefulmemories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-sky-400 transition-colors duration-200"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Hopeful Memories, Inc. All rights
            reserved.
          </p>
          <p>501(c)(3) Nonprofit Organization</p>
        </div>
      </div>
    </footer>
  );
}

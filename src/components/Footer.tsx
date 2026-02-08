const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 px-6 md:px-8 py-16">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-semibold text-secondary">
              Hopeful Memories
            </p>
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
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-secondary transition-colors duration-200"
                >
                  {link.label}
                </a>
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
                className="text-neutral-400 hover:text-secondary transition-colors duration-200"
              >
                info@hopefulmemories.org
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-secondary transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-secondary transition-colors duration-200"
              >
                LinkedIn
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

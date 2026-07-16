const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-4 sm:flex-row sm:justify-between sm:gap-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-zinc-900">
          Francisco Santos
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-zinc-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

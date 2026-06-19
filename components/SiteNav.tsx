import Link from 'next/link';

/* Map these to your real routes. Labels reflect the site's sections. */
const LINKS = [
  { label: 'Works', href: '/works' },
  { label: 'Public Art Map', href: '/map' },
  { label: 'Press', href: '/press' },
  { label: 'Exhibition', href: '/exhibition' },
  { label: 'About', href: '/about' },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-white/10 bg-[#15110d]">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="text-lg tracking-wide text-[#f5f1ea] sm:text-xl"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Everett DuPen
        </Link>

        {/* Full nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[12px] uppercase tracking-[0.18em] text-[#c9bda9] transition-colors hover:text-[#f5f1ea]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Condensed nav on small screens (swap for a drawer if you prefer) */}
        <ul className="flex items-center gap-4 md:hidden">
          {LINKS.slice(0, 3).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[11px] uppercase tracking-[0.14em] text-[#c9bda9]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

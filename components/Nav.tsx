"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ARTIST = [
  { href: "/artist/biography", label: "Biography", sub: "His life and times" },
  { href: "/artist/lasting-impact", label: "Lasting Impact", sub: "Legacy and influence" },
  { href: "/artist/studio", label: "The Studio", sub: "The artist at work" },
  { href: "/artist/documentary", label: "Documentary", sub: "The film by BJ Bullert" },
  { href: "/artist/resume", label: "Résumé", sub: "Career, honors, collections" },
  { href: "/artist/book", label: "Book", sub: "Eternal Forms" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const is = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="word" href="/" onClick={() => setOpen(false)}>
          Everett <b>DuPen</b>
          <small>American Sculptor</small>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul className={`nav-links${open ? " open" : ""}`} id="primary-nav">
          <li>
            <Link className="nav-link" href="/works" data-active={is("/works")} onClick={() => setOpen(false)}>
              Works
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/public-works" data-active={is("/public-works")} onClick={() => setOpen(false)}>
              Public Works
            </Link>
          </li>
          <li>
            <span className="nav-link" data-active={is("/artist")} tabIndex={0} role="button" aria-haspopup="true">
              Artist <span className="nav-caret" aria-hidden="true">▾</span>
            </span>
            <div className="dropdown">
              {ARTIST.map((a) => (
                <Link key={a.href} href={a.href} data-active={is(a.href)} onClick={() => setOpen(false)}>
                  {a.label}
                  <span className="sub">{a.sub}</span>
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link className="nav-link" href="/press" data-active={is("/press")} onClick={() => setOpen(false)}>
              Press
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/museum" data-active={is("/museum")} onClick={() => setOpen(false)}>
              Museum
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/contact" data-active={is("/contact")} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

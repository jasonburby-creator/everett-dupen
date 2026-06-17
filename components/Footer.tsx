import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link className="word" href="/">
          Everett <b>DuPen</b>
          <small>American Sculptor · 1912–2005</small>
        </Link>
        <nav className="foot-nav" aria-label="Footer">
          <Link href="/works">Works</Link>
          <Link href="/public-works">Public Works</Link>
          <Link href="/artist/biography">Biography</Link>
          <Link href="/artist/book">Book</Link>
          <Link href="/press">Press</Link>
          <Link href="/museum">Museum</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <small>© {new Date().getFullYear()} DuPen Family. All works and likenesses reproduced with permission.</small>
      </div>
    </footer>
  );
}

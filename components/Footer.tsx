import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link className="word" href="/">
          Everett <b>DuPen</b>
          <small>American Sculptor · 1912–2005</small>
        </Link>
        <small>© {new Date().getFullYear()} DuPen Family Foundation. All works and likenesses reproduced with permission.</small>
      </div>
    </footer>
  );
}

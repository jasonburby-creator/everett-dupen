import type { Metadata } from "next";
import { PRESS, REFERENCES } from "@/lib/press";

export const metadata: Metadata = {
  title: "Press",
  description: "Articles, reviews, and exhibition coverage of the sculptor Everett DuPen.",
};

export default function PressPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Press</h1>
          <span className="count">Articles & References</span>
        </div>
        <p className="lead-intro" style={{ marginBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
          Selected writing on Everett DuPen, coverage of his exhibitions, and public collections
          holding his work.
        </p>

        <ul className="press-list">
          {PRESS.map((p) => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener">
                <span className="press-date">{p.date}</span>
                <span className="press-main">
                  <span className="outlet">{p.outlet}</span>
                  <span className="headline">{p.title}</span>
                </span>
                <span className="press-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "clamp(3rem,6vw,5rem)" }}>
          <div className="sec-head">
            <h2>Public Collections & References</h2>
          </div>
          <ul className="press-list">
            {REFERENCES.map((r) => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener">
                  <span className="press-date">{r.date || "—"}</span>
                  <span className="press-main">
                    <span className="outlet">{r.outlet}</span>
                    <span className="headline">{r.title}</span>
                  </span>
                  <span className="press-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

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

        {/* Featured publication */}
        <div className="profiles-feature">
          <a href="/profiles-dupen-2012.pdf" target="_blank" rel="noopener" className="profiles-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profiles-cover.jpg" alt="Cover of Profiles magazine, Opus 003, featuring Everett DuPen" />
          </a>
          <div className="profiles-info">
            <span className="profiles-tag">Featured Publication</span>
            <h2>Profiles: Everett DuPen and His Legacy</h2>
            <p className="profiles-meta">
              National Sculpture Society · Opus 003 · 2012
            </p>
            <p>
              Published for the centenary exhibition at the Museum of Northwest Art in La Conner,
              this tribute features personal essays by his daughters Destia DuPen Hermes and Novelle
              DuPen-Meyerhoff, an art-historical essay by University of Washington professor
              Patricia Failing, and a full biography with rare studio photographs.
            </p>
            <a href="/profiles-dupen-2012.pdf" target="_blank" rel="noopener" className="profiles-dl">
              Read the full publication (PDF) <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

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

import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PRESS } from "@/lib/press";

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
          <span className="count">Articles & Reviews</span>
        </div>
        <p className="lead-intro" style={{ marginBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
          Selected writing on Everett DuPen and the exhibitions of his work.
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
      </div>
    </section>
  );
}

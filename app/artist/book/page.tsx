import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book",
  description: "Eternal Forms: The Sculpture of Everett DuPen — the monograph by curator David F. Martin, published with the Cascadia Art Museum exhibition.",
};

export default function BookPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>The Book</h1>
          <span className="count">Monograph</span>
        </div>

        <div className="book-grid">
          <Reveal>
            <a
              href="https://www.amazon.com/Eternal-Forms-Sculpture-Everett-DuPen/dp/0998911283"
              target="_blank"
              rel="noopener"
              style={{ display: "block" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/book-cover.jpg"
                alt="Eternal Forms: The Sculpture of Everett DuPen — book cover"
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  border: "1px solid var(--hair)",
                  boxShadow: "0 40px 70px -34px rgba(41,36,25,.6)",
                }}
              />
            </a>
          </Reveal>

          <Reveal>
            <p className="eyebrow">Published 2026</p>
            <h2 className="book-title">Eternal Forms: The Sculpture of Everett DuPen</h2>
            <p className="film-desc">
              The monograph accompanying the Cascadia Art Museum&apos;s career-spanning exhibition, written
              by curator and art historian David F. Martin. It traces DuPen&apos;s life and nearly eight
              decades of figurative work in bronze, wood, stone, and terra cotta, drawing on the
              collection assembled with the DuPen Family Foundation.
            </p>
            <div className="book-meta">
              <div>
                <b>Author</b>
                David F. Martin
              </div>
              <div>
                <b>Publisher</b>
                Cascadia Art Museum
              </div>
              <div>
                <b>Format</b>
                Hardback · $29.95
              </div>
            </div>
            <a
              className="btn"
              href="https://www.amazon.com/Eternal-Forms-Sculpture-Everett-DuPen/dp/0998911283"
              target="_blank"
              rel="noopener"
            >
              Buy on Amazon <span className="arr" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

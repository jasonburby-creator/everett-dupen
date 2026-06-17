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
          <Reveal className="book-cover">
            <div className="bc-top">Cascadia Art Museum</div>
            <div className="bc-title">Eternal Forms</div>
            <div>
              <div style={{ fontFamily: "var(--f-body)", fontSize: ".8rem", color: "#C9C0AE", marginBottom: ".4rem" }}>
                The Sculpture of Everett DuPen
              </div>
              <div className="bc-author">David F. Martin</div>
            </div>
          </Reveal>

          <Reveal>
            <p className="eyebrow">Published 2026</p>
            <h2 className="book-title">Eternal Forms: The Sculpture of Everett DuPen</h2>
            <p className="film-desc">
              The monograph accompanying the Cascadia Art Museum's career-spanning exhibition, written
              by curator and art historian David F. Martin. It traces DuPen's life and nearly eight
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
                <b>Subject</b>
                Everett DuPen, 1912–2005
              </div>
            </div>
            <a
              className="link"
              href="https://www.cascadiaartmuseum.org/eternal-forms-the-sculpture-of-everett-dupen/"
              target="_blank"
              rel="noopener"
            >
              Available through the Cascadia Art Museum →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

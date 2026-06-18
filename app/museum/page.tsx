import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Museum",
  description: "Eternal Forms: The Sculpture of Everett DuPen — on view at the Cascadia Art Museum in Edmonds, Washington, through September 13, 2026.",
};

export default function MuseumPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Museum</h1>
          <span className="count">On View</span>
        </div>

        <div className="book-grid">
          <Reveal as="figure" className="life-portrait" style={{ margin: 0 }}>
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/museum-exhibition.jpg" alt="Eternal Forms: The Sculpture of Everett DuPen — exhibition entrance at Cascadia Art Museum" style={{ aspectRatio: "auto" }} />
            </div>
            <figcaption>The exhibition at Cascadia Art Museum, Edmonds</figcaption>
          </Reveal>

          <Reveal>
            <span className="onview-tag">Currently showing</span>
            <h2 className="book-title">Eternal Forms: The Sculpture of Everett DuPen</h2>
            <div className="venue">Cascadia Art Museum</div>
            <div className="loc" style={{ color: "var(--ink-soft)", margin: ".2rem 0 0" }}>
              Edmonds, Washington
            </div>
            <div className="exhib-dates">March 20 – September 13, 2026</div>
            <p className="film-desc">
              A career-spanning survey of DuPen's sculpture, curated by David F. Martin, tracing nearly
              eight decades of work in bronze, wood, stone, and terra cotta. The museum's collection
              includes a plaster <em className="em">Dancers and Singers</em>, a gift of the DuPen Family
              Foundation. An accompanying monograph, <em className="em">Eternal Forms</em>, is published
              alongside the exhibition.
            </p>
            <a
              className="link"
              href="https://www.cascadiaartmuseum.org/eternal-forms-the-sculpture-of-everett-dupen/"
              target="_blank"
              rel="noopener"
            >
              cascadiaartmuseum.org →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

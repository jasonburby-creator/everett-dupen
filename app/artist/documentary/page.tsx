import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Documentary",
  description: "Everett DuPen, Sculptor — a portrait film by BJ Bullert, with interviews from family, fellow artists, and historians.",
};

export default function DocumentaryPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Documentary</h1>
          <span className="count">The Film</span>
        </div>

        <div className="film-grid">
          <Reveal className="film">
            <iframe
              src="https://player.vimeo.com/video/360627127?h=211a3bf9fc"
              title="Everett DuPen Sculptor — documentary film"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              loading="lazy"
            />
          </Reveal>

          <Reveal className="film-credits">
            <p className="eyebrow">A film by BJ Bullert</p>
            <p className="film-title">Everett DuPen, Sculptor</p>
            <p className="film-desc">
              A portrait of the artist and University of Washington professor who inspired generations
              of artists across eight decades.
            </p>
            <p className="film-feat">
              Featuring his family alongside artists Georgia Gerber, Phillip Levine, and Norm Taylor;
              historian and curator David Martin; and sociologists Kurt and Gladys Lang.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

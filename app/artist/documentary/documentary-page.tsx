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

        <Reveal className="director-bio">
          <h2>About the Director</h2>
          <p>
            <strong>B.&nbsp;J. Bullert, Ph.D.</strong> is a Seattle-based filmmaker and academic
            whose documentaries have aired on KCTS and PBS affiliates nationwide since the 1990s.
            Her films include <em>Space Needle: A Hidden History</em>,{" "}
            <em>Earl Robinson: Ballad of an American</em>, <em>Chief Seattle</em>,{" "}
            and <em>Loki Pete</em>.
          </p>
          <p>
            Educated at The Evergreen State College, Boston University, Oxford University, and the
            University of Washington, Bullert served on the faculty at American University,
            Muhlenberg College, and Antioch University Seattle, where she is now Professor Emerita.
            She is also the author of{" "}
            <em>Public Television: Politics and the Battle over Documentary Film</em>{" "}
            (Rutgers University Press, 1997).
          </p>
        </Reveal>
      </div>
    </section>
  );
}

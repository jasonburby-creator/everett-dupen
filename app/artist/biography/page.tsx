import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { imgSrc } from "@/lib/img";

export const metadata: Metadata = {
  title: "Biography",
  description: "The life of Everett DuPen (1912–2005) — sculptor, teacher, and Fellow of the National Sculpture Society.",
};

const TIMELINE = [
  { year: "1912", h: "Born in Chico, California", p: "The son of George and Etta DuPen." },
  { year: "1925", h: "\u201cThe Genius Among Us\u201d", p: "At thirteen, his sculptural talent was praised by Hollywood\u2019s Daily Citizen." },
  { year: "1932", h: "Formal study begins at USC", p: "A Southern California foil champion, he fenced for both USC and, later, Yale." },
  { year: "1937", h: "Graduates from Yale", p: "Followed by architecture at Harvard and a year studying the masters at the American Academy in Rome." },
  { year: "1939", h: "Marries Charlotte Nicks", p: "A ballet dancer from the Metropolitan Opera\u2019s Corps de Ballet. He took a teaching post at the Carnegie Institute of Technology in St. Louis." },
  { year: "38 years", h: "Professor, University of Washington", p: "He helped build the UW\u2019s Sculpture Division into a nationally and internationally recognized program, and was equally known for his life-drawing classes." },
  { year: "Beyond", h: "Florence, India, Nepal, Egypt", p: "Leaves of study took him to learn bronze casting in Florence and to absorb art across Asia and North Africa. In retirement he mentored the NW Stone Carving Association." },
  { year: "2005", h: "An elder of the craft", p: "He died at 92 \u2014 husband of 65 years to Charlotte, father of six, grandfather of eleven, great-grandfather of six." },
];

export default function BiographyPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Biography</h1>
          <span className="count">1912 — 2005</span>
        </div>

        <div className="life-grid">
          <Reveal as="figure" className="life-portrait">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgSrc("images/dupen-closeup.jpg", 820)} alt="Portrait of Everett DuPen" />
            </div>
            <figcaption>Everett DuPen</figcaption>
          </Reveal>

          <div>
            <div className="prose" style={{ marginBottom: "clamp(2rem,5vw,3.2rem)" }}>
              <p>
                In 1925, the Hollywood newspaper The Daily Citizen praised the thirteen-year-old
                Everett DuPen, calling him &ldquo;the genius among us.&rdquo; At his death at ninety-two he was an
                elder and Fellow of the National Sculpture Society and the National Academy of Design.
                In the years between, he had a remarkable career as a sculptor and teacher spanning
                eight decades.
              </p>
              <p>
                DuPen began his formal art studies at USC in 1932, later transferring to Yale and
                graduating in 1937. He studied architecture at Harvard and spent a year with the
                masters at the American Academy in Rome; later leaves took him to learn bronze casting
                in Florence and to study art across India, Nepal, and Egypt.
              </p>
              <p>
                He married the ballet dancer Charlotte Nicks in 1939 and, after teaching at the
                Carnegie Institute of Technology, settled into a thirty-eight-year career at the
                University of Washington &mdash; where he played a major role in building the Sculpture
                Division into a nationally and internationally known program, and was equally known
                for his life-drawing classes. Most celebrated for his figurative pieces in terra
                cotta, stone, wood, and bronze, he was a friend and mentor to generations of artists.
              </p>
              <p>
                His sculpture can be found in many public parks and buildings, as well as in museums
                and private collections &mdash; among them the DuPen Fountain at the Seattle Center and the
                fountain at the Joel Pritchard Building at the Washington State Capitol.
              </p>
            </div>

            <div className="timeline">
              {TIMELINE.map((t) => (
                <Reveal key={t.year + t.h} className="tl-item">
                  <div className="tl-year">{t.year}</div>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quotes */}
        <Reveal className="bio-quotes">
          <blockquote className="bio-quote">
            <p>&ldquo;The only thing that matters is love.&rdquo;</p>
            <cite>— Everett DuPen, his final words to his children, May 2005</cite>
          </blockquote>
          <blockquote className="bio-quote">
            <p>&ldquo;Let the spirit shine through your work.&rdquo;</p>
            <cite>— his message to his students</cite>
          </blockquote>
          <p className="bio-quotes-source">
            From{" "}
            <a href="/profiles-dupen-2012.pdf" target="_blank" rel="noopener">
              <em>Profiles: Everett DuPen and His Legacy</em>
            </a>
            , National Sculpture Society, 2012.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

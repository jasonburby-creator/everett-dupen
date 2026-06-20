import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Photographs of Everett DuPen at work — from Yale in the 1930s through decades of carving, casting, and teaching at the University of Washington.",
};

const SECTIONS = [
  {
    title: "Early Career",
    period: "1930s",
    photos: [
      {
        src: "/images/studio/usc-studio.jpg",
        alt: "Young Everett DuPen at USC, working on a standing figure in clay, circa 1933",
        caption: "At the University of Southern California, working on a standing figure in clay.",
        date: "c. 1933",
        credit: "Courtesy Cascadia Art Museum",
      },
      {
        src: "/images/studio/yale-armature.jpg",
        alt: "DuPen building the armature for The Eternal Struggle at Yale, circa 1936",
        caption:
          "Building the armature for the enlargement of The Eternal Struggle at Yale. The small plaster maquette is visible on the stand beside him.",
        date: "c. 1936",
      },
    ],
  },
  {
    title: "Mid-Career",
    period: "1950s\u201360s",
    photos: [
      {
        src: "/images/studio/wood-carving-chisels.jpg",
        alt: "DuPen carving a walnut relief with hammer and chisel",
        caption:
          "Carving a walnut relief with hammer and chisel, a full row of carving tools laid out on the bench.",
        date: "c. 1950s",
      },
      {
        src: "/images/studio/saint-carving.jpg",
        alt: "DuPen standing next to a tall carved wooden saint figure",
        caption:
          "With a carved wooden saint figure for one of his church commissions. The piece towers over him.",
        date: "c. 1950s\u201360s",
      },
      {
        src: "/images/studio/plaster-relief.jpg",
        alt: "DuPen working on a large plaster relief of a seated figure",
        caption: "Working on a large plaster relief panel of a seated figure.",
        date: "c. 1950s",
      },
      {
        src: "/images/studio/fountain-model.jpg",
        alt: "DuPen on a ladder working on the plaster model for the Fountain of Creation",
        caption:
          "On a ladder in the studio, working on the full-size plaster model for the Fountain of Creation before it was cast in bronze for the 1962 World\u2019s Fair.",
        date: "c. 1960\u201361",
      },
    ],
  },
  {
    title: "Later Years",
    period: "1970s\u201390s",
    photos: [
      {
        src: "/images/studio/desk-lamp.jpg",
        alt: "DuPen sculpting a small reclining form under a single desk lamp",
        caption:
          "Sculpting a small reclining form under a single lamp \u2014 the concentration and intimacy of solitary studio work.",
        date: "c. 1960s\u201370s",
      },
      {
        src: "/images/studio/examining-figure.jpg",
        alt: "Close-up of DuPen examining a small figurative bronze",
        caption: "Studying a small figurative bronze, completely absorbed in the details.",
        date: "c. 1970s\u201380s",
      },
      {
        src: "/images/studio/plaster-figure.jpg",
        alt: "DuPen with hands on a plaster figure in progress",
        caption: "Hands on a plaster figure in progress.",
        date: "c. 1970s\u201380s",
      },
      {
        src: "/images/studio/workshop.jpg",
        alt: "DuPen in his studio surrounded by bronzes and tools, holding a figure at arm's length",
        caption:
          "In the studio surrounded by small bronzes, tools, and the accumulated materials of a lifetime \u2014 holding a figure at arm\u2019s length.",
        date: "c. 1980s\u201390s",
      },
    ],
  },
];

export default function StudioPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>The Studio</h1>
          <span className="count">The Artist at Work</span>
        </div>

        <div className="prose" style={{ maxWidth: "38rem", marginBottom: "clamp(2rem,5vw,3.5rem)" }}>
          <p>
            His daughter remembered the studio as his kingdom and sanctuary:
            &ldquo;The smells are still vivid to me &mdash; pipe tobacco, wet clay, wood, stone dust.
            Serene classical music played in the background. So much to look at: hundreds of sketches,
            art postcards, beach stones, shells, maquettes.&rdquo;
          </p>
          <p>
            These photographs span six decades of work &mdash; from building armatures at Yale in
            the 1930s to the cluttered West Seattle studio where he sculpted into his nineties.
          </p>
        </div>

        {SECTIONS.map((section) => (
          <div key={section.title} className="studio-section">
            <Reveal className="studio-section-head">
              <h2>{section.title}</h2>
              <span className="studio-period">{section.period}</span>
            </Reveal>
            <div className="studio-grid">
              {section.photos.map((photo) => (
                <Reveal key={photo.src} as="figure" className="studio-fig">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption>
                    <span className="studio-date">{photo.date}</span>
                    <span className="studio-cap">{photo.caption}</span>
                    {photo.credit && (
                      <span className="studio-credit">{photo.credit}</span>
                    )}
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

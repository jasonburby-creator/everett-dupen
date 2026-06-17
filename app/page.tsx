import Link from "next/link";
import Reveal from "@/components/Reveal";
import Ribbon from "@/components/Ribbon";
import { imgSrc } from "@/lib/img";

const HERO = [
  { file: "works/Icarus.jpg", w: 760, cls: "p1", alt: "Icarus, bronze" },
  { file: "works/Rising-to-the-Sun.jpg", w: 620, cls: "p2", alt: "Rising to the Sun, bronze" },
  { file: "works/Singers-and-Dancers.jpg", w: 620, cls: "p3", alt: "Singers and Dancers, bronze" },
];

const FEATURED = [
  { title: "Voyager", file: "works/Voyager.jpg" },
  { title: "Dance Fantasy", file: "works/Dance-Fantasy.jpg" },
  { title: "Madonna of the Two Cities", file: "works/Madonna-of-the-Two-Cities.jpg" },
  { title: "Lotus", file: "works/Lotus.jpg" },
  { title: "Vaulting Kouros", file: "works/Vaulting-Kouros.jpg" },
  { title: "Sea Form", file: "works/Sea-Form.jpg" },
  { title: "Diver", file: "works/Diver.jpg" },
  { title: "Celestia", file: "works/Celestia.jpg" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              American Sculptor <span className="dot">·</span> 1912 – 2005
            </p>
            <h1>
              <span className="given">Everett</span>DuPen
            </h1>
            <p className="lede">
              Eight decades shaping the human figure — in bronze, wood, stone, and line.
            </p>
            <div className="hero-cta">
              <Link className="btn" href="/works">
                View the catalogue <span className="arr" aria-hidden="true">→</span>
              </Link>
              <span className="hero-stat">
                <b>87</b> works across four mediums
              </span>
            </div>
          </Reveal>

          <Reveal as="figure" className="cluster">
            {HERO.map((h) => (
              <span key={h.cls} className={`pane ${h.cls}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc(h.file, h.w)} alt={h.alt} />
              </span>
            ))}
            <figcaption className="cap">Bronzes, cast across five decades</figcaption>
          </Reveal>
        </div>
      </section>

      <Ribbon />

      <section className="statement">
        <div className="wrap lead-row">
          <Reveal as="p" className="big">
            “The Genius Among Us,” a Hollywood paper wrote of him at thirteen.
          </Reveal>
          <Reveal className="detail">
            By the end of his life Everett DuPen was an elder and Fellow of the National Sculpture
            Society and the National Academy of Design. Between those points lay a remarkable career
            as a sculptor and teacher — figurative work in <em>terra cotta, stone, wood, and bronze</em>{" "}
            that found homes in public parks, civic buildings, museums, and private collections across
            the country.
          </Reveal>
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head">
            <Reveal as="h2">Selected Works</Reveal>
            <span className="count">A few of eighty-seven</span>
          </div>
          <div className="feat-grid">
            {FEATURED.map((f) => (
              <Link key={f.file} href="/works" className="cat-item" aria-label={f.title}>
                <span className="cat-plate">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc(f.file, 560)} alt={`${f.title}, by Everett DuPen`} loading="lazy" />
                  <span className="cat-cap">
                    <span className="t">{f.title}</span>
                    <span className="m">Bronze</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="feat-more">
            <Link className="btn btn-ghost" href="/works">
              See all 87 works <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="museum-banner">
        <div className="wrap">
          <div>
            <span className="mb-tag">On view now</span>
            <h2>Eternal Forms: The Sculpture of Everett DuPen</h2>
            <p>Cascadia Art Museum · Edmonds, Washington · through September 13, 2026</p>
          </div>
          <Link className="btn" href="/museum">
            Exhibition details <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <Reveal as="h2">Explore</Reveal>
          </div>
          <div className="section-cards">
            <Link className="sec-card" href="/artist/biography">
              <div className="sc-k">The Artist</div>
              <div className="sc-t">A life in sculpture</div>
              <div className="sc-d">Biography, the documentary film, résumé, and the monograph.</div>
            </Link>
            <Link className="sec-card" href="/works">
              <div className="sc-k">The Work</div>
              <div className="sc-t">Complete catalogue</div>
              <div className="sc-d">All 87 pieces in bronze, wood, stone, and drawings.</div>
            </Link>
            <Link className="sec-card" href="/press">
              <div className="sc-k">In Print</div>
              <div className="sc-t">Press & exhibitions</div>
              <div className="sc-d">Articles, reviews, and his current museum showing.</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

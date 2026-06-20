import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Fountain of Creation",
  description:
    "The story of Everett DuPen's Fountain of Creation at Seattle Center — from the 1962 World's Fair to today. Bronze, stone, and water in the shadow of the Space Needle.",
};

const IMG = "/images/fountain";

export default function FountainPage() {
  return (
    <>
      {/* Hero */}
      <div className="ftn-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/new-plaza-both-needle.jpg`} alt="The Fountain of Creation plaza at Seattle Center, with both bronze sculptures and the Space Needle beyond" />
        <div className="ftn-hero-overlay">
          <h1>Fountain of Creation</h1>
          <p>Seattle Center &middot; 1962 &ndash; present &middot; A Seattle Landmark</p>
        </div>
      </div>

      <section className="sec">
        <div className="wrap ftn-wrap">

          {/* Intro */}
          <Reveal className="ftn-intro">
            <p className="ftn-lede">
              Three organic bronze forms &mdash; <em>Evolution of Man</em>, <em>Flight of Gulls</em>,
              and <em>Seaweed</em> &mdash; rise from stone in the shadow of the Space Needle. Commissioned
              for the 1962 Seattle World&rsquo;s Fair and designed in collaboration with architect Paul Thiry,
              the Fountain of Creation is DuPen&rsquo;s most recognized public work and a designated Seattle Landmark.
            </p>
            <p>
              Over six decades, the fountain has been reimagined three times &mdash; from a modernist water basin
              to a beloved wading pool, and most recently to a splash-pad plaza with in-ground jets. The bronzes
              have endured every transformation, their patina deepening with each decade.
            </p>
          </Reveal>

          {/* ── THE COMMISSION ── */}
          <Reveal className="ftn-section">
            <h2>The Commission</h2>
            <div className="ftn-text-img">
              <div className="ftn-prose">
                <p>
                  In 1957, Seattle architect Paul Thiry was appointed principal architect for the Century 21
                  Exposition &mdash; the 1962 World&rsquo;s Fair that would give Seattle the Space Needle and
                  transform a neighborhood into Seattle Center. Thiry envisioned a sculptural water garden for
                  the north courtyard between the fair pavilions.
                </p>
                <p>
                  Thiry had worked with DuPen before &mdash; commissioning the Limestone Triptych for UW&rsquo;s
                  Electrical Engineering building in 1947, and a fountain for the Washington State Library in
                  Olympia in 1955. Their working relationship was productive if occasionally tense: Thiry imagined
                  Balinese dancers and electrical currents; DuPen delivered three powerful organic forms that stood
                  on their own terms. As DuPen put it, a sculptor should not &ldquo;water down his designs to conform&rdquo;
                  &mdash; his work should act as &ldquo;opposing contrast and be strong in its own right.&rdquo;
                </p>
              </div>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/making-maquette.jpg`} alt="Plaster maquette of the Evolution of Man sculpture" loading="lazy" />
                <figcaption>The plaster maquette for Evolution of Man</figcaption>
              </Reveal>
            </div>
          </Reveal>

          {/* ── BUILDING IT ── */}
          <Reveal className="ftn-section">
            <h2>Building It</h2>
            <div className="ftn-text-img ftn-text-img--rev">
              <div className="ftn-prose">
                <p>
                  DuPen built the full-size plaster models in his studio at the University of Washington,
                  working on a ladder to reach the top of the towering Evolution of Man. The forms were then
                  cast in bronze and colored concrete and installed in a rectangular water basin with fountains
                  for the fair&rsquo;s opening in April 1962.
                </p>
              </div>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/making-plaster-model.jpg`} alt="DuPen on a ladder working on the plaster model for the Fountain of Creation, c. 1960" loading="lazy" />
                <figcaption>DuPen on a ladder with the full-size plaster model, c. 1960&ndash;61</figcaption>
              </Reveal>
            </div>
          </Reveal>

          {/* ── THE 1962 WORLD'S FAIR ── */}
          <Reveal className="ftn-section">
            <h2>The 1962 World&rsquo;s Fair</h2>
            <p className="ftn-prose" style={{ marginBottom: "1.5rem" }}>
              When the Century 21 Exposition opened on April 21, 1962, the fountain sat in a clean-lined
              rectangular basin with vertical water jets &mdash; a modernist composition of bronze, stone,
              and spray framed by Thiry&rsquo;s international pavilions. Nearly ten million visitors passed
              through the fair during its six-month run.
            </p>
            <div className="ftn-gallery ftn-gallery--2">
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/1962-fair-color.jpg`} alt="The fountain at the 1962 World's Fair, with fair pavilions and food stands in the background" loading="lazy" />
                <figcaption>The fountain during the 1962 World&rsquo;s Fair</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/1962-canada-pavilion.jpg`} alt="B&W photo of the fountain with the Canada Pavilion behind it" loading="lazy" />
                <figcaption>With the Canada Pavilion, 1962</figcaption>
              </Reveal>
            </div>
            <Reveal as="figure" className="ftn-fig" style={{ marginTop: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/1964-times-sketch.jpg`} alt="Seattle Times architectural sketch from 1964 showing the fountain plaza" loading="lazy" style={{ maxHeight: "500px", width: "auto", margin: "0 auto", display: "block" }} />
              <figcaption>Seattle Times sketch, March 9, 1964 &mdash; the fountain after the fairgrounds became Seattle Center</figcaption>
            </Reveal>
          </Reveal>

          {/* ── THE THREE BRONZES ── */}
          <Reveal className="ftn-section">
            <h2>The Three Bronzes</h2>
            <p className="ftn-prose" style={{ marginBottom: "1.5rem" }}>
              The fountain comprises three distinct bronze sculptures, each on its own stone base:
              <em> Evolution of Man</em>, the central and tallest piece, depicts stacked organic forms
              cradled by two sweeping arcs; <em>Flight of Gulls</em> captures birds in angular,
              interlocking motion; and <em>Seaweed</em> (sometimes called <em>Kelp</em>) rises in
              sinuous vertical forms. Together they evoke the Pacific Northwest&rsquo;s relationship
              with nature, sea, and sky.
            </p>
            <div className="ftn-gallery ftn-gallery--3">
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/new-evolution-front.jpg`} alt="Evolution of Man, the central bronze sculpture" loading="lazy" />
                <figcaption>Evolution of Man</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/new-gulls-needle.jpg`} alt="Flight of Gulls bronze with the Space Needle" loading="lazy" />
                <figcaption>Flight of Gulls</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/new-seaweed-closeup.jpg`} alt="Seaweed (Kelp) bronze sculpture close-up" loading="lazy" />
                <figcaption>Seaweed</figcaption>
              </Reveal>
            </div>
            <Reveal as="figure" className="ftn-fig" style={{ marginTop: "1.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/new-evolution-detail-top.jpg`} alt="Detail of the top of Evolution of Man — figures reaching upward between sweeping bronze arcs" loading="lazy" style={{ maxHeight: "600px", width: "auto", margin: "0 auto", display: "block" }} />
              <figcaption>Detail: the figures at the crown of Evolution of Man</figcaption>
            </Reveal>
          </Reveal>

          {/* ── A GATHERING PLACE ── */}
          <Reveal className="ftn-section">
            <h2>A Gathering Place</h2>
            <div className="ftn-text-img">
              <div className="ftn-prose">
                <p>
                  After the fair, Seattle Center became the city&rsquo;s civic campus. In the early 1990s,
                  the City collaborated with DuPen and his family to remodel the fountain, adding 45 boulders
                  and transforming the basin into a wading pool. For the next three decades it was one of
                  Seattle&rsquo;s most beloved summer spots &mdash; generations of children climbed the rocks
                  and splashed in the turquoise water while parents watched from the edges.
                </p>
              </div>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/1991-pool-jets.jpg`} alt="The fountain in its wading pool era, turquoise water with boulders and water jets, lush green trees" loading="lazy" />
                <figcaption>The wading pool era, with boulders and full water jets</figcaption>
              </Reveal>
            </div>
            <div className="ftn-gallery ftn-gallery--2" style={{ marginTop: "1.5rem" }}>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/1991-kids-playing.jpg`} alt="Children playing among the boulders and sculpture in the wading pool" loading="lazy" />
                <figcaption>Children playing among the boulders and bronze</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/1991-families-wading.jpg`} alt="Families relaxing and wading at the fountain on a summer day" loading="lazy" />
                <figcaption>A summer afternoon at the fountain</figcaption>
              </Reveal>
            </div>
          </Reveal>

          {/* ── THE REINVENTION ── */}
          <Reveal className="ftn-section">
            <h2>The Reinvention</h2>
            <div className="ftn-prose" style={{ marginBottom: "1.5rem" }}>
              <p>
                In 2019, the redevelopment of Climate Pledge Arena created an opportunity to reimagine the
                fountain for a new era. The Seattle Landmarks Preservation Board approved a renovation that
                replaced the wading pool with a flush-grade splash pad featuring in-ground water jets with
                colored LED lights. The three bronze sculptures were carefully lifted by crane, conserved,
                and repositioned on new stone bases across the redesigned plaza.
              </p>
              <p>
                The renovated Fountain of Creation was rededicated in 2025 with the DuPen family in attendance.
              </p>
            </div>
            <div className="ftn-gallery ftn-gallery--3">
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/reno-crane-lift.jpg`} alt="Crane lifting the Evolution of Man sculpture during renovation, fall 2022" loading="lazy" />
                <figcaption>Lifting Evolution of Man by crane, fall 2022</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/reno-new-base-needle.jpg`} alt="Evolution of Man on its new stone base with the Space Needle behind, construction in progress" loading="lazy" />
                <figcaption>Newly placed on its stone base, with the Space Needle</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/reno-gulls-night.jpg`} alt="Flight of Gulls lit up at night with Climate Pledge Arena glowing behind" loading="lazy" />
                <figcaption>Flight of Gulls at night, Climate Pledge Arena</figcaption>
              </Reveal>
            </div>
          </Reveal>

          {/* ── TODAY ── */}
          <Reveal className="ftn-section">
            <h2>Today</h2>
            <p className="ftn-prose" style={{ marginBottom: "1.5rem" }}>
              The fountain plaza is now an open, accessible public space between the Northwest Rooms and
              Climate Pledge Arena. Water jets erupt from flush-mounted nozzles with colored LEDs, and
              the three bronzes stand on individual stone bases spread across the plaza &mdash; inviting
              visitors to walk among them and see the sculptures up close for the first time in decades.
            </p>
            <div className="ftn-gallery ftn-gallery--2">
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/new-both-sculptures.jpg`} alt="Both sculptures visible on the new plaza with Climate Pledge Arena, water jets active" loading="lazy" />
                <figcaption>Flight of Gulls and Evolution of Man on the new plaza</figcaption>
              </Reveal>
              <Reveal as="figure" className="ftn-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/new-families-jets.jpg`} alt="Families walking through the water jets on the new plaza" loading="lazy" />
                <figcaption>Families in the water jets at the rededication</figcaption>
              </Reveal>
            </div>

            {/* Aerial video */}
            <Reveal as="figure" className="ftn-fig" style={{ marginTop: "1.5rem" }}>
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${IMG}/new-wide-plaza-needle.jpg`}
                style={{ width: "100%", borderRadius: "4px" }}
              >
                <source src={`${IMG}/jets-aerial.mp4`} type="video/mp4" />
              </video>
              <figcaption>Aerial view of the water jets in action</figcaption>
            </Reveal>
          </Reveal>

          {/* ── VISIT ── */}
          <Reveal className="ftn-visit">
            <h2>Visit</h2>
            <p>
              The Fountain of Creation is located on the north side of Seattle Center, between
              the Northwest Rooms and Climate Pledge Arena. The plaza is free and open to the
              public year-round. Water jets operate seasonally.
            </p>
            <p className="ftn-address">
              Seattle Center, north of Climate Pledge Arena<br />
              305 Harrison Street, Seattle, WA 98109
            </p>
            <div className="ftn-visit-links">
              <Link href="/public-works" className="btn btn-ghost">
                View on the Public Art Map <span className="arr" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>

          {/* ── FURTHER READING ── */}
          <Reveal className="ftn-further">
            <h3>Further Reading</h3>
            <ul>
              <li>
                <a href="/profiles-dupen-2012.pdf" target="_blank" rel="noopener">
                  Patricia Failing, &ldquo;Everett DuPen, Memorialist&rdquo; in <em>Profiles</em> (National Sculpture Society, 2012)
                </a>
              </li>
              <li>
                <a href="https://www.seattle.gov/documents/Departments/Neighborhoods/HistoricPreservation/Landmarks/LandmarksPreservationBoard/MeetingDocuments/DuPen_Signs_presentation.pdf" target="_blank" rel="noopener">
                  Seattle Landmarks Preservation Board: DuPen Fountain Renovation Design Package (2021)
                </a>
              </li>
              <li>
                <a href="https://pauldorpat.com/2012/10/31/fair-and-festival-no-16-fountain-of-creation/" target="_blank" rel="noopener">
                  Paul Dorpat, &ldquo;Fair and Festival No. 16: Fountain of Creation&rdquo;
                </a>
              </li>
              <li>
                <a href="https://publicartarchive.org/art/Fountain-Of-Creation/15a60bde" target="_blank" rel="noopener">
                  Public Art Archive: Fountain of Creation
                </a>
              </li>
            </ul>
          </Reveal>

        </div>
      </section>
    </>
  );
}

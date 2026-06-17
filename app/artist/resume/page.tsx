import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Selected résumé of the sculptor Everett DuPen — education, teaching, public works, exhibitions, collections, and honors.",
};

const CV: { label: string; items: { lead?: string; text: string }[] }[] = [
  {
    label: "Education",
    items: [
      { lead: "University of Southern California", text: "Sculpture and architecture, from 1932" },
      { lead: "Yale School of Fine Arts", text: "BFA in sculpture, 1937" },
      { lead: "Harvard School of Architecture", text: "Summer study" },
      { lead: "American Academy in Rome", text: "A year with the Old Masters" },
      { lead: "Florence, Italy", text: "Bronze casting" },
    ],
  },
  {
    label: "Teaching",
    items: [
      { lead: "University of Washington", text: "Professor of Sculpture — a 38-year career building the Sculpture Division" },
      { lead: "Carnegie Institute of Technology", text: "Instructor, St. Louis" },
      { lead: "NW Stone Carving Association", text: "Mentor, in retirement" },
    ],
  },
  {
    label: "Public Works",
    items: [
      { lead: "DuPen Fountain", text: "Seattle Center, Seattle, Washington" },
      { lead: "Fountain", text: "Joel Pritchard Building, Washington State Capitol, Olympia" },
    ],
  },
  {
    label: "Selected Exhibitions",
    items: [
      { lead: "Cascadia Art Museum", text: "Eternal Forms: The Sculpture of Everett DuPen, 2026" },
      { lead: "Seattle Art Museum", text: "" },
      { lead: "Henry Art Gallery", text: "University of Washington" },
      { lead: "Frye Art Museum", text: "Seattle" },
      { lead: "San Francisco Museum of Art", text: "" },
      { lead: "Smithsonian Institution", text: "Washington, D.C." },
    ],
  },
  {
    label: "Collections",
    items: [
      { text: "Public parks and civic buildings, museums, and private collections nationwide" },
      { lead: "Cascadia Art Museum", text: "Gift of the DuPen Family Foundation" },
    ],
  },
  {
    label: "Honors",
    items: [
      { lead: "Fellow", text: "National Sculpture Society" },
      { lead: "Fellow", text: "National Academy of Design" },
    ],
  },
];

export default function ResumePage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Résumé</h1>
          <span className="count">Selected</span>
        </div>
        <p className="lead-intro" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
          A selected record of Everett DuPen's training, teaching, and the institutions that hold and
          have shown his work.
        </p>

        <div className="cv-grid">
          {CV.map((sec) => (
            <Reveal key={sec.label} className="cv-row">
              <div className="cv-label">{sec.label}</div>
              <div className="cv-body">
                <ul>
                  {sec.items.map((it, i) => (
                    <li key={i}>
                      {it.lead ? <b>{it.lead}</b> : null}
                      {it.lead && it.text ? " — " : null}
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

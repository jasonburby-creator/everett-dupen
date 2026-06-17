import type { Metadata } from "next";
import WorksGallery from "@/components/WorksGallery";

export const metadata: Metadata = {
  title: "Works",
  description: "The complete catalogue of Everett DuPen's sculpture and drawings — 87 works in bronze, wood, stone, and on paper.",
};

export default function WorksPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>The Catalogue</h1>
          <span className="count">87 works</span>
        </div>
        <p className="lead-intro" style={{ marginBottom: "1.5rem" }}>
          Everett DuPen worked across bronze, wood, stone, and paper for nearly eight decades. Filter
          by medium, and select any piece to view it larger.
        </p>
        <WorksGallery />
      </div>
    </section>
  );
}

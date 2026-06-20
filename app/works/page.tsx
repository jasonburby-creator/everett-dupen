import type { Metadata } from "next";
import Link from "next/link";
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
        <Link href="/works/fountain-of-creation" className="works-feature-link">
          <span className="wfl-tag">Featured</span>
          <span className="wfl-title">Fountain of Creation</span>
          <span className="wfl-sub">The full story of DuPen's most celebrated public work — from the 1962 World's Fair to today.</span>
          <span className="wfl-arrow" aria-hidden="true">→</span>
        </Link>
        <WorksGallery />
      </div>
    </section>
  );
}

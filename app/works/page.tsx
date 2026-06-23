import type { Metadata } from "next";
import Link from "next/link";
import WorksGallery from "@/components/WorksGallery";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected works from the sculpture and drawings of Everett DuPen — bronze, wood, stone, terra cotta, and drawings from a career spanning eight decades.",
};

export default function WorksPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Selected Works</h1>
          <span className="count">From a career spanning eight decades</span>
        </div>
        <p className="lead-intro" style={{ marginBottom: "1.5rem" }}>
          Everett DuPen&apos;s output spanned hundreds of pieces in bronze, wood, stone, terra cotta, and
          on paper. This is a growing selection — more works are added as they are photographed
          and documented.
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

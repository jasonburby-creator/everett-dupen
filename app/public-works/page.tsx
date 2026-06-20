import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

// Leaflet uses `window`, so we must load the map client-side only
const PublicWorksMap = dynamic(() => import("@/components/PublicWorksMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "min(56vh, 520px)",
        background: "var(--plaster-2)",
        border: "1px solid var(--hair)",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ink-soft)",
        fontStyle: "italic",
        fontFamily: "var(--f-display)",
      }}
    >
      Loading map…
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Public Works",
  description:
    "An interactive map of Everett DuPen's public works across the Pacific Northwest and beyond — fountains, reliefs, carvings, and commissions in churches, civic buildings, and university campuses.",
};

export default function PublicWorksPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Public Works</h1>
          <span className="count">Across the Northwest & Beyond</span>
        </div>
        <p className="lead-intro" style={{ marginBottom: "clamp(1.5rem,3vw,2.2rem)" }}>
          DuPen's sculpture lives where people gather — in parks, civic halls, cathedrals, libraries,
          and university campuses. This map documents every known public and commissioned work, from the{" "}
          <Link href="/works/fountain-of-creation" style={{ color: "var(--bronze)", textDecoration: "none" }}>Fountain of Creation at Seattle Center</Link>{" "}
          to a welded bronze screen in Vancouver, BC. Select any
          pin or listing to learn more.
        </p>

        <PublicWorksMap />
      </div>
    </section>
  );
}

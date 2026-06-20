// @ts-nocheck
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { PUBLIC_WORKS, CATEGORIES, type PublicWork } from "@/lib/public-works";

const CAT_KEYS = Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[];

export default function PublicWorksMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered =
    filter === "all"
      ? PUBLIC_WORKS
      : PUBLIC_WORKS.filter((w) => w.category === filter);

  const openLightbox = useCallback((e: React.MouseEvent, w: PublicWork) => {
    e.stopPropagation();
    if (w.image) setLightbox({ src: `/public-works/${w.image}`, alt: w.title });
  }, []);

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    import("leaflet").then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
      }).setView([47.45, -122.35], 8);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      mapInstance.current = map;

      PUBLIC_WORKS.forEach((w) => {
        const cat = CATEGORIES[w.category];
        const icon = L.divIcon({
          className: "pw-marker",
          html: `<span style="background:${cat.color};width:14px;height:14px;border-radius:50%;display:block;border:2px solid #F6F4EF;box-shadow:0 2px 6px rgba(0,0,0,.35);"></span>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });

        const imgTag = w.image
          ? `<img src="/public-works/${w.image}" alt="${w.title}" style="width:100%;max-height:180px;object-fit:contain;border-radius:3px;margin-bottom:8px;background:#fff;" />`
          : "";

        const marker = L.marker([w.lat, w.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:Hanken Grotesk,system-ui,sans-serif;max-width:260px;">
              ${imgTag}
              <div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${cat.color};font-weight:700;margin-bottom:4px;">${cat.label}</div>
              <div style="font-family:Fraunces,Georgia,serif;font-style:italic;font-size:16px;line-height:1.2;margin-bottom:6px;">${w.title}</div>
              <div style="font-size:13px;color:#5B5345;margin-bottom:3px;">${w.location}</div>
              <div style="font-size:12px;color:#6E4E2B;">${w.date ? w.date + " · " : ""}${w.medium || ""}</div>
            </div>`,
            { maxWidth: 300 }
          );

        marker._pw = w;
        markersRef.current.push(marker);
        marker.on("click", () => setActive(w.id));
      });
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
        markersRef.current = [];
      }
    };
  }, []);

  // Update marker visibility on filter change
  useEffect(() => {
    if (!mapInstance.current) return;
    const map = mapInstance.current;
    const visibleBounds: [number, number][] = [];

    markersRef.current.forEach((m) => {
      const show = filter === "all" || m._pw.category === filter;
      if (show) {
        m.addTo(map);
        visibleBounds.push([m._pw.lat, m._pw.lng]);
      } else {
        map.removeLayer(m);
      }
    });

    if (visibleBounds.length > 0) {
      import("leaflet").then((L) => {
        map.fitBounds(L.latLngBounds(visibleBounds), { padding: [40, 40], maxZoom: 12 });
      });
    }
  }, [filter]);

  // Pan to active work
  useEffect(() => {
    if (!active || !mapInstance.current) return;
    const marker = markersRef.current.find((m) => m._pw.id === active);
    if (marker) {
      mapInstance.current.setView([marker._pw.lat, marker._pw.lng], 13, {
        animate: true,
      });
      marker.openPopup();
    }
  }, [active]);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />

      {/* Filters */}
      <div className="filters" role="group" aria-label="Filter by category">
        <button
          className="filter"
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All<span className="n">{PUBLIC_WORKS.length}</span>
        </button>
        {CAT_KEYS.map((k) => {
          const n = PUBLIC_WORKS.filter((w) => w.category === k).length;
          return (
            <button
              key={k}
              className="filter"
              aria-pressed={filter === k}
              onClick={() => setFilter(k)}
            >
              {CATEGORIES[k].label}
              <span className="n">{n}</span>
            </button>
          );
        })}
      </div>

      {/* Sticky map wrapper */}
      <div className="pw-map-sticky">
        <div
          ref={mapRef}
          style={{
            width: "100%",
            height: "min(56vh, 520px)",
            borderRadius: "4px",
            border: "1px solid var(--hair)",
            background: "var(--plaster-2)",
          }}
        />
      </div>

      {/* Work list */}
      <div className="pw-list">
        {filtered.map((w) => {
          const cat = CATEGORIES[w.category];
          return (
            <button
              key={w.id}
              className={`pw-card${active === w.id ? " pw-active" : ""}`}
              onClick={() => setActive(w.id)}
            >
              <div
                className="pw-dot"
                style={{ background: cat.color }}
              />
              <div className="pw-info">
                <div className="pw-cat" style={{ color: cat.color }}>
                  {cat.label}
                  {w.date ? ` · ${w.date}` : ""}
                </div>
                <div className="pw-title">{w.title}</div>
                <div className="pw-loc">{w.location}, {w.city}</div>
                {w.medium && <div className="pw-med">{w.medium}</div>}
                <p className="pw-desc">{w.description}</p>
              </div>
              {w.image && (
                <div
                  className="pw-thumb"
                  onClick={(e) => openLightbox(e, w)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View larger image of ${w.title}`}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(e as any, w); }}
                >
                  <Image
                    src={`/public-works/${w.image}`}
                    alt={w.title}
                    width={200}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                  <span className="pw-expand" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 1H1v5M10 1h5v5M6 15H1v-5M10 15h5v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="pw-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Enlarged artwork image"
        >
          <button
            className="pw-lb-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="pw-lb-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

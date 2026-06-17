"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { WORKS, CATEGORIES, countFor, type Filter } from "@/lib/works";
import { imgSrc } from "@/lib/img";

export default function WorksGallery() {
  const [cat, setCat] = useState<Filter>("All");
  const [lbOpen, setLbOpen] = useState(false);
  const [pos, setPos] = useState(0);

  const visible = useMemo(
    () => WORKS.filter((w) => cat === "All" || w.category === cat),
    [cat]
  );

  const open = useCallback((idx: number) => {
    setPos(idx);
    setLbOpen(true);
  }, []);
  const close = useCallback(() => setLbOpen(false), []);
  const step = useCallback(
    (d: number) => setPos((p) => (p + d + visible.length) % visible.length),
    [visible.length]
  );

  useEffect(() => {
    if (!lbOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lbOpen, close, step]);

  const current = visible[pos];

  return (
    <>
      <div className="filters" role="group" aria-label="Filter works by medium">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className="filter"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
          >
            {c}
            <span className="n">{countFor(c)}</span>
          </button>
        ))}
      </div>

      <div className="cat-grid">
        {visible.map((w, i) => (
          <button
            key={w.file}
            className="cat-item"
            aria-label={`${w.title}, ${w.medium}`}
            onClick={() => open(i)}
          >
            <span className="cat-plate">
              <span className="plnum">{w.category}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc(w.file, 640)}
                alt={`${w.title}, ${w.category.toLowerCase()}, by Everett DuPen`}
                loading="lazy"
              />
              <span className="cat-cap">
                <span className="t">{w.title}</span>
                <span className="m">{w.medium}</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {lbOpen && current && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label="Artwork viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button className="lb-close" aria-label="Close" onClick={close}>
            ✕
          </button>
          <div className="lb-stage">
            <div className="lb-imgwrap">
              <button className="lb-btn lb-prev" aria-label="Previous work" onClick={() => step(-1)}>
                ‹
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="lb-img"
                src={imgSrc(current.file, 1500)}
                alt={`${current.title}, ${current.medium}, by Everett DuPen`}
              />
              <button className="lb-btn lb-next" aria-label="Next work" onClick={() => step(1)}>
                ›
              </button>
            </div>
            <div className="lb-cap">
              <div className="t">{current.title}</div>
              <div className="m">{current.medium}</div>
              <div className="lb-counter">
                {current.category.toUpperCase()} · {pos + 1} / {visible.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

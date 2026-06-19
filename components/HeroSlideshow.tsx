'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ *
 * Hero rotation
 * ------------------------------------------------------------------ *
 * Built for a 5-image rotation. Two are wired up; drop the remaining
 * three files into /public/hero and uncomment their entries to reach 5.
 * The component renders however many slides are defined, so it works
 * with 2 today and 5 once you add the rest.
 *
 *  - src      path under /public
 *  - alt      describe the work for screen readers + SEO
 *  - position object-position for full-bleed cropping ('center',
 *             'center 30%', 'left', etc.)
 *  - tone     'dark'  = bright/light text over a dark image
 *             'light' = dark text over a bright image (e.g. white seamless)
 * ------------------------------------------------------------------ */
type Tone = 'dark' | 'light';
type Slide = { src: string; alt: string; position?: string; tone?: Tone };

const SLIDES: Slide[] = [
  {
    src: '/hero/reclining-figure.jpg',
    alt: 'Bronze figurative sculpture by Everett DuPen of a reclining male nude, one arm raised with fist clenched.',
    position: 'center',
    tone: 'light',
  },
  {
    src: '/hero/seattle-center-fountain.jpg',
    alt: 'Everett DuPen’s bronze fountain sculpture at Seattle Center, with the Space Needle rising beyond on an overcast day.',
    position: 'center',
    tone: 'dark',
  },
  {
    src: '/hero/family-group.jpg',
    alt: 'Carved wood relief by Everett DuPen titled “Family Group,” a mother and two children embracing.',
    position: 'center 30%',
    tone: 'light',
  },
  {
    src: '/hero/icarus.jpg',
    alt: 'Bronze sculpture by Everett DuPen titled “Icarus,” a falling figure with outstretched limbs, on a wood base.',
    position: 'center',
    tone: 'light',
  },
  {
    src: '/hero/prometheus.jpg',
    alt: 'Carved stone head by Everett DuPen titled “Prometheus,” a furrowed, intense expression, on a black base.',
    position: 'center 35%',
    tone: 'light',
  },
];

// Lower-third placard. Set to null to hide.
const PLACARD: { name: string; dates: string; line: string } | null = {
  name: 'Everett DuPen',
  dates: '1912 – 2005', // confirm dates
  line: 'American figurative sculptor',
};

const HOLD_MS = 6500; // how long each image holds
const FADE_MS = 1600; // cross-fade duration

export default function HeroSlideshow() {
  const slides = SLIDES.filter((s) => Boolean(s.src));
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // honor the OS "reduce motion" preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const go = useCallback(
    (next: number) =>
      setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  // auto-advance (paused under reduced motion or with a single image)
  useEffect(() => {
    if (reducedMotion || slides.length < 2) return;
    timer.current = setTimeout(() => go(index + 1), HOLD_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, reducedMotion, slides.length, go]);

  const tone: Tone = slides[index]?.tone ?? 'dark';
  const onLight = tone === 'light';
  const nameColor = onLight ? '#1b1714' : '#f5f1ea';
  const subColor = onLight ? '#5c5043' : '#c9bda9';

  return (
    <section
      aria-label="Selected works by Everett DuPen"
      className="relative h-[calc(100dvh-4rem)] min-h-[520px] w-full overflow-hidden bg-[#15110d]"
    >
      {/* Image stack — each slide carries its own tone-matched scrim */}
      {slides.map((slide, i) => {
        const slideTone: Tone = slide.tone ?? 'dark';
        const scrim =
          slideTone === 'light'
            ? 'linear-gradient(to top, rgba(245,241,234,0.86) 0%, rgba(245,241,234,0.25) 34%, rgba(245,241,234,0) 62%)'
            : 'linear-gradient(to top, rgba(10,8,6,0.80) 0%, rgba(10,8,6,0.25) 34%, rgba(10,8,6,0) 62%)';
        return (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: reducedMotion ? '0ms' : `${FADE_MS}ms`,
            }}
          >
            <Image
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position ?? 'center' }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: scrim }}
            />
          </div>
        );
      })}

      {/* Placard */}
      {PLACARD && (
        <div
          className="absolute bottom-0 left-0 p-6 transition-colors sm:p-10 md:p-14"
          style={{ transitionDuration: `${FADE_MS}ms` }}
        >
          <h1
            className="text-4xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: nameColor,
            }}
          >
            {PLACARD.name}
          </h1>
          <p
            className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] sm:text-xs"
            style={{ color: subColor }}
          >
            <span>{PLACARD.dates}</span>
            <span aria-hidden className="h-px w-8 bg-[#b08d57]" />
            <span>{PLACARD.line}</span>
          </p>
        </div>
      )}

      {/* Pagination / progress */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 right-6 flex items-center gap-2 sm:bottom-10 sm:right-10">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show image ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              className="relative h-[3px] w-10 overflow-hidden rounded-full bg-white/25 transition-colors hover:bg-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b08d57]"
            >
              <span
                key={i === index ? `fill-${index}` : `idle-${i}`}
                className="absolute inset-y-0 left-0 rounded-full bg-[#e7d8b8]"
                style={
                  i === index
                    ? reducedMotion
                      ? { width: '100%' }
                      : { width: '100%', animation: `heroFill ${HOLD_MS}ms linear` }
                    : { width: 0 }
                }
              />
            </button>
          ))}
        </div>
      )}

      <style>{`@keyframes heroFill { from { width: 0%; } to { width: 100%; } }`}</style>
    </section>
  );
}

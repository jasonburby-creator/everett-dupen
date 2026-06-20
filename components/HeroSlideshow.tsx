'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ *
 * Hero rotation — 7-image set
 * ------------------------------------------------------------------ *
 *  - fit      'cover'   = full-bleed crop (landscape/environmental)
 *             'contain' = show the entire work, pad the sides
 *  - bg       background color behind contained images
 *  - tone     'dark'  = light text   |  'light' = dark text
 *  - scrim    custom scrim gradient (overrides the tone default)
 * ------------------------------------------------------------------ */
type Tone = 'dark' | 'light';
type Fit = 'cover' | 'contain';
type Slide = {
  src: string;
  alt: string;
  title: string;
  material: string;
  position?: string;
  tone?: Tone;
  fit?: Fit;
  bg?: string;
  scrim?: string;
};

const SLIDES: Slide[] = [
  {
    src: '/hero/upheaval.jpg',
    title: 'Upheaval',
    material: 'Bronze',
    alt: 'Bronze sculpture by Everett DuPen titled "Upheaval," a reclining figure with one arm raised, fist clenched.',
    position: 'center 70%',
    tone: 'light',
    fit: 'cover',
    scrim: 'linear-gradient(to top, rgba(245,241,234,0.50) 0%, rgba(245,241,234,0.10) 18%, rgba(245,241,234,0) 36%)',
  },
  {
    src: '/hero/seattle-center-fountain.jpg',
    title: 'Fountain of Creation',
    material: 'Bronze',
    alt: 'Everett DuPen\u2019s bronze fountain sculpture at Seattle Center, with the Space Needle rising beyond on an overcast day.',
    position: 'center 20%',
    tone: 'dark',
    fit: 'cover',
  },
  {
    src: '/hero/workshop.jpg',
    title: 'The Artist at Work',
    material: 'In the studio',
    alt: 'Everett DuPen in his studio, holding a bronze figure at arm\u2019s length, surrounded by tools and small sculptures.',
    position: 'center 35%',
    tone: 'dark',
    fit: 'cover',
  },
  {
    src: '/hero/northwest-fishermen.jpg',
    title: 'Northwest Fishermen',
    material: 'Carved walnut',
    alt: 'Carved walnut wood relief by Everett DuPen titled "Northwest Fishermen," two male figures hauling a net of fish.',
    tone: 'light',
    fit: 'contain',
    bg: '#e5e0d8',
  },
  {
    src: '/hero/neptunes-daughter.jpg',
    title: 'Neptune\u2019s Daughter',
    material: 'Bronze',
    alt: 'Bronze sculpture by Everett DuPen titled "Neptune\u2019s Daughter," a seated female figure with one foot raised.',
    tone: 'light',
    fit: 'contain',
    bg: '#d8d3cb',
  },
  {
    src: '/hero/happy-gardener.jpg',
    title: 'Happy Gardener',
    material: 'Marble',
    alt: 'Marble sculpture by Everett DuPen titled "Happy Gardener," a reclining woman cradling an infant.',
    tone: 'light',
    fit: 'cover',
  },
  {
    src: '/hero/the-reader-and-female-relief.jpg',
    title: 'The Reader & Female Relief',
    material: 'Bronze relief',
    alt: 'Pair of bronze relief panels by Everett DuPen \u2014 "The Reader" and "Female Relief," compact seated figures.',
    tone: 'light',
    fit: 'contain',
    bg: '#d5d0c9',
  },
  {
    src: '/hero/family-group.jpg',
    title: 'Family Group',
    material: 'Carved wood',
    alt: 'Carved wood relief by Everett DuPen titled "Family Group," a mother and two children embracing.',
    tone: 'light',
    fit: 'cover',
  },
];

const HOLD_MS = 6500;
const FADE_MS = 1600;

export default function HeroSlideshow() {
  const slides = SLIDES.filter((s) => Boolean(s.src));
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    if (reducedMotion || slides.length < 2) return;
    timer.current = setTimeout(() => go(index + 1), HOLD_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, reducedMotion, slides.length, go]);

  const tone: Tone = slides[index]?.tone ?? 'dark';
  const onLight = tone === 'light';
  const textPrimary = onLight ? '#1b1714' : '#f5f1ea';
  const textSecondary = onLight ? '#5c5043' : '#c9bda9';

  return (
    <section
      aria-label="Selected works by Everett DuPen"
      className="relative h-[calc(100dvh-4rem)] min-h-[360px] sm:min-h-[520px] w-full overflow-hidden bg-[#15110d]"
    >
      {slides.map((slide, i) => {
        const slideTone: Tone = slide.tone ?? 'dark';
        const slideFit: Fit = slide.fit ?? 'cover';
        const defaultScrim =
          slideTone === 'light'
            ? 'linear-gradient(to top, rgba(245,241,234,0.72) 0%, rgba(245,241,234,0.18) 28%, rgba(245,241,234,0) 52%)'
            : 'linear-gradient(to top, rgba(10,8,6,0.74) 0%, rgba(10,8,6,0.20) 28%, rgba(10,8,6,0) 52%)';
        return (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: reducedMotion ? '0ms' : `${FADE_MS}ms`,
              backgroundColor: slide.bg ?? (slideTone === 'light' ? '#f0ece5' : '#15110d'),
            }}
          >
            <Image
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              fill
              priority={i === 0}
              sizes="100vw"
              className={slideFit === 'contain' ? 'object-contain' : 'object-cover'}
              style={{ objectPosition: slide.position ?? 'center' }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: slide.scrim ?? defaultScrim }}
            />
          </div>
        );
      })}

      {/* Lower-left: artist name + slide title & material */}
      <div
        className="absolute bottom-0 left-0 p-6 transition-colors sm:p-10 md:p-14"
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        <h1
          className="text-4xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: textPrimary,
          }}
        >
          Everett DuPen
        </h1>
        <p
          className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] sm:text-xs"
          style={{ color: textSecondary }}
        >
          <span>1912 – 2005</span>
          <span aria-hidden className="h-px w-8 bg-[#b08d57]" />
          <span>American figurative sculptor</span>
        </p>

        {/* Per-slide title & material */}
        <p
          className="mt-5 text-[13px] tracking-wide sm:text-sm"
          style={{ color: textSecondary, fontStyle: 'italic' }}
        >
          <span style={{ color: textPrimary, fontStyle: 'normal', fontWeight: 500 }}>
            {slides[index]?.title}
          </span>
          {' · '}
          {slides[index]?.material}
        </p>
      </div>

      {/* Pagination / progress */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 right-6 flex items-center gap-2 sm:bottom-10 sm:right-10">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${slide.title}`}
              aria-current={i === index}
              className="relative h-[3px] w-7 sm:w-10 overflow-hidden rounded-full bg-white/25 transition-colors hover:bg-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b08d57]"
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

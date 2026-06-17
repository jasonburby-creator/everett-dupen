import { imgSrc } from "@/lib/img";

const PICKS = [
  "works/Icarus.jpg",
  "works/Singers-and-Dancers.jpg",
  "works/Rising-to-the-Sun.jpg",
  "works/Voyager.jpg",
  "works/Dance-Fantasy.jpg",
  "works/Lotus.jpg",
  "works/Vaulting-Kouros.jpg",
  "works/Madonna-of-the-Two-Cities.jpg",
  "works/Diver.jpg",
  "works/Celestia.jpg",
  "works/Sea-Form.jpg",
  "works/Marguerite-Leaping.jpg",
  "works/Owls.jpg",
  "works/Lovers-or-Affections.jpg",
  "works/Pensive.jpg",
];

export default function Ribbon() {
  const items = [...PICKS, ...PICKS];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {items.map((file, i) => (
          <figure key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc(file, 320)} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}

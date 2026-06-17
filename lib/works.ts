export type Category = "Bronze" | "Wood" | "Stone" | "Drawings";

export interface Work {
  category: Category;
  title: string;
  file: string;
  medium: string;
}

export const CATEGORIES = ["All", "Bronze", "Wood", "Stone", "Drawings"] as const;
export type Filter = (typeof CATEGORIES)[number];

export const WORKS: Work[] = [
  // —— BRONZE (39) ——
  { category: "Bronze", title: "Singers and Dancers", file: "works/Singers-and-Dancers.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Sea Form", file: "works/Sea-Form.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Genesis", file: "works/Genesis3.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Pensive", file: "works/Pensive.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Ballerina Tying Slipper", file: "works/Balarina-Tying-Slipper.jpg", medium: "Bronze on marble base" },
  { category: "Bronze", title: "St. Simon the Stylite", file: "works/St.-Simone-the-Stylite.jpg", medium: "Bronze on walnut base" },
  { category: "Bronze", title: "Abundance", file: "works/abundance.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Falling Man", file: "works/falling_man.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Family Security", file: "works/Family-Security-Male-and-Female.jpg", medium: "Bronze · Male and Female" },
  { category: "Bronze", title: "Dreaming", file: "works/Dreaming.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Marguerite Jumping", file: "works/Marguerite-Jumping.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Jump Rope", file: "works/Jump-Rope.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Pogo Stick Girl", file: "works/Pogo-Stick-Girl.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Ballerina Resting", file: "works/dupen_balarina_resting.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Eve", file: "works/dupen_eve.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Adam and Eve", file: "works/Adam-and-Eve.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Beach Ball", file: "works/Beach-Ball.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Celestia", file: "works/Celestia.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Dance Fantasy", file: "works/Dance-Fantasy.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Diver", file: "works/Diver.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Standing Bather", file: "works/Figure-in-Spiral-Form-or-Standing-Bather.jpg", medium: "Bronze · Figure in Spiral Form" },
  { category: "Bronze", title: "Grandson Aaron", file: "works/Grandson-Aaron.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Horizontal Intertwine", file: "works/Horizontal-Intertwine.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Icarus", file: "works/Icarus.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Lotus", file: "works/Lotus.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Lovers", file: "works/Lovers-or-Affections.jpg", medium: "Bronze · also titled Affections" },
  { category: "Bronze", title: "Lullaby", file: "works/Lullaby.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Madonna of the Two Cities", file: "works/Madonna-of-the-Two-Cities.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Marguerite Leaping", file: "works/Marguerite-Leaping.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Neptune's Daughter", file: "works/Neptune's-Daughter.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Owls", file: "works/Owls.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Rising to the Sun", file: "works/Rising-to-the-Sun.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Samantha", file: "works/Samantha.jpg", medium: "Bronze" },
  { category: "Bronze", title: "The Reader and Female Relief", file: "works/The-Reader-and-Female-Relief.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Upheaval", file: "works/Upheaval.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Vaulting Kouros", file: "works/Vaulting-Kouros.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Vertical Intertwine", file: "works/Vertical-Intertwine.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Voyager", file: "works/Voyager.jpg", medium: "Bronze" },
  { category: "Bronze", title: "Westwind", file: "works/Westwind.jpg", medium: "Bronze" },
  // —— WOOD (18) ——
  { category: "Wood", title: "Showering Woman", file: "works/standingwoman.jpg", medium: "Walnut · 1969 · 27.5 × 6 × 4.5 in" },
  { category: "Wood", title: "Growing Up", file: "works/Growing-Up.jpg", medium: "Walnut · 1953 · 21.25 × 4.5 × 7.5 in" },
  { category: "Wood", title: "After the Shower", file: "works/After-the-Shower.jpg", medium: "Walnut · 1992 · 27 × 7 × 5 in" },
  { category: "Wood", title: "Brutus", file: "works/Brutus.jpg", medium: "Mahogany · 1940 · 14 × 9 × 7 in" },
  { category: "Wood", title: "Concert Gathering", file: "works/Concert-Gathering.jpg", medium: "Walnut · 1975 · 30 × 21 × 3 in" },
  { category: "Wood", title: "Angel and Virgin of Annunciation", file: "works/Angel-and-Virgin-of-Annuncation.jpg", medium: "Walnut · 1970s · 19.5 × 4 in" },
  { category: "Wood", title: "Family Group", file: "works/Family-Group.jpg", medium: "Walnut · 1978 · 24.5 × 16.5 × 3.5 in" },
  { category: "Wood", title: "Salem", file: "works/Female-Portrait-Bust.jpg", medium: "Walnut · 1970s · 13 × 7 × 8 in" },
  { category: "Wood", title: "Figure Form", file: "works/Figure-Form.jpg", medium: "Walnut · 1969 · 22.5 × 4 × 4 in" },
  { category: "Wood", title: "Genesis", file: "works/Genesis-(2).jpg", medium: "Teak · 1969 · 12 × 10 × 5 in" },
  { category: "Wood", title: "Visitation", file: "works/Visitation.jpg", medium: "Walnut · 1954 · 22 × 6 × 4 in" },
  { category: "Wood", title: "Moses and the Burning Bush", file: "works/Moses-and-the-Burning-Bush.jpg", medium: "Juniper · 1954 · 26.5 × 12.5 × 7 in" },
  { category: "Wood", title: "Northwest Fishermen", file: "works/Northwest-Fishermen.jpg", medium: "Walnut · 1955 · 36 × 24 in" },
  { category: "Wood", title: "Observer", file: "works/Observer.jpg", medium: "Rosewood · 1968 · 27.5 × 10 × 6 in" },
  { category: "Wood", title: "Moment of Insight", file: "works/Reflection.jpg", medium: "Myrtlewood · 1957 · 14 × 5.5 × 3 in" },
  { category: "Wood", title: "Shower", file: "works/Shower.jpg", medium: "Walnut · 1993 · 27.5 × 7 × 6 in" },
  { category: "Wood", title: "Concert Singer", file: "works/Singer.jpg", medium: "Walnut · 1979 · 30 × 7 × 5 in" },
  { category: "Wood", title: "Sunshine", file: "works/Sunshine.jpg", medium: "Walnut · 1970 · 10 × 8 × 5 in" },
  // —— STONE (10) ——
  { category: "Stone", title: "Swimmer", file: "works/Swimmer2.jpg", medium: "Marble · 10 × 13 × 5 in" },
  { category: "Stone", title: "Waiting Room", file: "works/Waiting-Room.jpg", medium: "Limestone · 10 × 8 × 5 in" },
  { category: "Stone", title: "Dixie", file: "works/Dixie.jpg", medium: "Marble · 1988 · 8 × 12 × 4 in" },
  { category: "Stone", title: "Stylized Head", file: "works/Stylized-Head.jpg", medium: "Marble · 1955 · 12 × 3 × 7 in" },
  { category: "Stone", title: "Prometheus", file: "works/Prometheus.jpg", medium: "Marble · 15 in high" },
  { category: "Stone", title: "Owl Family", file: "works/Owl-Family.jpg", medium: "Black limestone · 1988 · 9 × 7 × 5 in" },
  { category: "Stone", title: "Bathsheba", file: "works/Bathsheba.jpg", medium: "Marble · 1989 · 12 × 5 × 4 in" },
  { category: "Stone", title: "Lady Marble", file: "works/Marble-Girl.jpg", medium: "Marble · 1958 · 6.5 × 5 × 7.5 in" },
  { category: "Stone", title: "Indecision", file: "works/Indecision.jpg", medium: "Marble · 1993 · 10 × 5 × 6 in" },
  { category: "Stone", title: "Happy Gardener", file: "works/Happy-Gardener.jpg", medium: "Sandstone · 1997 · 20 × 12 × 12 in" },
  // —— DRAWINGS (20) ——
  { category: "Drawings", title: "Study", file: "works/drawing1.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing2.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing3.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing4.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing5.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing6.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing7.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/drawing8.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-1.JPG", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-2.JPG", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-3.JPG", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-4.JPG", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-5.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-6.JPG", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-7.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-8.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-9.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-10.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-11.jpg", medium: "Drawing" },
  { category: "Drawings", title: "Study", file: "works/new-drawing-12.jpg", medium: "Drawing" },
];

export function countFor(cat: Filter): number {
  return cat === "All" ? WORKS.length : WORKS.filter((w) => w.category === cat).length;
}

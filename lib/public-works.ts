export interface PublicWork {
  id: string;
  title: string;
  location: string;
  city: string;
  lat: number;
  lng: number;
  date: string;
  medium: string;
  description: string;
  category: "landmark" | "campus" | "church" | "civic" | "corporate" | "museum";
  image?: string; // path in /public/public-works/
}

export const PUBLIC_WORKS: PublicWork[] = [
  // ── MAJOR LANDMARKS ──
  {
    id: "fountain-of-creation",
    title: "Fountain of Creation (DuPen Fountain)",
    location: "Seattle Center, north of Climate Pledge Arena",
    city: "Seattle, WA",
    lat: 47.622865,
    lng: -122.353752,
    date: "1962",
    medium: "Bronze and colored concrete",
    description:
      "Three organic bronze forms — Evolution of Man, Flight of Gulls, and Seaweed — rise from a stone-and-water basin. Commissioned for the 1962 World's Fair, designed with architect Paul Thiry. Renovated as a splash-pad plaza in 2022–2025 and rededicated with the DuPen family in attendance. A Seattle Landmark. See Patricia Failing's essay in Profiles (2012) for the full story of Thiry and DuPen's collaboration.",
    category: "landmark",
    image: "fountain-of-creation.jpg",
  },
  {
    id: "mccaw-hall",
    title: "Four Bronzes at McCaw Hall",
    location: "McCaw Hall, Seattle Center",
    city: "Seattle, WA",
    lat: 47.623999,
    lng: -122.350271,
    date: "1939–1976",
    medium: "Bronze (four works)",
    description:
      "Singers (1939–40), Dancers (1940), Form in Linear Movement (1974), and Pas de Deux (1976). Gift of the DuPen Family Foundation to Seattle Center Foundation. Form in Linear Movement is visible from the exterior promenade; the other three are in the upper lobbies.",
    category: "landmark",
    image: "mccaw-hall.jpg",
  },
  {
    id: "sculptural-screens",
    title: "Sculptural Screens",
    location: "Seattle Municipal Tower, 700 5th Ave (3rd-floor entrance)",
    city: "Seattle, WA",
    lat: 47.605236,
    lng: -122.329275,
    date: "1962",
    medium: "Carved walnut, eight panels and two upright posts, 7' × 10'",
    description:
      "Commissioned by Seattle City Council for the Municipal Building lobby. Panels depict Pacific Northwest plant life — undulating seaweed and unfolding buds. Removed in 2001 when the building was demolished, refurbished, and reinstalled at the Municipal Tower. Part of the City of Seattle's public art collection.",
    category: "landmark",
    image: "sculptural-screens.jpg",
  },
  {
    id: "pritchard-fountain",
    title: "Fountain",
    location: "Joel Pritchard Building, Washington State Capitol",
    city: "Olympia, WA",
    lat: 47.034385,
    lng: -122.904791,
    date: "1955",
    medium: "900 lbs copper-enriched bronze, green terrazzo, and cement",
    description:
      "Commissioned when DuPen was chairman of the UW Sculpture Department. Features a pair of salmon spitting water. Located at the former Washington State Library building on the Capitol campus.",
    category: "landmark",
    image: "pritchard-fountain.jpg",
  },
  {
    id: "state-library-pool",
    title: "Pool with Salmon and Seagulls",
    location: "Washington State Library",
    city: "Olympia, WA",
    lat: 47.034500,
    lng: -122.905000,
    date: "c. 1955",
    medium: "Bronze, 12' × 4'",
    description:
      "A bronze pool sculpture depicting salmon and seagulls at the Washington State Library building on the Capitol campus.",
    category: "civic",
  },

  // ── UNIVERSITY OF WASHINGTON ──
  {
    id: "uw-triptych",
    title: "Limestone Triptych: The Atom, Inquisitiveness, and Superstition",
    location: "Paul G. Allen Center for Computer Science & Engineering, UW",
    city: "Seattle, WA",
    lat: 47.653329,
    lng: -122.305695,
    date: "1947",
    medium: "Limestone relief",
    description:
      "Originally on the exterior of the UW's Electrical Engineering building (since demolished). Relocated to the Allen Center. In Inquisitiveness, a powerful male figure strains upward as if to escape the frame — among DuPen's most admired pieces. Art historian Patricia Failing explores the story of this commission in Profiles (2012).",
    category: "campus",
    image: "uw-triptych.jpg",
  },
  {
    id: "uw-odegaard",
    title: "Portrait of President Charles Odegaard",
    location: "Suzzallo & Allen Libraries, University of Washington",
    city: "Seattle, WA",
    lat: 47.655741,
    lng: -122.309672,
    date: "1973",
    medium: "Bronze, 3× life size",
    description:
      "A monumental bronze portrait bust of Charles Odegaard, President of the University of Washington, located in the graduate library. Patricia Failing notes DuPen employed subtle shifts of surface texture to vary the play of light, creating a sympathetic portrait from life (Profiles, 2012).",
    category: "campus",
    image: "uw-odegaard.jpg",
  },
  {
    id: "uw-crew",
    title: "Three Portrait Reliefs of Crew Coaches",
    location: "Conibear Shellhouse, University of Washington",
    city: "Seattle, WA",
    lat: 47.651100,
    lng: -122.301500,
    date: "",
    medium: "Relief",
    description:
      "Three portrait reliefs honoring University of Washington crew coaches, located in the crew house on the shores of Lake Washington.",
    category: "campus",
  },
  {
    id: "uw-jones",
    title: "Portrait Relief of John Paul Jones",
    location: "ROTC Building, University of Washington",
    city: "Seattle, WA",
    lat: 47.654000,
    lng: -122.308000,
    date: "",
    medium: "Relief",
    description:
      "A portrait relief of the naval commander John Paul Jones in the University of Washington ROTC building.",
    category: "campus",
  },
  {
    id: "uw-faculty-club",
    title: "Gold Leaf Wood Carving",
    location: "Faculty Club, University of Washington",
    city: "Seattle, WA",
    lat: 47.661000,
    lng: -122.308000,
    date: "",
    medium: "Wood with gold leaf",
    description:
      "A gold-leaf wood carving at the University of Washington Faculty Club.",
    category: "campus",
  },
  {
    id: "uw-health-sciences",
    title: "Two Portrait Reliefs",
    location: "Health Sciences Building, University of Washington",
    city: "Seattle, WA",
    lat: 47.650600,
    lng: -122.308800,
    date: "",
    medium: "Relief",
    description: "Two portrait reliefs in the University of Washington Health Sciences building.",
    category: "campus",
  },

  // ── CHURCHES ──
  {
    id: "st-marks",
    title: "Christ the Good Shepherd — Five Walnut Carvings",
    location: "St. Mark's Episcopal Cathedral, Bloedel Hall",
    city: "Seattle, WA",
    lat: 47.631899,
    lng: -122.321367,
    date: "c. 1960",
    medium: "Walnut",
    description:
      "Five walnut carvings in Bloedel Hall depicting scenes from the life of Christ, including Jesus telling his disciples to cast their nets. Commissioned in memory of Julius and Prentice Bloedel — funded by a gift originally designated for stained glass windows, given in the form of IBM stock.",
    category: "church",
    image: "st-marks.jpg",
  },
  {
    id: "st-john",
    title: "Carved Plaster Relief Altarpiece",
    location: "St. John the Baptist Episcopal Church",
    city: "West Seattle, WA",
    lat: 47.575849,
    lng: -122.386427,
    date: "",
    medium: "Carved plaster, 30' × 20'",
    description:
      "A monumental 30-foot by 20-foot carved plaster relief altarpiece — DuPen's largest single-surface work. St. John the Baptist was DuPen's own parish; his memorial service was held here in June 2005.",
    category: "church",
    image: "johnthebaptist.jpg",
  },
  {
    id: "emmanuel-mi",
    title: "Baptismal Font",
    location: "Emmanuel Episcopal Church",
    city: "Mercer Island, WA",
    lat: 47.566435,
    lng: -122.223546,
    date: "",
    medium: "",
    description: "A baptismal font for Emmanuel Episcopal Church on Mercer Island.",
    category: "church",
  },
  {
    id: "st-elizabeth-ascension",
    title: "Ascension — Wood Carving",
    location: "St. Elizabeth Ann Seton Catholic Church",
    city: "Bothell, WA",
    lat: 47.834170,
    lng: -122.200448,
    date: "1986",
    medium: "Wood, 6' high",
    description: "A six-foot wood carving titled Ascension for St. Elizabeth Seton Church.",
    category: "church",
  },
  {
    id: "st-elizabeth-madonna",
    title: "Madonna of the Rose",
    location: "St. Elizabeth Ann Seton Catholic Church",
    city: "Bothell, WA",
    lat: 47.834170,
    lng: -122.200448,
    date: "1986",
    medium: "Bronze",
    description: "A bronze Madonna of the Rose at St. Elizabeth Seton Church.",
    category: "church",
  },
  {
    id: "st-stephen-longview",
    title: "Welded Bronze St. Francis",
    location: "St. Stephen's Episcopal Church",
    city: "Longview, WA",
    lat: 46.141074,
    lng: -122.945293,
    date: "1985",
    medium: "Welded bronze, 3' high",
    description:
      "A three-foot welded bronze figure of St. Francis at St. Stephen's Episcopal Church in Longview, about 130 miles south of Seattle.",
    category: "church",
  },
  {
    id: "olg",
    title: "Virgin Mary — Mahogany Relief",
    location: "Our Lady of Guadalupe Catholic Church",
    city: "West Seattle, WA",
    lat: 47.538869,
    lng: -122.376079,
    date: "",
    medium: "Mahogany, 7' high",
    description: "A seven-foot mahogany relief of the Virgin Mary.",
    category: "church",
  },

  // ── CIVIC / CORPORATE ──
  {
    id: "boeing",
    title: "Portrait Relief of William Boeing",
    location: "Boeing Company",
    city: "Seattle, WA",
    lat: 47.540000,
    lng: -122.315000,
    date: "",
    medium: "Bronze relief",
    description:
      "A bronze portrait relief of aviation pioneer William Boeing, commissioned by the Boeing Company.",
    category: "corporate",
  },
  {
    id: "aberdeen",
    title: "Portrait Bust of Mayor Lundgren",
    location: "City Hall",
    city: "Aberdeen, WA",
    lat: 46.975400,
    lng: -123.815700,
    date: "",
    medium: "",
    description: "A portrait bust of Mayor Lundgren at Aberdeen City Hall, on the Washington coast.",
    category: "civic",
  },
  {
    id: "edmonds-library",
    title: "Vision",
    location: "Edmonds Library (formerly Agnes Anderson Library)",
    city: "Edmonds, WA",
    lat: 47.809988,
    lng: -122.372746,
    date: "1983–84",
    medium: "Bronze",
    description:
      "A bronze figure reaching skyward at the Edmonds Library, just blocks from where the Cascadia Art Museum now hosts the Eternal Forms exhibition.",
    category: "civic",
    image: "vision-edmonds.jpg",
  },

  // ── MUSEUMS ──
  {
    id: "cascadia",
    title: "Dancers and Singers (plaster)",
    location: "Cascadia Art Museum",
    city: "Edmonds, WA",
    lat: 47.810421,
    lng: -122.384188,
    date: "c. 1939–40",
    medium: "Plaster",
    description:
      "A plaster version of the iconic Dancers and Singers, gifted by the DuPen Family Foundation in 2024. The museum is currently hosting Eternal Forms: The Sculpture of Everett DuPen through September 13, 2026.",
    category: "museum",
    image: "cascadia-dancers-singers.jpg",
  },

  // ── OUT OF STATE ──
  {
    id: "dallas",
    title: "Exuberance",
    location: "Office building, 7557 Rambler Road",
    city: "Dallas, TX",
    lat: 32.870000,
    lng: -96.803000,
    date: "",
    medium: "Bronze, 11 feet",
    description:
      "Two life-size (11-foot) bronze figures titled Exuberance for a commercial office building in Dallas — DuPen's only documented work in Texas.",
    category: "corporate",
    image: "dallas-bronze-figures.jpg",
  },
  {
    id: "vancouver",
    title: "Welded Bronze Screen",
    location: "Georgia Hotel (Rosewood Hotel Georgia)",
    city: "Vancouver, BC, Canada",
    lat: 49.283700,
    lng: -123.118500,
    date: "",
    medium: "Welded bronze, 3' × 7'",
    description:
      "A welded bronze screen at the Georgia Hotel in downtown Vancouver — DuPen's only documented international commission.",
    category: "corporate",
  },
];

export const CATEGORIES = {
  landmark: { label: "Major Public Works", color: "#4F6B5E" },
  campus: { label: "University of Washington", color: "#4B2E83" },
  church: { label: "Religious Commissions", color: "#6E4E2B" },
  civic: { label: "Civic & Libraries", color: "#5B5345" },
  corporate: { label: "Corporate & Commercial", color: "#292419" },
  museum: { label: "Museum Collections", color: "#C9A36B" },
} as const;

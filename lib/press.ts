export interface PressItem {
  date: string;
  outlet: string;
  title: string;
  url: string;
}

// Selected press. Add new entries at the top.
export const PRESS: PressItem[] = [
  {
    date: "2026",
    outlet: "Cascadia Art Museum",
    title: "Eternal Forms: The Sculpture of Everett DuPen",
    url: "https://www.cascadiaartmuseum.org/eternal-forms-the-sculpture-of-everett-dupen/",
  },
  {
    date: "Feb 2026",
    outlet: "My Edmonds News",
    title: "Art Beat: Cascadia announces Eternal Forms, a survey of Everett DuPen",
    url: "https://myedmondsnews.com/2026/02/art-beat-whale-tail-unveiled-gothard-sisters-return-asian-art-history-more/",
  },
  {
    date: "2026",
    outlet: "Explore Edmonds",
    title: "Come See the New Public Art in Edmonds",
    url: "https://www.exploreedmonds.com/thingstodo/come-see-the-new-public-art-in-edmonds",
  },
  {
    date: "2015",
    outlet: "Edmonds Beacon",
    title: "Museum Offers Variety, Quality with Northwest Exhibit",
    url: "https://www.edmondsbeacon.com/story/2015/09/10/opinion/museum-offers-variety-quality-with-northwest-exhibit-art-and-appetite/15050.html",
  },
];

// data/destinationsData.ts

let Dest1 = "resources/destinations-1-1.jpg";
let Dest2 = "resources/destinations-1-2.jpg";
let Dest3 = "resources/destinations-1-3.jpg";
let Dest4 = "resources/destinations-1-4.jpg";
let Shape1 = "shapes/des-1-1.png";

export interface Destination {
  id: number;
  image: string;
  title: string;
  tours: string;
  hotels: string;
  delay: string;
}

export interface SectionTitle {
  tagline: string;
  title: string;
  highlight: string;
  shape: string;
}

export const sectionTitle: SectionTitle = {
  tagline: "Popular Destination",
  title: "Popular",
  highlight: "Destinations",
  shape: Shape1,
};

export const destinationsData: Destination[] = [
  {
    id: 1,
    image: Dest1,
    title: "Matera, Italy",
    tours: "5 Tour+",
    hotels: "1 Hotel",
    delay: "100ms",
  },
  {
    id: 2,
    image: Dest2,
    title: "Ronda, Spain",
    tours: "5 Tour+",
    hotels: "1 Hotel",
    delay: "300ms",
  },
  {
    id: 3,
    image: Dest3,
    title: "Sintra, Portugal",
    tours: "5 Tour+",
    hotels: "1 Hotel",
    delay: "500ms",
  },
  {
    id: 4,
    image: Dest4,
    title: "Cesky, Krumlov",
    tours: "5 Tour+",
    hotels: "1 Hotel",
    delay: "700ms",
  },
];

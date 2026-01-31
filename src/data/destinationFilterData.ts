// src/data/destinationFilterData.ts

let image1 = "destination/destination-1-1.jpg";
let image2 = "destination/destination-1-2.jpg";
let image3 = "destination/destination-1-3.jpg";
let image4 = "destination/destination-1-4.jpg";
let plan = "shapes/plan.png";
let monjil = "shapes/monjil.png";

export interface DestinationItem {
  id: number;
  image: string;
  title: string;
  link: string;
}

export interface DestinationFilterData {
  subtitle: string;
  title: string;
  titleSpan: string;
  description: string;
  items: { [key: string]: DestinationItem[] };
  plan: string;
  monjil: string;
}

export const destinationFilterData: DestinationFilterData = {
  subtitle: "Popular Destinations",
  title: "Popular",
  titleSpan: "Destinations",
  description:
    "The island of Crete offers a rare mix of splendid beaches, amazing mountain landscapes, vibrant towns and cosy villages inhabited by warm-hearted locals.",
  items: {
    Europe: [
      { id: 1, image: image1, title: "Bangkok", link: "destination-details" },
      { id: 2, image: image2, title: "Tokyo", link: "destination-details" },
      { id: 3, image: image3, title: "Kashmir", link: "destination-details" },
      { id: 4, image: image4, title: "Indonesia", link: "destination-details" },
    ],
    Asia: [
      { id: 1, image: image1, title: "Bangkok", link: "destination-details" },
      { id: 2, image: image2, title: "Tokyo", link: "destination-details" },
      { id: 3, image: image3, title: "Kashmir", link: "destination-details" },
      { id: 4, image: image4, title: "Indonesia", link: "destination-details" },
    ],
    Africa: [
      { id: 1, image: image1, title: "Bangkok", link: "destination-details" },
      { id: 2, image: image2, title: "Tokyo", link: "destination-details" },
      { id: 3, image: image3, title: "Kashmir", link: "destination-details" },
      { id: 4, image: image4, title: "Indonesia", link: "destination-details" },
    ],
    SouthAmerica: [
      { id: 1, image: image1, title: "Bangkok", link: "destination-details" },
      { id: 2, image: image2, title: "Tokyo", link: "destination-details" },
      { id: 3, image: image3, title: "Kashmir", link: "destination-details" },
      { id: 4, image: image4, title: "Indonesia", link: "destination-details" },
    ],
    Australia: [
      { id: 1, image: image1, title: "Bangkok", link: "destination-details" },
      { id: 2, image: image2, title: "Tokyo", link: "destination-details" },
      { id: 3, image: image3, title: "Kashmir", link: "destination-details" },
      { id: 4, image: image4, title: "Indonesia", link: "destination-details" },
    ],
  },
  plan: plan,
  monjil: monjil,
};
//   export const destinationFilterData: DestinationFilterData = {
//     subtitle: "Popular Destinations",
//     title: "Popular",
//     titleSpan : "Destinations",
//     description:
//       "The island of Crete offers a rare mix of splendid beaches, amazing mountain landscapes, vibrant towns, and cozy villages inhabited by warm-hearted locals.",
//     plan: plan,
//     monjil: monjil,
//       items: [
//       {
//         id: 1,
//         image: image1,

//         title: "Bangkok",
//         link: "destination-details",
//       },
//       {
//         id: 2,
//         image: image2,

//         title: "Tokyo",
//         link: "destination-details",
//       },
//       {
//         id: 3,
//         image: image3,

//         title: "Kashmir",
//         link: "destination-details",
//       },
//       {
//         id: 4,
//         image: image4,

//         title: "Indonesia",
//         link: "destination-details",
//       },
//     ],
//   };

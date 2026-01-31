// data.ts
import bgImage from "@/assets/images/backgrounds/testi-3-1.png";
let thumb = "resources/testi--3-1.png";

import testi2 from "@/assets/images/resources/testimonials-2-1.png";
import testi3 from "@/assets/images/resources/testimonials-2-2.png";

export interface Testimonial {
  id: number;
  authorName: string;
  authorDesc: string;
  authorImage: string;
  text: string;
  rating: number;
}
export interface TestimonialsThreeData {
  bgImage: string;
  thumb: string;
  cards: Testimonial[];
}
export const testimonialsThreeData = {
  bgImage: bgImage,
  thumb: thumb,

  cards: [
    {
      id: 1,
      authorName: "Courtney Henry",
      authorDesc: "Marketing Coordinator",
      authorImage: testi2,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      rating: 5,
    },
    {
      id: 2,
      authorName: "Jacob Jones",
      authorDesc: "Web Designer",
      authorImage: testi3,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      rating: 5,
    },
    {
      id: 3,
      authorName: "Courtney Henry",
      authorDesc: "Marketing Coordinator",
      authorImage: testi2,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      rating: 5,
    },
    {
      id: 4,
      authorName: "Jacob Jones",
      authorDesc: "Web Designer",
      authorImage: testi3,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      rating: 5,
    },
  ],
};

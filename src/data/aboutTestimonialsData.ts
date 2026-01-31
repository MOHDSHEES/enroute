let testiImage1 = "custom/about-test.webp";
import aboutAuthorImage from "@/assets/images/resources/about-author-1-1.jpg";
let shapeImage1 = "shapes/testi-1-3.png";
let shapeImage2 = "custom/element-1.webp";

let brand1 = "brand/brand-1-1.png";
let brandHover1 = "brand/brand-hover-1-1.png";

export const aboutTestimonialsData = {
  sectionTitle: "Latest Client Feedback",
  sectionTagline: "testimonial",
  testiThumb: testiImage1,
  testimonials: [
    {
      image: aboutAuthorImage,
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      authorName: "Ronald Richards",
      position: "Co, Founder",
    },
    {
      image: aboutAuthorImage,
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      authorName: "Ronald Richards",
      position: "Co, Founder",
    },
    {
      image: aboutAuthorImage,
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      authorName: "Ronald Richards",
      position: "Co, Founder",
    },
  ],
  shapeImages: [shapeImage1, shapeImage2],
  brands: [
    { image: brand1, hoverImage: brandHover1 },
    { image: brand1, hoverImage: brandHover1 },
    { image: brand1, hoverImage: brandHover1 },
    { image: brand1, hoverImage: brandHover1 },
    { image: brand1, hoverImage: brandHover1 },
    { image: brand1, hoverImage: brandHover1 },
  ],
};

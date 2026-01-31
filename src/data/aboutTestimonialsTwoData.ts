// data/testimonialsData.ts

// Image imports
import buttonBg from "@/assets/images/backgrounds/button-bg.png";
import authorImage1 from "@/assets/images/resources/about-author-1-1.jpg";
import authorImage2 from "@/assets/images/resources/about-author-1-1.jpg";
let elementImage = "shapes/des-1-1.png";
let thumb = "resources/testi-2-1.png";
let thumbShape = "shapes/portal-1-3.png";
let thumbShapeOne = "shapes/portal-1-1.png";
let thumbShapeTwo = "shapes/portal-1-2.png";
let thumbShapeThree = "shapes/portal.png";

// Exporting the data object
export const aboutTestimonialsTwoData = {
  tagline: "testimonial",
  title: "Latest client",
  titleSpan: "feedback",
  thumb: thumb,
  thumbShape: thumbShape,
  thumbShapeOne: thumbShapeOne,
  thumbShapeTwo: thumbShapeTwo,
  thumbShapeThree: thumbShapeThree,
  buttonBg: buttonBg,
  testimonials: [
    {
      name: "Ronald Richards",
      role: "Co, Founder",
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget quam quis turpis lacinia euismod cursus in arcu. Integer a purus dolor. Pellentesque finibus ut erat in sagittis. Sed semper ",
      image: authorImage1,
    },
    {
      name: "John Doe",
      role: "CEO, Example Corp",
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget quam quis turpis lacinia euismod cursus in arcu. Integer a purus dolor. Pellentesque finibus ut erat in sagittis. Sed semper ",
      image: authorImage2,
    },
  ],
  elementImage: elementImage,
};

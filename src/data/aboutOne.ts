// data.ts
// let aboutImg1 = "about/about-1-1.jpg";
let aboutImg1 = "custom/about-1.webp";
let aboutImg2 = "custom/about-2.webp";
let aboutImg3 = "shapes/about-1-3.png";
let aboutShape1 = "shapes/about-1-1.png";
let aboutShape2 = "shapes/about-1-2.png";

export const aboutOneData = {
  title: "Travel place for Your & your Family",
  subtitle: "About Enroute",
  description:
    "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.",
  features: [
    {
      icon: "icon-check-star",
      text: "Easy & Quick Booking",
    },
    {
      icon: "icon-check-star",
      text: "Best Price Guarantee",
    },
  ],
  mission: {
    icon: "icon-misstion",
    title: "Mission & Vision",
    text: "Ut vehiculadictumst. Maecenas ante.",
  },
  button: {
    text: "Discover More",
    link: "/about",
    callIcon: "icon-telephone",
    callText: "Call Us Now",
    phone: "+91 9711010190",
  },
  images: {
    mainImage: aboutImg1,
    smallImage: aboutImg2,
    popupImage: aboutImg3,
    shape1: aboutShape1,
    shape2: aboutShape2,
  },
};

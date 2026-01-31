// import corkiImage from "@/assets/images/shapes/corki.png";
// import listImage from "@/assets/images/shapes/list-4-1.png";
import itemImage1_1 from "@/assets/images/resources/item-1-1.jpg";
import itemImage2_1 from "@/assets/images/resources/item-1-2.jpg";
import itemImage3_1 from "@/assets/images/resources/item-1-3.jpg";
import itemImage4_1 from "@/assets/images/resources/item-1-4.jpg";
import itemImage5_1 from "@/assets/images/resources/item-1-5.jpg";
import itemImage6_1 from "@/assets/images/resources/item-1-6.jpg";
let corkiImage = "shapes/corki.png";
let listImage = "shapes/list-4-1.png";
let itemImage1 = "resources/item-1-1.jpg";
let itemImage2 = "resources/item-1-2.jpg";
let itemImage3 = "resources/item-1-3.jpg";
let itemImage4 = "resources/item-1-4.jpg";
let itemImage5 = "resources/item-1-5.jpg";
let itemImage6 = "resources/item-1-6.jpg";

export const tourListingPageData = {
  sectionTitle: "New Listings in Our Tour",
  sectionTagline: "Popular Tours List",
  filterOptions: {
    locations: [
      "Locations",
      "Spain",
      "Canada",
      "Africa",
      "Europe",
      "Thailand",
      "Dubai",
      "Australia",
      "Switzerland",
    ],
    hotelTypes: [
      "Hotel Type",
      "Bedrooms 1",
      "Bedrooms 2",
      "Bedrooms 3",
      "Bedrooms 4",
      "Bedrooms 5",
    ],
    tourBudgets: [
      "Tour Budget",
      "$300",
      "$500",
      "$1000",
      "$1500",
      "$2000",
      "$3000",
    ],
    activities: ["Activates Type", "2", "3", "4", "6", "7", "9"],
    hotelTypes2: [
      "Hotel Type",
      "Bedrooms 1",
      "Bedrooms 2",
      "Bedrooms 3",
      "Bedrooms 4",
      "Bedrooms 5",
    ],
    reviews: ["Reviews", "Spain", "Canada"],
    prices: [
      "Filter Price",
      "$300",
      "$500",
      "$1000",
      "$1500",
      "$2000",
      "$3000",
    ],
  },
  tours: [
    {
      image: itemImage1,
      hoverImage: itemImage1_1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      location: "Europe",
      duration: "6 Days, 3 Night",
      price: "$59.00",
      discount: "-30% Off",
      videoId: "0MuL8fd3pb8",
    },
    {
      image: itemImage2,
      hoverImage: itemImage2_1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      location: "Europe",
      duration: "6 Days, 3 Night",
      price: "$39.00",
      discount: "-30% Off",
      videoId: "0MuL8fd3pb8",
      featured: true,
    },
    {
      image: itemImage3,
      hoverImage: itemImage3_1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      location: "Europe",
      duration: "6 Days, 3 Night",
      price: "$49.00",
      discount: "-30% Off",
      videoId: "0MuL8fd3pb8",
    },
    {
      image: itemImage4,
      hoverImage: itemImage4_1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      location: "Europe",
      duration: "6 Days, 3 Night",
      price: "$29.00",
      discount: "-30% Off",
      videoId: "0MuL8fd3pb8",
      featured: true,
    },
    {
      image: itemImage5,
      hoverImage: itemImage5_1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      location: "Europe",
      duration: "6 Days, 3 Night",
      price: "$69.00",
      videoId: "0MuL8fd3pb8",
      featured: true,
    },
    {
      image: itemImage6,
      hoverImage: itemImage6_1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      location: "Europe",
      duration: "6 Days, 3 Night",
      price: "$59.00",
      discount: "-30% Off",
      videoId: "0MuL8fd3pb8",
    },
  ],
  images: {
    corkiImage,
    listImage,
  },
};

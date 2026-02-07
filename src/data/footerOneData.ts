let logo = "logo-light.webp";
let cardImage = "shapes/footer-card-1-1.png";
let shape1 = "shapes/footer-shape-1-1.png";
let shape2 = "shapes/footer-shape-1-2.png";

export interface FooterDataType {
  logo: string;
  cardImage: string;
  shape1: string;
  shape2: string;
  contact: {
    email: string;
    phone: string;
    hours: string;
  };
  about: {
    text: string;
    socials: {
      icon: string;
      link: string;
      label: string;
    }[];
  };
  destinations: {
    title: string;
    href: string;
  }[];
  usefulLinks: {
    title: string;
    href: string;
  }[];
  newsletter: {
    text: string;
    privacyLink: string;
  };
}

export const footerOneData: FooterDataType = {
  logo,
  cardImage,
  shape1,
  shape2,
  contact: {
    email: "enroutetrips04@gmail.com",
    phone: "+91 123 654 900",
    hours: "Hours: Mon-Fri: 8am – 7pm",
  },
  about: {
    text: "available, but the majority have suffered alteration in some form by injected humour, or",
    socials: [
      {
        icon: "icon-facebook",
        link: "https://facebook.com",
        label: "Facebook",
      },
      { icon: "fab fa-twitter", link: "https://twitter.com", label: "Twitter" },
      {
        icon: "fab fa-instagram",
        link: "https://instagram.com",
        label: "Instagram",
      },
      { icon: "icon-youtube", link: "https://youtube.com", label: "Youtube" },
    ],
  },
  destinations: [
    { title: "South America", href: "/destination-details/south-america" },
    { title: "Middle East", href: "/destination-details/middle-east" },
    { title: "San Franc Rica", href: "/destination-details/san-franc-rica" },
    { title: "New York", href: "/destination-details/new-york" },
    { title: "Tokyo", href: "/destination-details/tokyo" },
  ],
  usefulLinks: [
    { title: "About Us", href: "/about" },
    // { title: "Destination", href: "/destination-one" },
    // { title: "News & blog", href: "/blog-grid" },
    // { title: "Meet the Guide", href: "/team" },
    { title: "Contacts", href: "/contact" },
    { title: "Privacy Policy", href: "/" },
    { title: "Terms and Condition", href: "/" },
  ],
  newsletter: {
    text: "Sign up to searing weekly newsletter to get the latest updates.",
    privacyLink: "/faq",
  },
};

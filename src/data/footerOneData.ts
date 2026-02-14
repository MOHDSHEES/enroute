let logo = "logo-light.png";
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
    phone: "+91 9711010190",
    hours: "Hours: Open Daily: 10am – 10pm",
  },
  about: {
    text: "At Enroute Trips, we believe travel is more than just visiting places - it’s about collecting moments, building connections, and discovering new sides of yourself.",
    socials: [
      {
        icon: "icon-facebook",
        link: "https://www.facebook.com/share/183X9hh6ag/?mibextid=wwXIfr",
        label: "Facebook",
      },
      // { icon: "fab fa-twitter", link: "https://twitter.com", label: "Twitter" },
      {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/enroute_tripss?igsh=bjEzNmtpMDk3Z2wy&utm_source=qr",
        label: "Instagram",
      },
      // { icon: "icon-youtube", link: "https://youtube.com", label: "Youtube" },
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

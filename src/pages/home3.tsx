import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout/Layout/Layout";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";

import HeaderOne from "@/components/layout/HeaderOne/HeaderOne";
import HeaderOneCloned from "@/components/layout/HeaderOneCloned/HeaderOneCloned";
import AboutOne from "@/components/sections/AboutOne/AboutOne";
// import DestinationsTwoTwo from "@/components/sections/DestinationsTwoTwo/DestinationsTwoTwo";
// import FeatureTwo from "@/components/sections/FeatureTwo/FeatureTwo";
import MainSliderThree from "@/components/sections/MainSliderThree/MainSliderThree";
import OfferTwo from "@/components/sections/OfferTwo/OfferTwo";
import OfferOne from "@/components/sections/OfferOne/OfferOne";
import TestimonialsTwo from "@/components/sections/TestimonialsTwo/TestimonialsTwo";
import InstagramOne from "@/components/sections/InstagramOne/InstagramOne";
// import DestinationCarouselTwo from "@/components/sections/DestinationCarouselTwo/DestinationCarouselTwo";
import BlogTwoTwo from "@/components/sections/BlogTwoTwo/BlogTwoTwo";
import ThemeProvider from "@/provider/ThemeProvider";

const HomeThreePage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Layout>
        <TopbarOne />
        <HeaderOne />
        <HeaderOneCloned />
        <MainSliderThree />
        <AboutOne />
        {/* <DestinationsTwoTwo /> */}
        {/* <FeatureTwo extraClass="section-space" id="popular" homeThree={true} /> */}
        <OfferTwo />
        <OfferOne homeThree={true} />
        {/* <DestinationCarouselTwo /> */}
        <TestimonialsTwo />
        <InstagramOne />

        <BlogTwoTwo />
        <FooterOne />
      </Layout>
    </ThemeProvider>
  );
};

export default HomeThreePage;

export const Head: HeadFC = () => (
  <title>Home Three || Gotur || Travel & Tour GatsbyJS Template</title>
);

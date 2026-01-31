import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout/Layout/Layout";
import HeaderFour from "@/components/layout/HeaderFour/HeaderFour";
import HeaderFourCloned from "@/components/layout/HeaderFourCloned/HeaderFourCloned";
import MainSliderFour from "@/components/sections/MainSliderFour/MainSliderFour";
import AboutFiveTwo from "@/components/sections/AboutFiveTwo/AboutFiveTwo";
import DestinationsTwo from "@/components/sections/DestinationsTwo/DestinationsTwo";
import CtaFour from "@/components/sections/CtaFour/CtaFour";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import AboutTestimonials from "@/components/sections/AboutTestimonials/AboutTestimonials";
import BlogThree from "@/components/sections/BlogThree/BlogThree";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import TourListingPage from "@/components/sections/TourListingPage/TourListingPage";
import ThemeProvider from "@/provider/ThemeProvider";

const HomeFourPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Layout>
        <HeaderFour />
        <HeaderFourCloned />
        <MainSliderFour />
        <TourListingPage />
        <AboutFiveTwo />
        <DestinationsTwo />
        <CtaFour />
        <HowItWorks />
        <AboutTestimonials />
        <BlogThree />
        <FooterOne />
      </Layout>
    </ThemeProvider>
  );
};

export default HomeFourPage;

export const Head: HeadFC = () => (
  <title>Home Three || Gotur || Travel & Tour GatsbyJS Template</title>
);

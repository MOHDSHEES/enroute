import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout/Layout/Layout";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import MainSliderTwo from "@/components/sections/MainSliderTwo/MainSliderTwo";
import PopularDestinations from "@/components/sections/PopularDestination/PopularDestination";
import AboutFive from "@/components/sections/AboutFive/AboutFive";
import FeatureOne from "@/components/sections/FeatureOne/FeatureOne";
import CtaTwo from "@/components/sections/CtaTwo/CtaTwo";
import ClientCarousel from "@/components/sections/ClientCarousel/ClientCarousel";
import CtaThree from "@/components/sections/CtaThree/CtaThree";
import BlogTwo from "@/components/sections/BlogTwo/BlogTwo";
import DestinationThree from "@/components/sections/DestinationsThree/DestinationThree";
import AboutTestimonialsTwo from "@/components/sections/AboutTestimonialsTwo/AboutTestimonialsTwo";
import { ThemeProvider } from "react-bootstrap";
import HeaderTwoSingle from "@/components/layout/HeaderTwo/HeaderTwoSingle";
import HeaderTwoSingleCloned from "@/components/layout/HeaderTwoCloned/HeaderTwoSingleCloned";

const HomeTwoPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Layout>
        <TopbarOne />
        <HeaderTwoSingle />
        <HeaderTwoSingleCloned />
        <MainSliderTwo />
        <PopularDestinations />
        <AboutFive />
        <FeatureOne />
        <CtaTwo />
        <ClientCarousel extraClass='client-carousel--two' />
        <DestinationThree />
        <AboutTestimonialsTwo />
        <CtaThree />
        <BlogTwo />
        <FooterOne />
      </Layout>
    </ThemeProvider>
  );
};

export default HomeTwoPage;

export const Head: HeadFC = () => (
  <title>Home Two || Gotur || Travel & Tour GatsbyJS Template</title>
);

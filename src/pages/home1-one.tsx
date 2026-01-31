import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout/Layout/Layout";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import AboutTwo from "@/components/sections/AboutTwo/AboutTwo";
import DestinationFilter from "@/components/sections/DestinationFilter/DestinationFilter";
import CTAFive from "@/components/sections/CtaFive/CtaFive";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import FeatureTwo from "@/components/sections/FeatureTwo/FeatureTwo";
import WhyChooseOne from "@/components/sections/WhyChooseOne/WhyChooseOne";
import TestimonialsThree from "@/components/sections/TestimonialsThree/TestimonialsThree";
import BlogFive from "@/components/sections/BlogFive/BlogFive";
import InstagramOne from "@/components/sections/InstagramOne/InstagramOne";
import MainSliderOne from "@/components/sections/MainSliderOne/MainSliderOne";
import ThemeProvider from "@/provider/ThemeProvider";
import HeaderOneSingle from "@/components/layout/HeaderOne/HeaderOneSingle";
import HeaderOneSingleCloned from "@/components/layout/HeaderOneCloned/HeaderOneSingleCloned";
import OfferOne from "@/components/sections/OfferOne/OfferOne";

const HomeOnePage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Layout>
        <TopbarOne extraClass='top-one--two' />
        <HeaderOneSingle />
        <HeaderOneSingleCloned />
        <MainSliderOne />
        <AboutTwo cta={true} extraClass='about-two--two' />
        <DestinationFilter />
        <CTAFive />
        <FeatureTwo />
        <OfferOne />
        <WhyChooseOne />
        <TestimonialsThree />
        <BlogFive />
        <InstagramOne extraClass='instagram-one--two' />
        <FooterOne />
      </Layout>
    </ThemeProvider>
  );
};

export default HomeOnePage;

export const Head: HeadFC = () => (
  <title>Home One || Gotur || Travel & Tour GatsbyJS Template</title>
);

import * as React from "react";
// import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout/Layout/Layout";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
// import InstagramOne from "@/components/sections/InstagramOne/InstagramOne";
import ThemeProvider from "@/provider/ThemeProvider";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import CtaTwo from "@/components/sections/CtaTwo/CtaTwo";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import AboutTestimonials from "@/components/sections/AboutTestimonials/AboutTestimonials";
import AboutOne from "@/components/sections/AboutOne/AboutOne";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import About from "../components/about";
const AboutPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <TopbarOne />
        <HeaderInner />
        <HeaderInnerCloned />
        <PageHeader
          title="About Us"
          subTitle="About Us"
          img="https://res.cloudinary.com/dtn5i5hpt/image/upload/v1769851845/destination-slider-1-6-_otn5vs.webp"
        />
        <About />
        <AboutOne />
        <CtaTwo />
        <HowItWorks />
        <AboutTestimonials />
        {/* <InstagramOne /> */}
        <FooterOne />
      </Layout>
    </ThemeProvider>
  );
};

export default AboutPage;

export const Head = () => (
  <title>About || Gotur || Travel & Tour GatsbyJS Template</title>
);

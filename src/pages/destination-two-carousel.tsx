import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import DestinationTwoCarousel from "@/components/sections/DestinationTwoCarousel/DestinationTwoCarousel";



const DestinationTwoPage: React.FC<PageProps> =()=> {
  return (
    <Layout>
    <TopbarOne />
    <HeaderInner />
    <HeaderInnerCloned/>
    <PageHeader title='Destination Carousel' subTitle='Destination 02' />
    <DestinationTwoCarousel />
    <FooterOne />
  </Layout>
  );
}
export default DestinationTwoPage;

export const Head: HeadFC = () => (
    <title>Destination Two Carousel || Gotur || Travel & Tour GatsbyJS Template</title>
  );
  
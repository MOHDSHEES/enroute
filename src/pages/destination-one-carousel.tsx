import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import DestinationOneLeft from "@/components/sections/DestinationOneLeft/DestinationOneLeft";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import DestinationOneCarousel from "@/components/sections/DestinationsOneCarousel/DestinationOneCarousel";



const DestinationOnePage: React.FC<PageProps> =()=> {
  return (
    <Layout>
    <TopbarOne />
    <HeaderInner />
    <HeaderInnerCloned/>
    <PageHeader title='Destination Carousel' subTitle='Destination 01' />
    <DestinationOneCarousel />
    <FooterOne />
  </Layout>
  );
}
export default DestinationOnePage;

export const Head: HeadFC = () => (
    <title>Destination One Carousel || Gotur || Travel & Tour GatsbyJS Template</title>
  );
  
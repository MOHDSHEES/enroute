import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import AboutTwo from "@/components/sections/AboutTwo/AboutTwo";
import DestinationOne from "@/components/sections/DestinationOne/DestinationOne";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";



const DestinationOnePage: React.FC<PageProps> =()=> {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title="Destination 01" subTitle="Destination 01" />
      <DestinationOne />
      <AboutTwo cta={false} extraClass="about-two--one" />
      <FooterOne />
    </Layout>
  );
}
export default DestinationOnePage;

export const Head: HeadFC = () => (
    <title>Destination One || Gotur || Travel & Tour GatsbyJS Template</title>
  );
  
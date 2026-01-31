import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import Gallery from "@/components/sections/Gallery/Gallery";
const GalleryPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Our Gallery' subTitle='Our Gallery' />
      <Gallery />
      <FooterOne />
    </Layout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => (
  <title>Our Gallery || Gotur || Travel & Tour GatsbyJS Template</title>
);

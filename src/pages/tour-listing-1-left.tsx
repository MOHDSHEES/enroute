import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import TourListingOneLeft from "@/components/sections/TourListingOneLeft/TourListingOneLeft";

const TourPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Tour Listing' subTitle='Tour Listing' />
      <TourListingOneLeft />

      <FooterOne />
    </Layout>
  );
};

export default TourPage;

export const Head: HeadFC = () => (
  <title>Tour Listing || Gotur || Travel & Tour GatsbyJS Template</title>
);

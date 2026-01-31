import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import TourListing from "@/components/sections/TourListing/TourListing";
import AboutOne from "@/components/sections/AboutOne/AboutOne";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import TourListingList from "@/components/sections/TourListingList/TourListingList";
import TourListingOneDetails from "@/components/sections/TourListingDetailsOne/TourListingDetailsOne";

const TourPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader
        title="Tour Listing Details 01"
        subTitle="
Tour Listing Details 01"
      />
      <TourListingOneDetails />

      <FooterOne />
    </Layout>
  );
};

export default TourPage;

export const Head: HeadFC = () => <title>Tour Listing || Gotur || Travel & Tour GatsbyJS Template</title>;

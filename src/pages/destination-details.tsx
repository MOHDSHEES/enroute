import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import DestinationDetails from "@/components/sections/DestinationDetails/DestinationDetails";



const DestinationPage: React.FC<PageProps> =()=> {
  return (
    <Layout>
    <TopbarOne />
    <HeaderInner />
    <HeaderInnerCloned/>
    <PageHeader title='Destination Detrails' subTitle='Destination 01' />
    <DestinationDetails />
    <FooterOne />
  </Layout>
  );
}
export default DestinationPage;

export const Head: HeadFC = () => (
    <title>Destination Detrails || Gotur || Travel & Tour GatsbyJS Template</title>
  );
  
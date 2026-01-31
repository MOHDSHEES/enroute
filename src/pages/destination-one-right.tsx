import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import DestinationOneRight from "@/components/sections/DestinationOneRight/DestinationOneRight";



const DestinationOnePage: React.FC<PageProps> =()=> {
  return (
    <Layout>
    <TopbarOne />
    <HeaderInner />
    <HeaderInnerCloned/>
    <PageHeader title='Destination Left' subTitle='Destination 01' />
    <DestinationOneRight />
    <FooterOne />
  </Layout>
  );
}
export default DestinationOnePage;

export const Head: HeadFC = () => (
    <title>Destination One Left || Gotur || Travel & Tour GatsbyJS Template</title>
  );
  
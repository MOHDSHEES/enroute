import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import PricingOne from "@/components/sections/PricingOne/PricingOne";

const PricingPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Pricing Plan' subTitle='Pricing Plan' />
      <PricingOne />

      <FooterOne />
    </Layout>
  );
};

export default PricingPage;

export const Head: HeadFC = () => <title>Pricing Plan || Gotur || Travel & Tour GatsbyJS Template</title>;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import CheckoutSection from "@/components/sections/CheckoutSection/CheckoutSection";
const CheckoutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='checkout' subTitle='Shop' />
      <CheckoutSection />
      <FooterOne />
    </Layout>
  );
};

export default CheckoutPage;

export const Head: HeadFC = () => <title>Checkout || Gotur || Travel & Tour GatsbyJS Template</title>;

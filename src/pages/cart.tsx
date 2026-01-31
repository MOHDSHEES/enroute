import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import CartSection from "@/components/sections/CartSection/CartSection";
const CartPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Cart' subTitle='Shop' />
      <CartSection />
      <FooterOne />
    </Layout>
  );
};

export default CartPage;

export const Head: HeadFC = () => <title>Cart || Gotur || Travel & Tour GatsbyJS Template</title>;

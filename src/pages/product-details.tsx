import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import ProductDetails from "@/components/sections/ProductsDetails/ProductsDetails";

const ProductPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Products Details' subTitle='Shop' />
      <ProductDetails/>

      <FooterOne />
    </Layout>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>Product Details || Gotur || Travel & Tour GatsbyJS Template</title>;

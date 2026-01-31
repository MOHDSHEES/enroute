import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import ProductDetails from "@/components/sections/ProductsDetails/ProductsDetails";
import Products from "@/components/sections/Products/Products";
import ProductLeft from "@/components/sections/ProductaLeft/ProductsLeft";

const ProductPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Our Shop' subTitle='Shop' />
      <ProductLeft/>

      <FooterOne />
    </Layout>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>Products Left Sidebar || Gotur || Travel & Tour GatsbyJS Template</title>;

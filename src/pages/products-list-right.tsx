import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import ProductsListRight from "@/components/sections/ProductsListRight/ProductsListRight";

const ProductPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Shop Right sidebar' subTitle='Shop' />
      <ProductsListRight/>

      <FooterOne />
    </Layout>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>Products List || Gotur || Travel & Tour GatsbyJS Template</title>;

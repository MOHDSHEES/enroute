import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import PricingOne from "@/components/sections/PricingOne/PricingOne";
import ContactTop from "@/components/sections/ContactTop/ContactTop";
import ContactPage from "@/components/sections/ContactPage/ContactPage";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Contact us' subTitle='Contact us' />
      <ContactTop />
      <ContactPage />
      <FooterOne />
    </Layout>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Contact || Gotur || Travel & Tour GatsbyJS Template</title>;

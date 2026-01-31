import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import TestimonialsPage from "@/components/sections/TestimonialsPage/TestimonialsPage";

const TourPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Testimonials' subTitle='Testimonials' />
      <TestimonialsPage />

      <FooterOne />
    </Layout>
  );
};

export default TourPage;

export const Head: HeadFC = () => <title>Testimonials || Gotur || Travel & Tour GatsbyJS Template</title>;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import BlogGrid from "@/components/sections/BlogGrid/BlogGrid";
import BlogLeft from "@/components/sections/BlogLeft/BlogLeft";
const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned/>
      <PageHeader title='Blog Grid Left Sidebar' subTitle='Blog Grid' />
      <BlogLeft />
      <FooterOne />
    </Layout>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blog Grid || Gotur || Travel & Tour GatsbyJS Template</title>;

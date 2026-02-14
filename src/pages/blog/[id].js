import * as React from "react";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import BlogDetails from "@/components/sections/BlogDetails/BlogDetails";
import { blogDetails } from "@/data/blogDetailsData";

const BlogPage = ({ params }) => {
  const { id } = params;
  console.log(id);

  // 1. Filter by ID (More reliable than name)
  // Ensure the ID type matches (e.g., convert string to number if needed)
  const currentBlog = blogDetails.find((blog) => blog.id.toString() === id);
  console.log(currentBlog);

  if (!currentBlog) {
    return (
      <Layout>
        <PageHeader title="Post Not Found" subTitle="Error" />
        <div className="container text-center section-space">
          <h2>Blog with ID {id} not found.</h2>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader
        title={currentBlog.slug}
        subTitle={currentBlog.category}
        img={currentBlog.banner_img}
      />
      <BlogDetails blogData={currentBlog} />
      <FooterOne />
    </Layout>
  );
};

export default BlogPage;

export const Head = () => (
  <title>Blog Details || Gotur || Travel & Tour GatsbyJS Template</title>
);

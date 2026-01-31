// import * as React from "react";
import React from "react";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
// import TourListingTwoDetails from "@/components/sections/TourListingDetailsTwo/TourListingDetailsTwo";
import { supabase } from "@/lib/supabase"; // Ensure you have your supabase client exported here
import CategoryDetailSection from "@/components/sections/category/categoryDetail";

const CategoryDetail = ({ serverData }) => {
  const { category, trips, error } = serverData;
  // Handle case where category ID doesn't exist in DB
  if (error || !category) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <h2 className="text-2xl font-bold">Category not found</h2>
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
        title={category.name}
        subTitle={category.name || "category Details"}
        img={category?.image_url}
      />
      <CategoryDetailSection category={category} trips={trips} />
      {/* <AboutOne extraclass="about-one--one" /> */}
      <FooterOne />
    </Layout>
  );
};

export default CategoryDetail;

// This function runs on the server for every request
export async function getServerData(context) {
  try {
    const { id } = context.params;
    // console.log(id);

    const { data, error } = await supabase
      .from("categories") // Your table name
      .select("*")
      .eq("is_active", "true")
      .eq("id", id)
      .single();

    if (error) throw error;
    // console.log(data);
    const { data: trips } = await supabase
      .from("trips") // Your table name
      .select("*")
      .eq("is_active", "true")
      .eq("category_id", data?.id);
    return {
      props: {
        category: data,
        trips: trips,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      status: 404, // Return 404 if the tour isn't found
      props: {
        category: null,
        trips: [],
        error: error.message,
      },
    };
  }
}

export const Head = ({ serverData }) => {
  const title = serverData?.category?.name || "Category Details";
  return <title>{`${title} || Gotur || Travel & Tour`}</title>;
};

// import * as React from "react";
import React from "react";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import TourListingTwoDetails from "@/components/sections/TourListingDetailsTwo/TourListingDetailsTwo";
import { supabase } from "@/lib/supabase"; // Ensure you have your supabase client exported here

const TourDetail = ({ serverData }) => {
  const { tour, error } = serverData;
  // Handle case where tour ID doesn't exist in DB
  if (error || !tour) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <h2 className="text-2xl font-bold">Tour not found</h2>
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
        title={tour.name}
        subTitle={tour.category || "Tour Details"}
        img={tour?.banner_url}
      />

      {/* Pass the tour data into your section component */}
      <TourListingTwoDetails tourData={tour} />

      <FooterOne />
    </Layout>
  );
};

export default TourDetail;

// This function runs on the server for every request
export async function getServerData(context) {
  try {
    // Get the ID from the URL parameter (e.g., /tour/123)
    const { id } = context.params;
    // console.log(id);

    const { data, error } = await supabase
      .from("trips") // Your table name
      .select(
        `
        *,
        categories (
        name
      ),
        itineraries (*),
        trip_costing (*),
        trip_dates (*),
        trip_gallery(id,image_url)
      `
      )
      .eq("id", id)
      .single();

    if (error) throw error;
    // console.log(data);

    return {
      props: {
        tour: data,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      status: 404, // Return 404 if the tour isn't found
      props: {
        tour: null,
        error: error.message,
      },
    };
  }
}

export const Head = ({ serverData }) => {
  const title = serverData?.tour?.name || "Tour Details";
  return <title>{`${title} || Gotur || Travel & Tour`}</title>;
};

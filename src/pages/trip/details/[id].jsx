// import React, { useState, useEffect } from "react";
// import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
// import FooterOne from "@/components/layout/FooterOne/FooterOne";
// import Layout from "@/components/layout/Layout/Layout";
// import PageHeader from "@/components/sections/PageHeader/PageHeader";
// import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
// import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
// import TourListingTwoDetails from "@/components/sections/TourListingDetailsTwo/TourListingDetailsTwo";
// import { supabase } from "@/lib/supabase";

// const TourDetail = ({ params }) => {
//   const [tour, setTour] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Gatsby passes URL parameters to the 'params' prop in dynamic routes
//   const id = params.id || params["*"];

//   useEffect(() => {
//     const fetchTourData = async () => {
//       if (!id) return;

//       try {
//         setLoading(true);
//         const { data, error: supabaseError } = await supabase
//           .from("trips")
//           .select(
//             `
//             *,
//             categories (name),
//             itineraries (*),
//             trip_costing (*),
//             trip_dates (*),
//             trip_gallery(id, image_url)
//           `
//           )
//           .eq("id", id)
//           .single();

//         if (supabaseError) throw supabaseError;
//         setTour(data);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTourData();
//   }, [id]);

//   if (loading) {
//     return (
//       <Layout>
//         <div className="min-h-[50vh] flex items-center justify-center">
//           <p>Loading tour details...</p>
//         </div>
//       </Layout>
//     );
//   }

//   if (error || !tour) {
//     return (
//       <Layout>
//         <div className="min-h-[50vh] flex items-center justify-center">
//           <h2 className="text-2xl font-bold">Tour not found</h2>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <TopbarOne />
//       <HeaderInner />
//       <HeaderInnerCloned />
//       <PageHeader
//         title={tour.name}
//         subTitle={tour.categories?.name || "Tour Details"}
//         img={tour?.banner_url}
//       />

//       <TourListingTwoDetails tourData={tour} />

//       <FooterOne />
//     </Layout>
//   );
// };

// export default TourDetail;

// // ✅ getServerData REMOVED TO PREVENT VERCEL 500 ERRORS

// export const Head = () => <title>Tour Details || Enroute || Travel & Tour</title>;
import React, { useState, useEffect } from "react";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import TourListingTwoDetails from "@/components/sections/TourListingDetailsTwo/TourListingDetailsTwo";
import { supabase } from "@/lib/supabase";

const TourDetail = ({ params }) => {
  const [tour, setTour] = useState(null);
  const [relatedTrips, setRelatedTrips] = useState([]); // New state for related trips
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = params.id || params["*"];

  useEffect(() => {
    const fetchTourData = async () => {
      if (!id) return;

      try {
        setLoading(true);

        // 1. Fetch the main tour data
        const { data: tourData, error: supabaseError } = await supabase
          .from("trips")
          .select(
            `
            *,
            categories (id, name),
            itineraries (*),
            trip_costing (*),
            trip_dates (*),
            trip_gallery(id, image_url)
          `
          )
          .eq("id", id)
          .single();

        if (supabaseError) throw supabaseError;
        setTour(tourData);

        // 2. Fetch related trips (Same category, but not this trip)
        if (tourData?.category_id) {
          const { data: relatedData, error: relatedError } = await supabase
            .from("trips")
            .select(
              `
                id, 
                name, 
                starting_price, 
                thumbnail_url, 
                duration_days, 
                duration_nights,
                age_group
            `
            )
            .eq("category_id", tourData.category_id)
            .eq("is_active", true)
            .neq("id", id) // Don't show the current trip in related
            .limit(4);

          if (!relatedError) {
            setRelatedTrips(relatedData);
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTourData();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        {/* Using your custom preloader logic or a simple loading state */}
        <div
          style={{
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Loading tour details...</p>
        </div>
      </Layout>
    );
  }

  if (error || !tour) {
    return (
      <Layout>
        <div
          style={{
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        subTitle={tour.categories?.name || "Tour Details"}
        img={tour?.banner_url}
      />

      {/* Pass both tourData and relatedTrips to the child component */}
      <TourListingTwoDetails tourData={tour} relatedTrips={relatedTrips} />

      <FooterOne />
    </Layout>
  );
};

export default TourDetail;

export const Head = () => (
  <title>Tour Details || Enroute || Travel & Tour</title>
);
// // import * as React from "react";
// import React from "react";
// import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
// import FooterOne from "@/components/layout/FooterOne/FooterOne";
// import Layout from "@/components/layout/Layout/Layout";
// import PageHeader from "@/components/sections/PageHeader/PageHeader";
// import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
// import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
// import TourListingTwoDetails from "@/components/sections/TourListingDetailsTwo/TourListingDetailsTwo";
// import { supabase } from "@/lib/supabase"; // Ensure you have your supabase client exported here

// const TourDetail = ({ serverData }) => {
//   const { tour, error } = serverData;
//   // Handle case where tour ID doesn't exist in DB
//   if (error || !tour) {
//     return (
//       <Layout>
//         <div className="min-h-[50vh] flex items-center justify-center">
//           <h2 className="text-2xl font-bold">Tour not found</h2>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <TopbarOne />
//       <HeaderInner />
//       <HeaderInnerCloned />
//       <PageHeader
//         title={tour.name}
//         subTitle={tour.category || "Tour Details"}
//         img={tour?.banner_url}
//       />

//       {/* Pass the tour data into your section component */}
//       <TourListingTwoDetails tourData={tour} />

//       <FooterOne />
//     </Layout>
//   );
// };

// export default TourDetail;

// // This function runs on the server for every request
// export async function getServerData(context) {
//   try {
//     // Get the ID from the URL parameter (e.g., /tour/123)
//     const { id } = context.params;
//     // console.log(id);

//     const { data, error } = await supabase
//       .from("trips") // Your table name
//       .select(
//         `
//         *,
//         categories (
//         name
//       ),
//         itineraries (*),
//         trip_costing (*),
//         trip_dates (*),
//         trip_gallery(id,image_url)
//       `
//       )
//       .eq("id", id)
//       .single();

//     if (error) throw error;
//     // console.log(data);

//     return {
//       props: {
//         tour: data,
//       },
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       status: 404, // Return 404 if the tour isn't found
//       props: {
//         tour: null,
//         error: error.message,
//       },
//     };
//   }
// }

// export const Head = ({ serverData }) => {
//   const title = serverData?.tour?.name || "Tour Details";
//   return <title>{`${title} || Gotur || Travel & Tour`}</title>;
// };

// import React, { useState, useEffect } from "react";
// import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
// import FooterOne from "@/components/layout/FooterOne/FooterOne";
// import Layout from "@/components/layout/Layout/Layout";
// import PageHeader from "@/components/sections/PageHeader/PageHeader";
// import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
// import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
// import { supabase } from "@/lib/supabase";
// import CategoryDetailSection from "@/components/sections/category/categoryDetail";

// const CategoryDetail = ({ params }) => {
//   // 1. Local State
//   const [category, setCategory] = useState(null);
//   const [trips, setTrips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Use the ID from Gatsby's props (passed automatically to dynamic pages)
//   const id = params.id;
//   console.log("id,", id);

//   // 2. Data Fetching Hook
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       if (!id) return;

//       try {
//         setLoading(true);
//         // Fetch Category
//         const { data: catData, error: catError } = await supabase
//           .from("categories")
//           .select("*")
//           .eq("is_active", "true")
//           .eq("id", id)
//           .single();

//         if (catError) throw catError;
//         setCategory(catData);

//         // Fetch Related Trips
//         const { data: tripsData } = await supabase
//           .from("trips")
//           .select("*")
//           .eq("is_active", "true")
//           .eq("category_id", catData?.id);

//         setTrips(tripsData || []);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryData();
//   }, [id]);

//   // 3. Loading State
//   if (loading) {
//     return (
//       <Layout>
//         <div className="min-h-[50vh] flex items-center justify-center">
//           <p>Loading category...</p>
//         </div>
//       </Layout>
//     );
//   }

//   // 4. Error State
//   if (error || !category) {
//     return (
//       <Layout>
//         <div className="min-h-[50vh] flex items-center justify-center">
//           <h2 className="text-2xl font-bold">Category not found</h2>
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
//         title={category.name}
//         subTitle={category.name || "Category Details"}
//         img={category?.image_url}
//       />
//       <CategoryDetailSection category={category} trips={trips} />
//       <FooterOne />
//     </Layout>
//   );
// };

// export default CategoryDetail;

// // ✅ REMOVED getServerData COMPLETELY

// export const Head = ({ params }) => {
//   // Note: For Head, we can't easily use the async data without SSR,
//   // so we use a generic title or fetch it differently.
//   return <title>Category Details || Gotur || Travel & Tour</title>;
// };
import React, { useState, useEffect } from "react";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import { supabase } from "@/lib/supabase";
import CategoryDetailSection from "@/components/sections/category/categoryDetail";

const CategoryDetail = ({ params }) => {
  // 1. Local State
  const [category, setCategory] = useState(null);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Hydration Fix: Track if we are in the browser
  const [isClient, setIsClient] = useState(false);

  // Capture ID: Try params.id first, then fallback to the wildcard params['*']
  const routeId = params.id || params["*"];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 3. Data Fetching Hook
  useEffect(() => {
    // Only fetch if we are in the browser and have a valid ID
    if (!isClient || !routeId) return;

    const fetchCategoryData = async () => {
      try {
        setLoading(true);

        // Fetch Category
        const { data: catData, error: catError } = await supabase
          .from("categories")
          .select("*")
          .eq("is_active", "true")
          .eq("id", routeId)
          .single();

        if (catError) throw catError;
        setCategory(catData);

        // Fetch Related Trips
        const { data: tripsData } = await supabase
          .from("trips")
          .select("*")
          .eq("is_active", "true")
          .eq("category_id", catData?.id);

        setTrips(tripsData || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [isClient, routeId]);

  // 4. Hydration Safety: Render nothing or a simple shell on the server
  if (!isClient) {
    return null;
  }

  // 5. Loading State
  if (loading) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <p>Loading category...</p>
        </div>
      </Layout>
    );
  }

  // 6. Error State
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
        subTitle={category.name || "Category Details"}
        img={category?.image_url}
      />
      <CategoryDetailSection category={category} trips={trips} />
      <FooterOne />
    </Layout>
  );
};

export default CategoryDetail;

export const Head = () => {
  return <title>Category Details || Gotur || Travel & Tour</title>;
};
// // import * as React from "react";
// import React from "react";
// import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
// import FooterOne from "@/components/layout/FooterOne/FooterOne";
// import Layout from "@/components/layout/Layout/Layout";
// import PageHeader from "@/components/sections/PageHeader/PageHeader";
// import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
// import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
// // import TourListingTwoDetails from "@/components/sections/TourListingDetailsTwo/TourListingDetailsTwo";
// import { supabase } from "@/lib/supabase"; // Ensure you have your supabase client exported here
// import CategoryDetailSection from "@/components/sections/category/categoryDetail";

// const CategoryDetail = ({ serverData }) => {
//   const { category, trips, error } = serverData;
//   // Handle case where category ID doesn't exist in DB
//   if (error || !category) {
//     return (
//       <Layout>
//         <div className="min-h-[50vh] flex items-center justify-center">
//           <h2 className="text-2xl font-bold">Category not found</h2>
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
//         title={category.name}
//         subTitle={category.name || "category Details"}
//         img={category?.image_url}
//       />
//       <CategoryDetailSection category={category} trips={trips} />
//       {/* <AboutOne extraclass="about-one--one" /> */}
//       <FooterOne />
//     </Layout>
//   );
// };

// export default CategoryDetail;

// // This function runs on the server for every request
// export async function getServerData(context) {
//   try {
//     const { id } = context.params;
//     // console.log(id);

//     const { data, error } = await supabase
//       .from("categories") // Your table name
//       .select("*")
//       .eq("is_active", "true")
//       .eq("id", id)
//       .single();

//     if (error) throw error;
//     // console.log(data);
//     const { data: trips } = await supabase
//       .from("trips") // Your table name
//       .select("*")
//       .eq("is_active", "true")
//       .eq("category_id", data?.id);
//     return {
//       props: {
//         category: data,
//         trips: trips,
//       },
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       status: 404, // Return 404 if the tour isn't found
//       props: {
//         category: null,
//         trips: [],
//         error: error.message,
//       },
//     };
//   }
// }

// export const Head = ({ serverData }) => {
//   const title = serverData?.category?.name || "Category Details";
//   return <title>{`${title} || Gotur || Travel & Tour`}</title>;
// };

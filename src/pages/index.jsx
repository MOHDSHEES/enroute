import * as React from "react";
import { useState, useEffect } from "react"; // Added hooks
import Layout from "@/components/layout/Layout/Layout";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import HeaderOne from "@/components/layout/HeaderOne/HeaderOne";
import HeaderOneCloned from "@/components/layout/HeaderOneCloned/HeaderOneCloned";
import AboutOne from "@/components/sections/AboutOne/AboutOne";

import FeatureTwo from "@/components/sections/FeatureTwo/FeatureTwo";
import MainSliderThree from "@/components/sections/MainSliderThree/MainSliderThree";
import OfferTwo from "@/components/sections/OfferTwo/OfferTwo";
import TestimonialsTwo from "@/components/sections/TestimonialsTwo/TestimonialsTwo";
import DestinationCarouselTwo from "@/components/sections/DestinationCarouselTwo/DestinationCarouselTwo";
import BlogTwoTwo from "@/components/sections/BlogTwoTwo/BlogTwoTwo";
import ThemeProvider from "@/provider/ThemeProvider";
import DestinationsTwoTwo from "@/components/sections/DestinationsTwoTwo/DestinationsTwoTwo";
import { supabase } from "@/lib/supabase";
// import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";

const HomeThreePage = () => {
  // 1. Initialize state for your data
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, trendingRes] = await Promise.all([
          supabase
            .from("categories")
            .select("*")
            .eq("is_active", "True")
            .limit(6),
          supabase
            .from("trips")
            .select(
              "banner_url,id,description,name,starting_price,thumbnail_url,is_active,duration_days,duration_nights,age_group"
            )
            .eq("is_trending", "True")
            .eq("is_active", "True")
            .order("created_at", { ascending: false })
            .limit(6),
        ]);

        if (categoriesRes.data) setCategories(categoriesRes.data);
        if (trendingRes.data) setTrending(trendingRes.data);
      } catch (error) {
        console.error("Data fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(trending);

  return (
    <ThemeProvider>
      <Layout>
        <TopbarOne />
        <HeaderOne />
        <HeaderOneCloned />
        {/* <HeaderInnerCloned /> */}

        <MainSliderThree />
        <AboutOne />
        {/* Categories Section */}
        <DestinationsTwoTwo categories={categories} />

        {/* Trending Section */}
        {trending.length > 0 && (
          <FeatureTwo
            trending={trending}
            extraClass="section-space"
            id="popular"
          />
        )}
        <OfferTwo />
        <DestinationCarouselTwo />
        <TestimonialsTwo />
        <BlogTwoTwo />
        <FooterOne />
      </Layout>
    </ThemeProvider>
  );
};

export default HomeThreePage;

// 3. Simple Head component (serverData is no longer needed here)
export const Head = () => <title>Home Three || Gotur || Travel & Tour</title>;

// import * as React from "react";
// // import type { HeadFC, PageProps } from "gatsby";
// import Layout from "@/components/layout/Layout/Layout";
// import FooterOne from "@/components/layout/FooterOne/FooterOne";
// import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
// import HeaderOne from "@/components/layout/HeaderOne/HeaderOne";
// import HeaderOneCloned from "@/components/layout/HeaderOneCloned/HeaderOneCloned";
// import AboutOne from "@/components/sections/AboutOne/AboutOne";
// // import DestinationsTwoTwo from "@/components/sections/DestinationsTwoTwo/DestinationsTwoTwo";
// import FeatureTwo from "@/components/sections/FeatureTwo/FeatureTwo";
// import MainSliderThree from "@/components/sections/MainSliderThree/MainSliderThree";
// import OfferTwo from "@/components/sections/OfferTwo/OfferTwo";
// // import OfferOne from "@/components/sections/OfferOne/OfferOne";
// import TestimonialsTwo from "@/components/sections/TestimonialsTwo/TestimonialsTwo";
// // import InstagramOne from "@/components/sections/InstagramOne/InstagramOne";
// import DestinationCarouselTwo from "@/components/sections/DestinationCarouselTwo/DestinationCarouselTwo";
// import BlogTwoTwo from "@/components/sections/BlogTwoTwo/BlogTwoTwo";
// import ThemeProvider from "@/provider/ThemeProvider";
// import DestinationsTwoTwo from "@/components/sections/DestinationsTwoTwo/DestinationsTwoTwo";
// // Import your supabase client
// import { supabase } from "@/lib/supabase";

// const HomeThreePage = ({ serverData }) => {
//   // Catch the data from serverData
//   const { trending, categories, error } = serverData;

//   // Optional: Handle errors or empty states
//   if (error) {
//     console.error("Data fetching error:", error);
//   }

//   return (
//     <ThemeProvider>
//       <Layout>
//         <TopbarOne />
//         <HeaderOne />
//         <HeaderOneCloned />

//         {/* You can now pass serverData to your sections as needed */}
//         <MainSliderThree />

//         <AboutOne />

//         {/* Example: passing fetched destinations */}
//         <DestinationsTwoTwo categories={categories} />

//         <FeatureTwo
//           trending={trending}
//           extraClass="section-space"
//           id="popular"
//         />
//         <OfferTwo />
//         {/* <OfferOne homeThree={true} /> */}
//         <DestinationCarouselTwo />
//         <TestimonialsTwo />
//         {/* <InstagramOne /> */}
//         <BlogTwoTwo />

//         <FooterOne />
//       </Layout>
//     </ThemeProvider>
//   );
// };

// export default HomeThreePage;

// /**
//  * Server-side data fetching
//  */
// export async function getServerData() {
//   try {
//     // Fetch multiple pieces of data in parallel for the home page
//     const [categories, trending] = await Promise.all([
//       supabase.from("categories").select("*").eq("is_active", "True").limit(6),
//       supabase
//         .from("trips")
//         .select(
//           "banner_url,id,description,name,starting_price,thumbnail_url,is_active,duration_days,duration_nights,age_group"
//         )
//         .eq("is_trending", "True")
//         .eq("is_active", "True")
//         .order("created_at", { ascending: false })
//         .limit(6),
//       // supabase.from("destinations").select("*").limit(8)
//     ]);

//     if (trending.error) throw trending.error;

//     return {
//       props: {
//         trending: trending.data || [],
//         categories: categories.data || [],
//       },
//     };
//   } catch (error) {
//     return {
//       status: 500,
//       props: {
//         trending: [],
//         categories: [],
//         error: error.message,
//       },
//     };
//   }
// }

// export const Head = ({ serverData }) => (
//   <title>Home Three || Gotur || Travel & Tour</title>
// );

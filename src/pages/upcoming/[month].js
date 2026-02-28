"use client";
import React, { useState, useEffect } from "react";
import TopbarOne from "@/components/common/TopbarOne/TopbarOne";
import FooterOne from "@/components/layout/FooterOne/FooterOne";
import Layout from "@/components/layout/Layout/Layout";
import PageHeader from "@/components/sections/PageHeader/PageHeader";
import HeaderInner from "@/components/layout/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/layout/HeaderInnerCloned/HeaderInnerCloned";
import { supabase } from "@/lib/supabase";
import CategoryDetailSection from "@/components/sections/category/categoryDetail";

const UpcomingDetail = ({ params }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Extract the month from the URL (e.g., "march")
  const monthParam = params.month || params["*"];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !monthParam) return;

    const fetchUpcomingTours = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Validate Month and Calculate Year
        const now = new Date();
        let year = now.getFullYear();

        // Convert string to date to get month index (0-11)
        const dateObj = new Date(`${monthParam} 1, ${year}`);
        const monthIndex = dateObj.getMonth();

        if (isNaN(monthIndex)) {
          throw new Error("Invalid month in URL. Please select a valid month.");
        }

        // 2. Logic: If the selected month has already passed this year,
        // we assume the user is looking for that month in the NEXT year.
        if (monthIndex < now.getMonth()) {
          year += 1;
        }

        // 3. Define the start and end of that specific month
        // Format: YYYY-MM-DD
        const firstDay = new Date(year, monthIndex, 1)
          .toISOString()
          .split("T")[0];
        const lastDay = new Date(year, monthIndex + 1, 0)
          .toISOString()
          .split("T")[0];

        // 4. Supabase Query with Inner Join
        // We only want trips that HAVE at least one start_date in this month range
        const { data, error: tripError } = await supabase
          .from("trips")
          .select(
            `
            *,
            trip_dates!inner (
              id,
              start_date,
              end_date,
              available_slots,
              is_sold_out
            )
          `
          )
          .eq("is_active", true)
          .gte("trip_dates.start_date", firstDay)
          .lte("trip_dates.start_date", lastDay)
          .order("created_at", { ascending: false });

        if (tripError) throw tripError;

        // Note: PostgREST returns duplicates if a trip has multiple dates in one month.
        // We filter unique trips by ID just in case.
        const uniqueTrips = Array.from(
          new Map(data.map((item) => [item.id, item])).values()
        );

        setTrips(uniqueTrips || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingTours();
  }, [isClient, monthParam]);

  // Hydration Safety
  if (!isClient) return null;

  // Render Layout Wrapper
  const renderContent = () => {
    if (loading) {
      return (
        <div
          className="container py-5 text-center"
          style={{ minHeight: "40vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-3">Searching for tours in {monthParam}...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div
          className="container py-5 text-center"
          style={{ minHeight: "40vh" }}
        >
          <h2 className="text-danger">Oops!</h2>
          <p>{error}</p>
        </div>
      );
    }

    if (trips.length === 0) {
      return (
        <div
          className="container py-5 text-center"
          style={{ minHeight: "40vh" }}
        >
          <i
            className="fa fa-calendar-times mb-3"
            style={{ fontSize: "3rem", color: "#ccc" }}
          ></i>
          <h3>No Tours Starting in {monthParam}</h3>
          <p>
            We haven't announced schedules for this month yet. Please check back
            later!
          </p>
        </div>
      );
    }
    // console.log(trips);

    return (
      <CategoryDetailSection
        category={{ name: `Tours starting in ${monthParam}` }}
        trips={trips}
      />
    );
  };

  return (
    <Layout>
      <TopbarOne />
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader
        title={`${
          monthParam.charAt(0).toUpperCase() + monthParam.slice(1)
        } Tours`}
        subTitle="Explore Upcoming Dates"
        img="https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772255677/upcoming_mkxjvm.webp"
        // img="/assets/images/backgrounds/page-header-bg.jpg"
      />

      {renderContent()}

      <FooterOne />
    </Layout>
  );
};

export default UpcomingDetail;

export const Head = ({ params }) => {
  const month = params.id || params["*"];
  const capitalized = month
    ? month.charAt(0).toUpperCase() + month.slice(1)
    : "";
  return <title>{capitalized} Upcoming Tours || Enroute Trips</title>;
};

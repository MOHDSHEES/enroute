"use client";

import React, { useState, useEffect } from "react";
import { navigate, Link } from "gatsby";
import { supabase } from "@/lib/supabase";

const BannerForm: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  // Search Logic for Supabase trips table
  useEffect(() => {
    const fetchTrips = async () => {
      if (searchName.trim().length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      const { data, error } = await supabase
        .from("trips")
        .select("id, name, starting_price, duration_days")
        .eq("is_active", true)
        .ilike("name", `%${searchName}%`) // Matches partial trip names
        .limit(5);

      if (!error && data) {
        setResults(data);
      }
      setLoading(false);
    };

    const debounceTimer = setTimeout(fetchTrips, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchName]);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (results.length > 0) {
  //     // Redirect to the first match on Enter
  //     navigate(`/trip/${results[0].id}`);
  //   }
  // };

  return (
    <div
      className="banner-form wow fadeInUp"
      data-wow-duration="1500ms"
      data-wow-delay="300ms"
    >
      <div className="container">
        <div className="banner-form__wrapper">
          <div
            className="banner-form row gutter-x-30 align-items-center"
            style={{ minWidth: "80%", gap: "15px", position: "relative" }}
          >
            <div
              className="banner-form__control banner-form__col--4"
              style={{
                flex: 1,
                minWidth: 0,
                paddingRight: "0px",
                position: "relative",
              }}
            >
              <i className="icon icon-search"></i>
              <input
                id="search"
                type="text"
                className="form-control"
                placeholder="Search tours, places..."
                value={searchName}
                autoComplete="off"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                onChange={(e) => setSearchName(e.target.value)}
                style={{
                  width: "100%",
                  boxShadow: "0 0 0 1px #63ab45",
                  borderRadius: "6px",
                  padding: "8px 12px",
                }}
              />

              {/* Suggestions Dropdown */}
              {isFocused && (results.length > 0 || loading) && (
                <ul
                  style={{
                    position: "absolute",
                    top: "105%",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                    listStyle: "none",
                    padding: "5px 0",
                    zIndex: 100,
                    margin: 0,
                    border: "1px solid #eee",
                  }}
                >
                  {loading ? (
                    <li
                      style={{
                        padding: "10px 20px",
                        fontSize: "13px",
                        color: "#999",
                      }}
                    >
                      Searching...
                    </li>
                  ) : (
                    results.map((trip) => (
                      <li key={trip.id}>
                        <Link
                          to={`/trip/details/${trip.id}`}
                          style={{
                            display: "block",
                            padding: "10px 20px",
                            color: "#333",
                            textDecoration: "none",
                            fontSize: "14px",
                            borderBottom: "1px solid #f9f9f9",
                          }}
                        >
                          <span style={{ fontWeight: "600", display: "block" }}>
                            {trip.name}
                          </span>
                          <small style={{ color: "#777" }}>
                            {trip.duration_days} Days — Starting ₹
                            {trip.starting_price}
                          </small>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>

            {/* <div
              className="banner-form__control banner-form__button banner-form__col--5"
              style={{ flexShrink: 0, marginLeft: "auto" }}
            >
              <button className="gotur-btn" type="submit">
                Search
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
// import CustomSelect from "@/components/common/CustomSelect/CustomSelect";
// import DateRangePicker from "@/components/common/DateRangePicker/DateRangePicker";
// import { tourListingOneLeftData } from "@/data/tourListingOneLeftData";
// import React, { useState } from "react";
// import dayjs, { Dayjs } from "dayjs";

// const BannerForm: React.FC = () => {
//   const [searchName, setSearchName] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({ searchName }, "Search Data");
//   };
//   // const [location, setLocation] = useState<string | null>(null);
//   // const [activity, setActivity] = useState<string | null>(null);
//   // const [guests, setGuests] = useState<number>(2);
//   // const [dateRange, setDateRange] = useState<[Dayjs, Dayjs]>([
//   //   dayjs(),
//   //   dayjs(),
//   // ]);

//   // // Handle increment and decrement
//   // const incrementGuests = () => {
//   //   setGuests(guests + 1);
//   // };

//   // const decrementGuests = () => {
//   //   if (guests > 1) {
//   //     // Prevent going below 1
//   //     setGuests(guests - 1);
//   //   }
//   // };
//   // const handleLocationChange = (selectedOption: any) => {
//   //   setLocation(selectedOption);
//   // };

//   // const handleActivityChange = (selectedOption: any) => {
//   //   setActivity(selectedOption);
//   // };
//   // const handleSubmit = (e: any) => {
//   //   e.preventDefault();
//   //   // const data = {
//   //   //   location,
//   //   //   activity,
//   //   //   guests,
//   //   //   dateRange,
//   //   // };
//   //   // console.log(data, "Data");
//   // };
//   return (
//     <div
//       className="banner-form wow fadeInUp"
//       data-wow-duration="1500ms"
//       data-wow-delay="300ms"
//     >
//       <div className="container">
//         <form
//           className="banner-form__wrapper"
//           // style={{ width: "100%" }}
//           onSubmit={handleSubmit}
//         >
//           <div
//             className="banner-form row gutter-x-30 align-items-center"
//             style={{ minWidth: "80%", gap: "15px" }}
//           >
//             {/* <div className="banner-form__control banner-form__col--1">
//               <i className="icon icon-location"></i>
//               <label htmlFor="location">Location</label>
//               <CustomSelect
//                 options={tourListingOneLeftData.locations}
//                 placeholder="Austalia"
//                 onChange={handleLocationChange}
//               />
//             </div> */}
//             {/* <div className="banner-form__control banner-form__col--2">
//               <i className="icon icon-travle"></i>
//               <label htmlFor="type2">Activities Type</label>
//               <CustomSelect
//                 options={tourListingOneLeftData.activities}
//                 placeholder="Adventure"
//                 onChange={handleActivityChange}
//               />
//             </div> */}
//             {/* <div className="banner-form__control banner-form__control--date banner-form__col--3">
//               <i className="icon icon-clock"></i>
//               <label htmlFor="date">Activate Day</label>
//               <DateRangePicker
//                 dateRange={dateRange}
//                 setDateRange={setDateRange}
//               />
//             </div> */}
//             {/* <div className="banner-form__control banner-form__col--4">
//               <i className="icon icon-group"></i>
//               <label htmlFor="guests">Traveler</label>
//               <button
//                 type="button"
//                 className="banner-form__qty-minus sub"
//                 onClick={decrementGuests}
//               >
//                 <i className="icon-down-arrow"></i>
//               </button>
//               <input
//                 id="guests"
//                 type="number"
//                 name="guests"
//                 placeholder="2"
//                 value={guests}
//                 readOnly
//               />
//               <button
//                 type="button"
//                 className="banner-form__qty-plus add"
//                 onClick={incrementGuests}
//               >
//                 <i className="icon-down-arrow"></i>
//               </button>
//             </div> */}
//             {/* <div className="banner-form__control banner-form__col--4">
//               <i className="icon icon-search"></i>
//               <label htmlFor="search">Search by Name</label>
//               <input
//                 id="search"
//                 type="text"
//                 className="form-control"
//                 placeholder="Search tours, places..."
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 style={{ width: "100%" }}
//               />
//             </div>

//             <div className="banner-form__control banner-form__button banner-form__col--5">
//               <button className="gotur-btn" type="submit">
//                 Search
//               </button>
//             </div> */}
//             <div
//               className="banner-form__control banner-form__col--4"
//               style={{ flex: 1, minWidth: 0, paddingRight: "0px" }}
//             >
//               <i className="icon icon-search"></i>
//               {/* <label htmlFor="search">Search</label> */}
//               <input
//                 id="search"
//                 type="text"
//                 className="form-control"
//                 placeholder="Search tours, places..."
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 style={{
//                   width: "100%",
//                   boxShadow: "0 0 0 1px #63ab45",
//                   borderRadius: "6px",
//                   // marginTop: "10px",
//                   padding: "8px 12px",
//                 }}
//               />
//             </div>

//             <div
//               className="banner-form__control banner-form__button banner-form__col--5"
//               style={{ flexShrink: 0, marginLeft: "auto" }}
//             >
//               <button className="gotur-btn" type="submit">
//                 Search
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BannerForm;

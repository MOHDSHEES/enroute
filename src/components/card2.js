// import React from "react";
// import image1 from "@/assets/images/blog/listing-list-4-1.jpg";
// import { Col } from "react-bootstrap";
// import { Link } from "gatsby";

// const Card2 = ({ item }) => {
//   // Container for the image to maintain aspect ratio
//   const imageContainerStyle = {
//     position: "relative",
//     width: "100%",
//     aspectRatio: "16 / 11",
//     overflow: "hidden",
//     borderRadius: "12px 12px 0 0",
//     display: "block",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   // Styles to force equal height and text truncation
//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     height: "100%", // Ensures the card fills the Col height
//     background: "#fff", // Adjust based on your theme
//     borderRadius: "12px",
//     border: "1px solid #eee",
//   };

//   const contentStyle = {
//     display: "flex",
//     flexDirection: "column",
//     flexGrow: 1, // Takes up remaining space to push footer down
//     padding: "20px",
//   };

//   const descriptionStyle = {
//     fontSize: "14px",
//     color: "#666",
//     margin: "10px 0",
//     // Standard CSS for 4-line truncation
//     display: "-webkit-box",
//     WebkitLineClamp: 4,
//     WebkitBoxOrient: "vertical",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   };

//   return (
//     <Col lg={4} md={6} key={item.id}>
//        <div
//             className="listing-card-two wow fadeInUp"
//             data-wow-duration="1500ms"
//             data-wow-delay={`${100 * (item.id + 1)}ms`}
//           >
//       <div className="listing-card-two__image" style={imageContainerStyle}>
//         <img
//           src={item.thumbnail_url ? item.thumbnail_url : image1}
//           alt={item.name}
//           style={imageStyle}
//         />
//         <Link
//           to={`/trip/details/${item.id}`}
//           className="listing-card-two__overlay"
//         ></Link>
//       </div>

//       <div className="listing-card-two__content" style={contentStyle}>
//         <div className="listing-card-two__rating">
//           <span>(10 Review)</span>
//           <i className="icon-star"></i>
//           <i className="icon-star"></i>
//           <i className="icon-star"></i>
//           <i className="icon-star"></i>
//           <i className="icon-star"></i>
//         </div>

//         <h3 className="listing-card-four__title" style={{ marginTop: "10px" }}>
//           <Link to={`/trip/details/${item.id}`}>{item.name}</Link>
//         </h3>

//         {/* Description Section */}
//         <div className="listing-card-two__description" style={descriptionStyle}>
//           {item.description ||
//             "Explore this amazing destination with our curated travel plan. Experience local culture, breathtaking views, and unforgettable memories."}
//         </div>

//         <div
//           className="listing-card-two__content__inner"
//           style={{ marginTop: "auto" }}
//         >
//           <ul className="listing-card-two__meta list-unstyled">
//             <li>
//               <Link to={`/trip/details/${item.id}`}>
//                 <span className="listing-card-two__meta__icon">
//                   <i className="fa fa-user"></i>
//                 </span>
//                 Age {item.age_group}
//               </Link>
//             </li>
//             <li>
//               <Link to={`/trip/details/${item.id}`}>
//                 <span className="listing-card-two__meta__icon">
//                   <i className="icon-calendar"></i>
//                 </span>
//                 {item.duration_days} D / {item.duration_nights}N
//               </Link>
//             </li>
//           </ul>

//           <div
//             className="listing-card-two__price"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <h5 className="listing-card-two__price__number">
//               &#8377;{item.starting_price}
//             </h5>
//             <Link
//               to={`/trip/details/${item.id}`}
//               className="listing-card-four__btn gotur-btn"
//             >
//               Book Now{" "}
//               <span className="icon">
//                 <i className="icon-right"></i>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//      </Col>
//   );
// };

// export default Card2;

import React, { useState } from "react";
import image1 from "@/assets/images/blog/listing-list-4-1.jpg";
import { Col } from "react-bootstrap";
// import { Item } from "react-photoswipe-gallery";
import { Link } from "gatsby";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

const Card2 = ({ item }) => {
  console.log(item);

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    // Using a 16:11 or 3:2 ratio for a "landscape" look typical for travel listings
    aspectRatio: "16 / 11",
    overflow: "hidden",
    borderRadius: "12px 12px 0 0", // Only top corners rounded if content is below
    display: "block",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // This ensures all images fill the space perfectly
    display: "block",
  };
  const descriptionStyle = {
    fontSize: "14px",
    color: "#666",
    margin: "10px 0 20px",
    // Standard CSS for 4-line truncation
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <Col lg={4} md={6} key={item.id}>
      <div
        className="listing-card-two wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay={`${100 * (item.id + 1)}ms`}
      >
        <div className="listing-card-two__image" style={imageContainerStyle}>
          <img
            src={item.thumbnail_url ? item.thumbnail_url : image1}
            alt={item.name}
            style={imageStyle}
          />
          {/* <DynamicImage src={tour.image} alt={tour.title} /> */}
          <Link
            to={`/trip/details/${item.id}`}
            className="listing-card-two__overlay"
          ></Link>
          {/* <div className='listing-card-two__btn-group'>
                               <div className='listing-card-two__discount'>
                                 {tour.discount}
                               </div>
                             </div> */}
          {/* <div className='listing-card-two__btns'>
                               <div className='listing-card-two__btns__hover'>
                                 <Item
                                   original={tour.hoverImage}
                                   thumbnail={tour.hoverImage}
                                   width='338'
                                   height='237'
                                 >
                                   {({ ref, open }) => (
                                     <a
                                       href='#'
                                       className='listing-card-two__popup card__popup'
                                       ref={ref}
                                       onClick={(e) => {
                                         e.preventDefault();
                                         open(e);
                                       }}
                                     >
                                       <span className='icon-image'></span>
                                     </a>
                                   )}
                                 </Item>

                                 <a
                                   className='video-popup'
                                   href='#'
                                   onClick={(e) => {
                                     e.preventDefault();
                                     setOpen(true);
                                     setVideoId(tour.videoId);
                                   }}
                                 >
                                   <span className='icon-video'></span>
                                 </a>
                               </div>
                             </div> */}
        </div>
        <div className="listing-card-two__content">
          <div className="listing-card-two__rating">
            <span>(10 Review)</span>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
          </div>
          <h3 className="listing-card-four__title">
            <Link
              to={`/trip/details/${item.id}`}
              //   style={{ paddingBottom: "20px" }}
            >
              {item.name}
            </Link>
          </h3>
          <div
            className="listing-card-two__description"
            style={descriptionStyle}
          >
            {item.description ||
              "Explore this amazing destination with our curated travel plan. Experience local culture, breathtaking views, and unforgettable memories."}
          </div>
          {/* <h3 className="listing-card-two__title">
            <Link to={`/trip/details/${item.id}`}>{item.name}</Link>
          </h3> */}
          <div className="listing-card-two__content__inner">
            <ul className="listing-card-two__meta list-unstyled">
              <li>
                <Link to={`/trip/details/${item.id}`}>
                  <span className="listing-card-two__meta__icon">
                    {/* <i className='icon-pin'></i> */}
                    <i className="fa fa-user"></i>
                  </span>
                  Age {item.age_group}
                </Link>
              </li>
              <li>
                <Link to="tour-listing-details-2">
                  <span className="listing-card-two__meta__icon">
                    <i className="icon-calendar"></i>
                  </span>
                  {item.duration_days} D / {item.duration_nights}N
                </Link>
              </li>
            </ul>
            <div className="listing-card-two__price">
              <h5 className="listing-card-two__price__number">
                &#8377;{item.starting_price}
                {/* <span>/Per day</span> */}
              </h5>
              <Link
                to={`/trip/details/${item.id}`}
                className="listing-card-four__btn gotur-btn"
              >
                Book Now{" "}
                <span className="icon">
                  <i className="icon-right"></i>
                </span>
              </Link>
              {/* <i className='far fa-heart'></i> */}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Card2;

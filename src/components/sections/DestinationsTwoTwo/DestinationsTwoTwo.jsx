"use client";

import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
import loadable from "@loadable/component";
import { Link } from "gatsby";
import destinationImg3 from "@/assets/images/resources/destinations-2-3.jpg";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const DestinationsTwoTwo = ({ categories = [] }) => {
  // 1. Memoize data to prevent re-initialization crashes during page transitions
  // const { firstHalf, secondHalf } = useMemo(() => {
  //   const midpoint = Math.ceil(categories.length / 2);
  //   return {
  //     firstHalf: categories.slice(0, midpoint),
  //     secondHalf: categories.slice(midpoint),
  //   };
  // }, [categories]);

  // 2. Stable Configuration
  // loop: false + rewind: true is the "secret sauce" for stopping the outerHTML error
  const baseCarouselOptions = {
    gutter: 30,
    smartSpeed: 700,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    mouseDrag: true,
    touch: true,
    rewind: true,
    loop: false,
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      1199: { items: 4 },
    },
  };

  // 3. Your Exact Layout Styles
  const thumbContainerStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "3 / 4",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  };

  const cardImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const titleStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "1.2",
    textDecoration: "none",
  };

  return (
    <section
      className="destinations-two destinations-two--two section-space"
      id="destination"
    >
      <Container>
        <div className="destinations-two__top">
          <Row className="align-items-end">
            <Col lg={8}>
              <div className="sec-title">
                <h6 className="sec-title__tagline">
                  <TextAnimation text={"Popular"} animationType="right" />
                </h6>
                <h3 className="sec-title__title d-md-flex gap-2">
                  <TextAnimation text={"Categories"} animationType="left" />
                </h3>
              </div>
            </Col>
            <Col lg={4}>
              {/* Only the Top Slider "owns" these buttons to prevent collision crashes */}
              <div className="destinations-two__bottom__nav">
                <button className="destinations-two__carousel__nav--left">
                  <span className="icon-arrow-left"></span>
                </button>
                <button className="destinations-two__carousel__nav--right">
                  <span className="icon-arrow-right"></span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* TOP SLIDER */}
      <div className="container-fluid" key="top-slider-wrapper">
        <div className="destinations-two__inner">
          <TinySlider
            settings={{
              ...baseCarouselOptions,
              controlsContainer: ".destinations-two__bottom__nav",
            }}
            className="destinations-two__carousel"
          >
            {categories.map((cate) => (
              <div key={`top-${cate.id}`}>
                <div className="item">
                  <div className="destinations-card-two">
                    <div
                      className="destinations-card-two__thumb"
                      style={thumbContainerStyle}
                    >
                      <img
                        src={cate.image_url || destinationImg3}
                        alt={cate.name}
                        style={cardImageStyle}
                      />
                    </div>
                    <h4
                      className="destinations-card-two__title"
                      style={titleStyle}
                    >
                      <Link to={`/category/${cate.id}`}>{cate.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>

      {/* BOTTOM SLIDER */}
      {/* <div
        className="container-fluid"
        style={{ marginTop: "50px" }}
        key="bottom-slider-wrapper"
        // dir="rtl"
      >
        <div className="destinations-two__inner">
          <TinySlider
            settings={{
              ...baseCarouselOptions,
              rtl: true,
              startIndex: secondHalf.length - 1,
              autoplayDirection: "backward",
              responsive: {
                0: { items: 2 },
                768: { items: 5 },
                1199: { items: 7 },
              },
              controls: false, // Prevents fighting for DOM nodes with the top slider
            }}
            className="destinations-two__carousel"
          >
            {secondHalf.map((cate) => (
              <div key={`bottom-${cate.id}`}>
                <div className="item">
                  <div className="destinations-card-two">
                    <div
                      className="destinations-card-two__thumb"
                      style={thumbContainerStyle}
                    >
                      <img
                        src={cate.image_url || destinationImg3}
                        alt={cate.name}
                        style={cardImageStyle}
                      />
                    </div>
                    <h4
                      className="destinations-card-two__title"
                      style={titleStyle}
                    >
                      <Link to={`/category/${cate.id}`}>{cate.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div> */}
    </section>
  );
};

export default DestinationsTwoTwo;
// "use client";
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
// import destinationsTwoTwoData from "@/data/destinationsTwoTwoData";
// import loadable from "@loadable/component";
// import { Link } from "gatsby";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
// import destinationImg3 from "@/assets/images/resources/destinations-2-3.jpg";
// const TinySlider = loadable(() => import("tiny-slider-react"), {
//   ssr: false,
// });

// const DestinationsTwoTwo = ({ categories }) => {
//   // console.log(categories);
//   const midpoint = Math.ceil(categories.length / 2);
//   const firstHalf = categories.slice(0, midpoint);
//   const secondHalf = categories.slice(midpoint);
//   // console.log("First Half:", firstHalf);
//   // console.log("Second Half:", secondHalf);

//   const { tagline, title, highlighted, destinations, elementImage } =
//     destinationsTwoTwoData;
//   // console.log(categories);
//   const carouselOptions = {
//     items: 2,
//     gutter: 30,
//     // loop: true,
//     smartSpeed: 700,
//     controls: true,
//     controlsContainer: ".destinations-two__bottom__nav",
//     nav: false,

//     // --- Autoplay Settings ---
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayButton: false,
//     autoplayButtonOutput: false,
//     autoplayHoverPause: true,
//     autoplayDirection: "forward", // Forces the direction
//     autoplayText: ["start", "stop"], // Sometimes required internally to initialize

//     // --- Interaction Settings ---
//     mouseDrag: true,
//     touch: true,
//     rewind: true, // Ensure loop: true takes precedence
//     // autoplay: true,
//     // autoplayTimeout: 3000, // Speed in milliseconds
//     // autoplayButton: false, // Prevents the creation of a Start/Stop button
//     // autoplayButtonOutput: false, // Ensures no stop button HTML is outputted
//     // autoplayHoverPause: true, // Optional: pauses when user hovers over the slide
//     responsive: {
//       0: { items: 2 },
//       575: { items: 2 },
//       768: { items: 5 },
//       992: { items: 7 },
//       1199: { items: 7 },
//     },
//     // responsive: {
//     //   0: { items: 2 },
//     //   575: { items: 4 },
//     //   768: { items: 5 },
//     //   992: { items: 6 },
//     //   1199: { items: 6 },
//     // },
//   };
//   // const carouselOptions = {
//   //   items: 1,
//   //   gutter: 30,
//   //   loop: true,
//   //   smartSpeed: 700,
//   //   controls: true,
//   //   controlsContainer: ".destinations-two__bottom__nav",
//   //   nav: false,
//   //   autoplay: false,
//   //   responsive: {
//   //     0: { items: 1 },
//   //     575: { items: 2 },
//   //     768: { items: 3 },
//   //     992: { items: 3 },
//   //     1199: { items: 4 },
//   //   },
//   // };
//   const thumbContainerStyle = {
//     position: "relative",
//     width: "100%",
//     // This creates a consistent vertical rectangle (width 3 : height 4)
//     // On mobile, it stays proportional to the screen width.
//     aspectRatio: "3 / 4",
//     overflow: "hidden",
//     // borderRadius: "12px",
//     backgroundColor: "#f5f5f5",
//   };

//   const cardImageStyle = {
//     width: "100%",
//     height: "100%", // Tells the image to fill the aspect-ratio container
//     objectFit: "cover", // Crops different sized images to fit the 3:4 shape
//     display: "block",
//   };
//   return (
//     <section
//       className="destinations-two destinations-two--two section-space"
//       id="destination"
//     >
//       <Container>
//         <div className="destinations-two__top">
//           <Row className="align-items-end">
//             <Col lg={8}>
//               <div className="sec-title">
//                 <h6 className="sec-title__tagline">
//                   <TextAnimation text={"Popular"} animationType="right" />
//                 </h6>
//                 <h3 className="sec-title__title d-md-flex gap-2">
//                   <TextAnimation text={"Categories"} animationType="left" />
//                   {/* <span>
//                     <TextAnimation text={"Categories"} animationType="left" />
//                   </span> */}
//                 </h3>
//               </div>
//             </Col>
//             <Col lg={4}>
//               <div className="destinations-two__bottom__nav">
//                 <button className="destinations-two__carousel__nav--left">
//                   <span className="icon-arrow-left"></span>
//                 </button>
//                 <button className="destinations-two__carousel__nav--right">
//                   <span className="icon-arrow-right"></span>
//                 </button>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>

//       <div className="container-fluid">
//         <div className="destinations-two__inner">
//           <TinySlider
//             className="destinations-two__carousel gotur-owl__carousel gotur-owl__carousel--custom-nav gotur-owl__carousel--with-shadow owl-carousel owl-theme owl-loaded owl-drag"
//             settings={carouselOptions}
//           >
//             {firstHalf &&
//               firstHalf.map((cate, index) => (
//                 <div key={index}>
//                   <div className="item">
//                     <div
//                       className="destinations-card-two wow fadeInUp"
//                       data-wow-duration="1500ms"
//                       data-wow-delay="100ms"
//                     >
//                       <div
//                         className="destinations-card-two__thumb"
//                         style={thumbContainerStyle}
//                         // style={{
//                         //   // width: "320px",
//                         //   height: "426px",
//                         //   overflow: "hidden",
//                         // }}
//                       >
//                         <img
//                           src={
//                             cate.image_url ? cate.image_url : destinationImg3
//                           }
//                           alt={cate.name}
//                           style={cardImageStyle}
//                           // style={{
//                           //   width: "100%",
//                           //   height: "100%",
//                           //   objectFit: "cover",
//                           //   display: "block",
//                           // }}
//                         />
//                         {/* <div
//                         className="destinations-card-two__hover"
//                         style={{
//                           width: "320px",
//                           height: "426px",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <img
//                           src={
//                             cate.image_url ? cate.image_url : destinationImg3
//                           }
//                           alt={cate.name}
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </div> */}
//                       </div>
//                       <h4
//                         className="destinations-card-two__title"
//                         style={{
//                           fontFamily: "'DM Sans', sans-serif", // Change to your preferred font
//                           fontWeight: "600",
//                           fontSize: "20px",
//                           // textTransform: "uppercase",
//                           // letterSpacing: "1px",
//                           lineHeight: "1.2",
//                           // color: "var(--gotur-black, #1a1a1a)",
//                           textDecoration: "none",
//                         }}
//                       >
//                         <Link to={`/category/${cate.id}`}>{cate.name}</Link>
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//                 // <div key={index}>
//                 //   <div className="item">
//                 //     <div
//                 //       className="destinations-card-two wow fadeInUp"
//                 //       data-wow-duration="1500ms"
//                 //       data-wow-delay="100ms"
//                 //     >
//                 //       <div className="destinations-card-two__thumb">
//                 //         <img
//                 //           src={cate.image_url ? cate.image_url : destinationImg3}
//                 //           alt={cate.name}
//                 //         />
//                 //         <div className="destinations-card-two__hover">
//                 //           <img
//                 //             src={
//                 //               cate.image_url ? cate.image_url : destinationImg3
//                 //             }
//                 //             alt={cate.name}
//                 //           />
//                 //         </div>
//                 //       </div>
//                 //       <h4 className="destinations-card-two__title">
//                 //         <Link to={`/category/${cate.id}`}>{cate.name}</Link>
//                 //       </h4>
//                 //     </div>
//                 //   </div>
//                 // </div>
//               ))}
//             {/* {destinations.map((dest, index) => (
//               <div key={index}>
//                 <div className="item">
//                   <div
//                     className="destinations-card-two wow fadeInUp"
//                     data-wow-duration="1500ms"
//                     data-wow-delay="100ms"
//                   >
//                     <div className="destinations-card-two__thumb">
//                       <img src={dest.image} alt={dest.title} />
//                       <div className="destinations-card-two__hover">
//                         <img src={dest.hoverImage} alt={dest.title} />
//                       </div>
//                     </div>
//                     <h4 className="destinations-card-two__title">
//                       <Link to={dest.link}>{dest.title}</Link>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             ))} */}
//           </TinySlider>
//         </div>
//       </div>
//       <div className="container-fluid" style={{ marginTop: "50px" }}>
//         <div className="destinations-two__inner">
//           <TinySlider
//             className="destinations-two__carousel gotur-owl__carousel gotur-owl__carousel--custom-nav gotur-owl__carousel--with-shadow owl-carousel owl-theme owl-loaded owl-drag"
//             settings={carouselOptions}
//           >
//             {secondHalf &&
//               secondHalf.map((cate, index) => (
//                 <div key={index}>
//                   <div className="item">
//                     <div
//                       className="destinations-card-two wow fadeInUp"
//                       data-wow-duration="1500ms"
//                       data-wow-delay="100ms"
//                     >
//                       <div
//                         className="destinations-card-two__thumb"
//                         style={thumbContainerStyle}
//                         // style={{
//                         //   // width: "320px",
//                         //   height: "426px",
//                         //   overflow: "hidden",
//                         // }}
//                       >
//                         <img
//                           src={
//                             cate.image_url ? cate.image_url : destinationImg3
//                           }
//                           alt={cate.name}
//                           style={cardImageStyle}
//                           // style={{
//                           //   width: "100%",
//                           //   height: "100%",
//                           //   objectFit: "cover",
//                           //   display: "block",
//                           // }}
//                         />
//                         {/* <div
//                         className="destinations-card-two__hover"
//                         style={{
//                           width: "320px",
//                           height: "426px",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <img
//                           src={
//                             cate.image_url ? cate.image_url : destinationImg3
//                           }
//                           alt={cate.name}
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </div> */}
//                       </div>
//                       <h4
//                         className="destinations-card-two__title"
//                         style={{
//                           fontFamily: "'DM Sans', sans-serif", // Change to your preferred font
//                           fontWeight: "600",
//                           fontSize: "20px",
//                           // textTransform: "uppercase",
//                           // letterSpacing: "1px",
//                           lineHeight: "1.2",
//                           // color: "var(--gotur-black, #1a1a1a)",
//                           textDecoration: "none",
//                         }}
//                       >
//                         <Link to={`/category/${cate.id}`}>{cate.name}</Link>
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//                 // <div key={index}>
//                 //   <div className="item">
//                 //     <div
//                 //       className="destinations-card-two wow fadeInUp"
//                 //       data-wow-duration="1500ms"
//                 //       data-wow-delay="100ms"
//                 //     >
//                 //       <div className="destinations-card-two__thumb">
//                 //         <img
//                 //           src={cate.image_url ? cate.image_url : destinationImg3}
//                 //           alt={cate.name}
//                 //         />
//                 //         <div className="destinations-card-two__hover">
//                 //           <img
//                 //             src={
//                 //               cate.image_url ? cate.image_url : destinationImg3
//                 //             }
//                 //             alt={cate.name}
//                 //           />
//                 //         </div>
//                 //       </div>
//                 //       <h4 className="destinations-card-two__title">
//                 //         <Link to={`/category/${cate.id}`}>{cate.name}</Link>
//                 //       </h4>
//                 //     </div>
//                 //   </div>
//                 // </div>
//               ))}
//             {/* {destinations.map((dest, index) => (
//               <div key={index}>
//                 <div className="item">
//                   <div
//                     className="destinations-card-two wow fadeInUp"
//                     data-wow-duration="1500ms"
//                     data-wow-delay="100ms"
//                   >
//                     <div className="destinations-card-two__thumb">
//                       <img src={dest.image} alt={dest.title} />
//                       <div className="destinations-card-two__hover">
//                         <img src={dest.hoverImage} alt={dest.title} />
//                       </div>
//                     </div>
//                     <h4 className="destinations-card-two__title">
//                       <Link to={dest.link}>{dest.title}</Link>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             ))} */}
//           </TinySlider>
//         </div>
//       </div>

//       {/* <div className="destinations-two__element">
//         <DynamicImage src={elementImage} alt="" />
//       </div> */}
//     </section>
//   );
// };

// export default DestinationsTwoTwo;

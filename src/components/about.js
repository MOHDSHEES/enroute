import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { productDetails } from "@/data/productsDetailsData";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

const About = () => {
  const { name, image } = productDetails;

  // Replace this URL with your actual background image path
  const bgImage =
    "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771082793/about-bg-shape.png";

  return (
    <div>
      <style>
        {`
          .pswp__img {
            background: #fff !important;
          }
          .about-section-custom {
            position: relative;
            background-color: #f9f9f9; /* Fallback color */
            background-image: url(${bgImage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }
          /* Optional: adds a slight white tint to the background image for better text contrast */
          .about-section-custom::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(255, 255, 255, 0.8); 
            z-index: 0;
          }
          .about-section-custom .container {
            position: relative;
            z-index: 1;
          }
        `}
      </style>

      <section className="product-details section-space about-section-custom">
        <Container>
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Get to Know Us</h6>
            <h3 className="sec-title__title">Our Story & Mission</h3>
          </div>

          <Row className="gutter-y-30 align-items-center mt-4">
            <Col lg={6} xl={6}>
              <PhotoSwipeGallery>
                <div
                  className="product-details__img wow fadeInLeft"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <img
                    src="https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771085871/SDVG_td9bmw.webp"
                    alt={name}
                    className="img-fluid"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                  <div className="product-details__img-search">
                    <Item
                      original={image}
                      thumbnail={image}
                      width="800"
                      height="800"
                    >
                      {({ ref, open }) => (
                        <a
                          className="img-popup"
                          href="#"
                          ref={ref}
                          onClick={(e) => {
                            e.preventDefault();
                            open(e);
                          }}
                        >
                          <span className="icon-search"></span>
                        </a>
                      )}
                    </Item>
                  </div>
                </div>
              </PhotoSwipeGallery>
            </Col>

            <Col lg={6} xl={6}>
              <div className="product-details__content">
                <div
                  className="product-details__top wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <h3 className="product-details__title">
                    A Travel Space Built For You And Your People
                  </h3>
                </div>

                <div className="product-details__divider"></div>

                <div
                  className="product-details__excerpt wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <p
                    className="product-details__excerpt-text1"
                    style={{ marginBottom: "15px" }}
                  >
                    At <strong>Enroute Trips</strong>, we believe travel is more
                    than just visiting places - it’s about collecting moments,
                    building connections, and discovering new sides of yourself.
                  </p>
                  <p
                    className="product-details__excerpt-text1"
                    style={{ marginBottom: "15px" }}
                  >
                    Born from the legacy of the well-known{" "}
                    <strong>Enroute Tour N Travel</strong>, Enroute Trips was
                    created by a group of dynamic minds who were crazy about
                    travel and shared one simple idea - why not build a
                    community of <em>befikre</em> travellers who explore freely
                    and fearlessly.
                  </p>
                  <p
                    className="product-details__excerpt-text1"
                    style={{ marginBottom: "15px" }}
                  >
                    That’s how we started curating budget friendly weekend
                    getaways. Now we design thoughtfully designed trips for
                    young explorers, friend groups, couples, and families who
                    want meaningful experiences without the stress of planning.
                  </p>
                  <p className="product-details__excerpt-text1">
                    From the serene landscapes of Chopta and Tirthan Valley to
                    the deserts of Jaisalmer and the charm of Udaipur, we curate
                    unforgettable weekend escapes to destinations like Chakrata,
                    Auli, Spiti Valley, and many more.
                  </p>

                  <div
                    className="mt-4 p-3"
                    style={{
                      borderLeft: "4px solid var(--gotur-base)",
                      backgroundColor: "rgba(99, 171, 69, 0.05)",
                    }}
                  >
                    <p
                      className="product-details__excerpt-text1"
                      style={{ margin: 0, fontWeight: "500" }}
                    >
                      Don’t see your destination? Connect with us and we’ll
                      customise a trip and location just for you.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div
          className="testimonials-two__element"
          style={{ width: "165px", height: "241px" }}
        >
          <DynamicImage src="custom/testimonial.webp" alt="" />
        </div> */}
      </section>
    </div>
  );
};

export default About;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { productDetails } from "@/data/productsDetailsData";
// import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";

// const About = () => {
//   const { name, image } = productDetails;

//   return (
//     <div>
//       <style>
//         {`
//           .pswp__img {
//             background: #fff !important;
//           }
//         `}
//       </style>
//       <section className="product-details section-space">
//         <Container>
//           {/* Added Section Heading */}
//           <div className="sec-title text-center">
//             <h6 className="sec-title__tagline">Get to Know Us</h6>
//             <h3 className="sec-title__title">Our Story & Mission</h3>
//           </div>

//           <Row className="gutter-y-30 align-items-center mt-4">
//             <Col lg={6} xl={6}>
//               <PhotoSwipeGallery>
//                 <div
//                   className="product-details__img wow fadeInLeft"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <img
//                     src="https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771085398/Untitled_qj6qn9.webp"
//                     alt={name}
//                     className="img-fluid"
//                   />
//                   <div className="product-details__img-search">
//                     <Item
//                       original={image}
//                       thumbnail={image}
//                       width="800"
//                       height="800"
//                     >
//                       {({ ref, open }) => (
//                         <a
//                           className="img-popup"
//                           href="#"
//                           ref={ref}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             open(e);
//                           }}
//                         >
//                           <span className="icon-search"></span>
//                         </a>
//                       )}
//                     </Item>
//                   </div>
//                 </div>
//               </PhotoSwipeGallery>
//             </Col>

//             <Col lg={6} xl={6}>
//               <div className="product-details__content">
//                 <div
//                   className="product-details__top wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <h3 className="product-details__title">
//                     A Travel Space Built For You And Your People
//                   </h3>
//                 </div>

//                 <div className="product-details__divider"></div>

//                 <div
//                   className="product-details__excerpt wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "15px" }}
//                   >
//                     At <strong>Enroute Trips</strong>, we believe travel is more
//                     than just visiting places - it’s about collecting moments,
//                     building connections, and discovering new sides of yourself.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "15px" }}
//                   >
//                     Born from the legacy of the well-known{" "}
//                     <strong>Enroute Tour N Travel</strong>, Enroute Trips was
//                     created by a group of dynamic minds who were crazy about
//                     travel and shared one simple idea - why not build a
//                     community of <em>befikre</em> travellers who explore freely
//                     and fearlessly.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "15px" }}
//                   >
//                     That’s how we started curating budget friendly weekend
//                     getaways. Now we design thoughtfully designed trips for
//                     young explorers, friend groups, couples, and families who
//                     want meaningful experiences without the stress of planning.
//                   </p>
//                   <p className="product-details__excerpt-text1">
//                     From the serene landscapes of Chopta and Tirthan Valley to
//                     the deserts of Jaisalmer and the charm of Udaipur, we curate
//                     unforgettable weekend escapes to destinations like Chakrata,
//                     Auli, Spiti Valley, and many more.
//                   </p>

//                   <div className="mt-4">
//                     <p
//                       className="product-details__excerpt-text1"
//                       //   style={{ fontWeight: "600", color: "var(--gotur-base)" }}
//                     >
//                       Don’t see your destination? Connect with us and we’ll
//                       customise a trip and location just for you.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default About;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "gatsby";
// import { productDetails } from "@/data/productsDetailsData";
// import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";

// const About = () => {
//   const {
//     name,
//     price,
//     description,
//     description2,
//     description3,
//     defultQuantity,
//     image,
//     reviews,
//   } = productDetails;
//   const quantity = 10;
//   return (
//     <div>
//       {/* Direct CSS Injection */}
//       <style>
//         {`
//           .pswp__img {
//             background: #fff !important;
//           }
//         `}
//       </style>
//       <section className="product-details section-space">
//         <Container>
//           <Row className="gutter-y-30 align-items-center">
//             <Col lg={6} xl={6}>
//               <PhotoSwipeGallery>
//                 <div
//                   className="product-details__img wow fadeInLeft"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <img
//                     src="https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771082793/enr_trip_gk6jgp.png"
//                     alt={name}
//                   />
//                   <div className="product-details__img-search">
//                     <Item
//                       original={image}
//                       thumbnail={image}
//                       width="500"
//                       height="500"
//                     >
//                       {({ ref, open }) => (
//                         <a
//                           className="img-popup"
//                           href="#"
//                           ref={ref}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             open(e);
//                           }}
//                         >
//                           <span className="icon-search"></span>
//                         </a>
//                       )}
//                     </Item>
//                   </div>
//                 </div>
//               </PhotoSwipeGallery>
//             </Col>
//             <Col lg={6} xl={6}>
//               <div className="product-details__content">
//                 <div
//                   className="product-details__top wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <h3 className="product-details__title">
//                     A Travel Space Built For You And Your People
//                   </h3>
//                   {/* <div className="product-details__price">${price}</div> */}
//                 </div>

//                 <div className="product-details__divider"></div>
//                 <div
//                   className="product-details__excerpt wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "10px" }}
//                   >
//                     At Enroute Trips, we believe travel is more than just
//                     visiting places - it’s about collecting moments, building
//                     connections, and discovering new sides of yourself.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "10px" }}
//                   >
//                     Born from the legacy of the well-known Enroute Tour N
//                     Travel, Enroute Trips was created by a group of dynamic
//                     minds who were crazy about travel and shared one simple idea
//                     - why not build a community of befikre travellers who
//                     explore freely and fearlessly.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "10px" }}
//                   >
//                     That’s how we started curating budget friendly weekend
//                     getaways.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "10px" }}
//                   >
//                     Now we design thoughtfully designed trips for young
//                     explorers, friend groups, couples, and families who want
//                     meaningful experiences without the stress of planning.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "10px" }}
//                   >
//                     From the serene landscapes of Chopta and Tirthan Valley to
//                     the deserts of Jaisalmer and the charm of Udaipur, we curate
//                     unforgettable weekend escapes to some of the most loved
//                     destinations including Chakrata, Auli, Spiti Valley, and
//                     many more.
//                   </p>
//                   <p
//                     className="product-details__excerpt-text1"
//                     style={{ marginBottom: "10px" }}
//                   >
//                     Don’t see your destination? Connect with us and we’ll
//                     customise a trip and location just for you.
//                   </p>
//                 </div>

//                 <div
//                   className="product-details__buttons wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   {/* <Link to="cart" className="gotur-btn gotur-btn--base">
//                     ADD TO CART{" "}
//                     <span className="product-details__buttons__icon">
//                       <i className="icon-shopping-carts"></i>
//                     </span>
//                   </Link> */}
//                   {/* <Link to="cart" className="gotur-btn">
//                     ADD TO WISHLIST
//                   </Link> */}
//                 </div>
//                 {/* <div
//                   className="product-details__socials wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="500ms"
//                 >
//                   <h4 className="product-details__socials__title">
//                     share with friends :
//                   </h4>
//                   <Link to="https://facebook.com">
//                     <i className="icon-facebook" aria-hidden="true"></i>
//                     <span className="sr-only">Facebook</span>
//                   </Link>
//                   <Link to="https://twitter.com">
//                     <i className="icon-twitter" aria-hidden="true"></i>
//                     <span className="sr-only">Twitter</span>
//                   </Link>
//                   <Link to="https://instagram.com">
//                     <i className="icon-linkedin" aria-hidden="true"></i>
//                     <span className="sr-only">Linked In</span>
//                   </Link>
//                   <Link to="https://youtube.com">
//                     <i className="icon-youtube" aria-hidden="true"></i>
//                     <span className="sr-only">Youtube</span>
//                   </Link>
//                 </div> */}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default About;

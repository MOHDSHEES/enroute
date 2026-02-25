"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import { Link } from "gatsby";
// import Card from "../../card";
import Card2 from "../../card2";
// import { tourListingData } from "@/data/tourListingData";
// import Pagination from "@/components/common/Pagination/Pagination";
// import image1 from "@/assets/images/blog/listing-list-4-1.jpg";

const CategoryDetailSection = ({ category, trips }) => {
  //   console.log(category);
  //   console.log(trips);

  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  return (
    <>
      <section className="tour-listing-page section-space">
        <Container>
          {category.description && (
            <div className="product-details__description">
              <h3
                className="product-details__description__title wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                Description
              </h3>
              {/* <p
              className="product-details__description__text wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              itaque quas cum et, ducimus nobis unde tempora deleniti doloribus!
              Dolorem, neque velit. Beatae quas inventore sunt eum magnam
              placeat temporibus.
            </p> */}
              <p
                className="product-details__description__text wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
                style={{ whiteSpace: "pre-line" }} // This is the magic line
              >
                {category.description}
              </p>
              {/* <p
              className="product-details__description__text wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              {category.description}
            </p> */}
            </div>
          )}
        </Container>
        <Container>
          <PhotoSwipeGallery>
            <Row className="gutter-y-30 gutter-x-30">
              {/* {trips?.map((item) => (
                <Col lg={4} md={6} key={item.id}>
                  <Card item={item} />
                </Col>
            
              ))} */}
              {trips && trips.length > 0 ? (
                trips.map((item) => (
                  // <Col lg={4} md={6} key={item.id}>
                  <Card2 item={item} />
                  // </Col>
                ))
              ) : (
                /* EMPTY STATE MESSAGE */
                <Col xs={12}>
                  <div
                    className="text-center section-space"
                    style={{
                      padding: "60px 20px",
                      backgroundColor: "#f9f9f9",
                      borderRadius: "20px",
                      border: "2px dashed #eee",
                    }}
                  >
                    <div className="sec-title">
                      <h3
                        className="sec-title__title"
                        style={{ fontSize: "24px" }}
                      >
                        No Trips Found
                      </h3>
                      <p className="mt-3">
                        We couldn't find any trips in this category right now.
                        Please check back later or explore our other exciting
                        tours!
                      </p>
                      <Link to="/" className="trevlo-btn trevlo-btn--base mt-4">
                        <span>Explore More</span>
                      </Link>
                    </div>
                  </div>
                </Col>
              )}
              {/* <Col xs={12}>
                <Pagination />
              </Col> */}
            </Row>
          </PhotoSwipeGallery>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default CategoryDetailSection;

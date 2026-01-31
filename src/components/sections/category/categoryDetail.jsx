"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import { Link } from "gatsby";
// import { tourListingData } from "@/data/tourListingData";
// import Pagination from "@/components/common/Pagination/Pagination";
import image1 from "@/assets/images/blog/listing-list-4-1.jpg";

const CategoryDetailSection = ({ category, trips }) => {
  //   console.log(category);
  //   console.log(trips);

  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  return (
    <>
      <section className="tour-listing-page section-space">
        <Container>
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
            >
              {category.description}
            </p>
          </div>
        </Container>
        <Container>
          <PhotoSwipeGallery>
            <Row className="gutter-y-30 gutter-x-30">
              {trips?.map((item) => (
                <Col lg={4} md={6} key={item.id}>
                  <div className="item" key={item.id}>
                    <div
                      className="listing-card-four wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="listing-card-four__image">
                        <img src={item.thumbnail_url} alt={item.name} />

                        <ul className="listing-card-four__meta list-unstyled">
                          <li>
                            <Link to={`/trip/details/${item.id}`}>
                              {" "}
                              <span className="listing-card-four__meta__icon">
                                {" "}
                                <i className=""></i>{" "}
                              </span>
                              Age {item.age_group}
                            </Link>
                          </li>
                          <li>
                            <Link to={`/trip/details/${item.id}`}>
                              {" "}
                              <span className="listing-card-four__meta__icon">
                                {" "}
                                <i className={"calendar"}></i>{" "}
                              </span>
                              {item.duration_days} Days, {item.duration_nights}{" "}
                              Nights
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-card-four__content">
                        {/* <div className='listing-card-four__rating'>
                            <span>({item.reviews} Review)</span>
                            {[...Array(item.rating)].map((_, i) => (
                              <i key={i} className='icon-star'></i>
                            ))}
                          </div> */}
                        <h3
                          className="listing-card-four__title"
                          style={{ marginTop: "24px" }}
                        >
                          <Link to={`/trip/details/${item.id}`}>
                            {item.name}
                          </Link>
                        </h3>

                        <div className="listing-card-four__content__btn">
                          <div className="listing-card-four__price">
                            <span className="listing-card-four__price__sub">
                              Starting from
                            </span>
                            <span className="listing-card-four__price__number">
                              {item.starting_price}
                            </span>
                          </div>
                          <Link
                            to={`/trip/details/${item.id}`}
                            className="listing-card-four__btn gotur-btn"
                          >
                            Book Now{" "}
                            <span className="icon">
                              <i className="icon-right"></i>{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}

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

"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import { Link } from "gatsby";
import { tourListingData } from "@/data/tourListingData";
import Pagination from "@/components/common/Pagination/Pagination";

interface FeatureOneItem {
  id: number;
  image: string;
  title: string;
  link: string;
  price: string;
  rating: number;
  reviews: number;
  videoId: string;
  discount: string;
  meta: Metadata[];
}
interface Metadata {
  id: number;
  title: string;
  icon: string;
}
const TourListing: React.FC = () => {
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
              Product Description
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi sed tenetur neque consequatur totam! Consequuntur, quo
              doloremque dolor ipsam illo distinctio facilis ea. Obcaecati ipsa
              cupiditate dolor. Debitis, odio dolores.
            </p>
          </div>
        </Container>
        <Container>
          <PhotoSwipeGallery>
            <Row className="gutter-y-30 gutter-x-30">
              {tourListingData.items.map((item: FeatureOneItem) => (
                <Col lg={4} md={6} key={item.id}>
                  <div className="item" key={item.id}>
                    <div
                      className="listing-card-four wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="listing-card-four__image">
                        <img src={item.image} alt={item.title} />
                        <div className="listing-card-four__btn-group">
                          {item.discount && (
                            <div className="listing-card-four__discount">
                              -{item.discount}% off
                            </div>
                          )}
                          <div className="listing-card-four__featured">
                            Featured
                          </div>
                        </div>
                        <div className="listing-card-four__btns">
                          <a href="#">
                            <i className="far fa-heart"></i>
                          </a>
                          <div className="listing-card-four__btns__hover">
                            <Item
                              original={item.image}
                              thumbnail={item.image}
                              width="370"
                              height="257"
                            >
                              {({ ref, open }) => (
                                <a
                                  className="listing-card-four__popup card__popup"
                                  ref={ref}
                                  onClick={open}
                                >
                                  <span className="icon-image"></span>
                                </a>
                              )}
                            </Item>

                            <a
                              className="video-popup"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setOpen(true);
                                setVideoId(item.videoId);
                              }}
                            >
                              <span className="icon-video"></span>
                            </a>
                          </div>
                        </div>
                        <ul className="listing-card-four__meta list-unstyled">
                          {item.meta.map((meta: Metadata) => (
                            <li>
                              <a href="tour-listing-details-2">
                                {" "}
                                <span className="listing-card-four__meta__icon">
                                  {" "}
                                  <i className={meta.icon}></i>{" "}
                                </span>
                                {meta.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="listing-card-four__content">
                        <div className="listing-card-four__rating">
                          <span>({item.reviews} Review)</span>
                          {[...Array(item.rating)].map((_, i) => (
                            <i key={i} className="icon-star"></i>
                          ))}
                        </div>
                        <h3 className="listing-card-four__title">
                          <a href={item.link}>{item.title}</a>
                        </h3>

                        <div className="listing-card-four__content__btn">
                          <div className="listing-card-four__price">
                            <span className="listing-card-four__price__sub">
                              Per Day
                            </span>
                            <span className="listing-card-four__price__number">
                              {item.price}
                            </span>
                          </div>
                          <a
                            href={item.link}
                            className="listing-card-four__btn gotur-btn"
                          >
                            Book Now{" "}
                            <span className="icon">
                              <i className="icon-right"></i>{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}

              <Col xs={12}>
                <Pagination />
              </Col>
            </Row>
          </PhotoSwipeGallery>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default TourListing;

"use client";
import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Pagination from "@/components/common/Pagination/Pagination";
import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import { tourListingListData } from "@/data/tourListingListData";
import { useLocation } from "@reach/router";
import TourSidebar from "@/components/common/TourSidebar/TourSidebar";

interface TourListingData {
  tours: {
    image: string;
    title: string;
    location: string;
    duration: string;
    price: string;
    reviews?: number;
    rating?: number;
    featured?: boolean;
    videoId: string;
  }[];
}

const TourListingList: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const { tours }: TourListingData = tourListingListData;
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <section className='tour-listing-page section-space'>
        <PhotoSwipeGallery>
          <Container>
            <Row
              className={`${
                pathname === "/tour-listing-list-left/" ||
                pathname === "/tour-listing-list-right/"
                  ? "gutter-y-60"
                  : "justify-content-center"
              }`}
            >
              {pathname === "/tour-listing-list-left/" && (
                <Col lg={4}>
                  <TourSidebar />
                </Col>
              )}
              <Col lg={8}>
                <Row className='gutter-y-30'>
                  {tours.map((tour, index) => (
                    <Col md={12} key={index}>
                      <div
                        className='listing-list-card wow fadeInUp animated'
                        data-wow-duration='1500ms'
                        data-wow-delay={`${100 * (index + 1)}ms`}
                      >
                        <Row className='align-items-center'>
                          <Col md={4}>
                            <div className='listing-list-card__image'>
                              <img src={tour.image} alt={tour.title} />
                              <a
                                href='tour-listing-details-2'
                                className='listing-list-card__overlay'
                              ></a>
                              <div className='listing-list-card__btn-group'>
                                {tour.featured && (
                                  <div className='listing-list-card__featured'>
                                    Featured
                                  </div>
                                )}
                              </div>
                              <div className='listing-list-card__btns'>
                                <Item
                                  original={tour.image}
                                  thumbnail={tour.image}
                                  width='291'
                                  height='237'
                                >
                                  {({ ref, open }) => (
                                    <a
                                      className='listing-list-card__popup card__popup'
                                      ref={ref}
                                      onClick={open}
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
                            </div>
                          </Col>
                          <Col md={8}>
                            <div className='listing-list-card__content'>
                              <h3 className='listing-list-card__title'>
                                <a href='tour-listing-details-2'>
                                  {tour.title}
                                </a>
                              </h3>
                              <div className='listing-list-card__content__inner'>
                                <ul className='listing-list-card__meta list-unstyled'>
                                  <li>
                                    <a href='tour-listing-details-2'>
                                      <span className='listing-list-card__meta__icon'>
                                        <i className='icon-pin'></i>
                                      </span>
                                      {tour.location}
                                    </a>
                                  </li>
                                  <li>
                                    <a href='tour-listing-details-2'>
                                      <span className='listing-list-card__meta__icon'>
                                        <i className='icon-calendar'></i>
                                      </span>
                                      {tour.duration}
                                    </a>
                                  </li>
                                </ul>
                                <div className='listing-list-card__price'>
                                  <h5 className='listing-list-card__price__number'>
                                    {tour.price}
                                    <span>/Per day</span>
                                  </h5>
                                  <div className='listing-list-card__rating'>
                                    <i className='icon-star'></i>
                                    <span>
                                      {tour.rating} ({tour.reviews} Reviews)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  ))}
                  <Col lg={12}>
                    <Pagination />
                  </Col>
                </Row>
              </Col>
              {pathname === "/tour-listing-list-right/" && (
                <Col lg={4}>
                  <TourSidebar />
                </Col>
              )}
            </Row>
          </Container>
        </PhotoSwipeGallery>
      </section>
      <VideoModal isOpen={isOpen} id={videoId} setOpen={setOpen} />
    </>
  );
};

export default TourListingList;

"use client";

import React, { useState } from "react";

import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
import { featurePackageData } from "@/data/featureTwoData";
import image1 from "@/assets/images/blog/listing-list-4-1.jpg";
import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";

import loadable from "@loadable/component";
import { Link } from "gatsby";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const FeatureTwo = ({ trending, extraClass, id }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  console.log(trending);

  return (
    <>
      <section
        className={`feature-package feature-package--two ${
          extraClass ? extraClass : ""
        }`}
        id={id}
      >
        <div className="container">
          <div className="feature-package__top">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="sec-title">
                  <h6 className="sec-title__tagline bw-split-in-right">
                    <TextAnimation
                      text={featurePackageData.subtitle}
                      animationType="right"
                    />
                  </h6>
                  <h3 className="sec-title__title bw-split-in-left d-flex gap-2">
                    <TextAnimation text={"Trending"} animationType="left" />
                    <span>
                      <TextAnimation
                        text={featurePackageData.titleSpan2}
                        animationType="left"
                      />
                    </span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-package__bottom__nav">
                  <button className="feature-package__carousel__nav--left">
                    <span className="icon-arrow-left"></span>
                  </button>
                  <button className="feature-package__carousel__nav--right">
                    <span className="icon-arrow-right"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="feature-package__inner">
            <div className="feature-package__carousel gotur-owl__carousel gotur-owl__carousel--custom-nav gotur-owl__carousel--with-shadow owl-carousel owl-theme owl-loaded owl-drag">
              <PhotoSwipeGallery>
                <TinySlider
                  settings={{
                    items: 1,
                    gutter: 30,
                    loop: false,
                    smartSpeed: 700,
                    nav: false,
                    dots: false,
                    autoplay: false,
                    controlsContainer: ".feature-package__bottom__nav",
                    responsive: {
                      0: { items: 1 },
                      576: { items: 2 },
                      768: { items: 2 },
                      992: { items: 3 },
                      1199: { items: 3 },
                      1500: { items: 4 },
                    },
                  }}
                >
                  {trending.map((item) => (
                    <div className="item" key={item.id}>
                      <div
                        className="listing-card-four wow fadeInUp"
                        data-wow-duration="1500ms"
                      >
                        <div
                          className="listing-card-four__image"
                          style={{
                            width: "438px",
                            height: "300px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <img
                            src={
                              item.thumbnail_url ? item.thumbnail_url : image1
                            }
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover", // Ensures no stretching
                              display: "block",
                            }}
                          />

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
                                {item.duration_days} Days,{" "}
                                {item.duration_nights} Nights
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
                  ))}
                  {/* {featurePackageData.items.map((item) => (
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
                            <Link to="#">
                              <i className="far fa-heart"></i>
                            </Link>
                            <div className="listing-card-four__btns__hover">
                              <Item
                                original={item.image}
                                thumbnail={item.image}
                                width="351"
                                height="246"
                              >
                                {({ ref, open }) => (
                                  <a
                                    className="listing-card-four__popup card__popup"
                                    ref={ref}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      open(e);
                                    }}
                                    href="#"
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
                            {item.meta.map((meta) => (
                              <li key={meta.id}>
                                <Link to="tour-listing-details-2">
                                  {" "}
                                  <span className="listing-card-four__meta__icon">
                                    {" "}
                                    <i className={meta.icon}></i>{" "}
                                  </span>
                                  {meta.title}
                                </Link>
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
                            <Link to={item.link}>{item.title}</Link>
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
                            <Link
                              to={item.link}
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
                  ))} */}
                </TinySlider>
              </PhotoSwipeGallery>
            </div>
          </div>
        </div>

        {/* Element Shapes */}
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default FeatureTwo;

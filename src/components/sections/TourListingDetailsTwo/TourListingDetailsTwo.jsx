"use client";
import React, { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";

import tourDetailsOneData, { mapEmbedUrl } from "@/data/tourDetailsOneData";
import { Accordion, Col, Container } from "react-bootstrap";
import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
import { contactFormFields } from "@/data/contactData";
import dayjs from "dayjs";
// import FullWidthCalendar from "../Calender/Calender";
import Slider from "react-slick";
// interface ContactFormField {
//   name: string;
//   label: string;
//   placeholder: string;
//   type: "text" | "email" | "textarea";
// }
// interface Item {
//   id: number;
//   image: string;
//   title: string;
//   link: string;
//   price: string;
//   rating: number;
//   reviews: number;
//   videoId: string;
//   discount: string;
//   meta: Metadata[];
// }
// interface Metadata {
//   id: number;
//   title: string;
//   icon: string;
// }
// interface TourDetailsOneData {
//   title: string;
//   titleTwo: string;
//   overview: string;
//   reviews: number;
//   location: string;
//   activitiesType: string;
//   traveler: number;
//   activateDay: string;
//   price: number;
//   overviewTitle: string;
//   topDestinations: string;
//   sliderImages: string[];
//   slider2Images: string[];
//   highlightList: string[];
//   amenities: string[];
//   amenitiesTwo: string[];
//   relatedTours: Item[];
//   comments: Comment[];
//   images: string[];
//   faqs: { question: string; answer: string }[];
// }

// interface Comment {
//   name: string;
//   date: string;
//   text: string;
//   avatar: string;
// }
const TourListingTwoDetails = ({ tourData }) => {
  console.log(tourData);
  const [showMore, setShowMore] = useState(false);
  const [showMoreNotes, setShowMoreNotes] = useState(false);
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const formFields = contactFormFields;
  const {
    title,
    titleTwo,
    overview,
    overviewTitle,
    reviews,
    location,
    activitiesType,
    activateDay,
    traveler,
    price,
    comments,
    topDestinations,
    relatedTours,
    slider2Images,
    amenities,
    amenitiesTwo,
    highlightList,
    images,
    faqs,
  } = tourDetailsOneData;
  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    gutter: 30,
    loop: false,
    nav: false,
    autoplay: false,
    controls: false,
    mouseDrag: true,
    centerPadding: "230px",

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "230px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
    //   responsive: [
    //     { breakpoint:1199,
    //       settings:{slidesToShow:3, centerPadding: "60px",}

    //     },
    //     { breakpoint:992,
    //       settings:{slidesToShow:3,}

    //     },
    //     { breakpoint:768,
    //       settings:{slidesToShow:2,}

    //     },
    //     { breakpoint:575,
    //       settings:{slidesToShow:2,}

    //     },

    //      { breakpoint:0,
    //       settings:{slidesToShow:1,}

    //     },

    //  ]
  };

  const [extraBooking, setExtraBooking] = useState({
    perBooking: false,
    perPerson: false,
  });

  // Optional: dynamic ticket message
  const [ticketMessage, setTicketMessage] = useState(
    "Please, Select Date First"
  );

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setExtraBooking((prev) => ({
      ...prev,
      perBooking: id === "check8" ? checked : prev.perBooking,
      perPerson: id === "check9" ? checked : prev.perPerson,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !startTime) {
      alert("Please select both date and time.");
      return;
    }

    const bookingData = {
      date: startDate.toISOString(),
      time: startTime.toISOString(),
      extras: extraBooking,
      tickets: ticketMessage,
    };

    console.log("Booking Submitted:", bookingData);

    // You could send bookingData to your API here
  };

  const handleComment = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Form Submitted:", data);
  };
  return (
    <>
      {/* Carousel Section */}
      {/* <div
        className="tour-one section-space-top wow fadeInUp animated"
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
        <div className="tour-one__carousel tour-two__carousel gotur-owl__carousel owl-carousel owl-theme owl-loaded owl-drag">
          <Slider {...settings}>
            {slider2Images.map((img, idx) => (
              <div key={idx}>
                <div className="item">
                  <div className="tour-one__item">
                    <img src={img} alt="destination" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      <section className="tour-listing-details section-space-top section-space-bottom">
        {/* Destination Section */}
        <div
          className="tour-listing-details__destination wow fadeInUp animated"
          data-wow-duration="1500ms"
          data-wow-delay="500ms"
        >
          <Container>
            <div className="tour-listing-details__destination__inner">
              <div className="tour-listing-details__destination__left">
                <h4 className="tour-listing-details__destination__title">
                  {tourData?.name}
                </h4>
                {tourData?.categories?.name && (
                  <p className="tour-listing-details__destination__category">
                    {tourData.categories.name}
                  </p>
                )}
                {/* <div className='tour-listing-details__destination__revue'>
                  <div className='tour-listing-details__destination__ratings-box'>
                    <span>({reviews} Review)</span>
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className='icon-star'></i>
                    ))}
                  </div>
                  <div className='tour-listing-details__destination__posted'>
                    <i className='icon-pin1'></i>
                    <p className='tour-listing-details__destination__posted-text'>
                      {location}
                    </p>
                  </div>
                </div> */}
              </div>
              {/* <div className="tour-listing-details__destination__right">
                <a
                  href="javascript:void(0)"
                  className="tour-listing-details__destination__btn gotur-btn"
                >
                  Share <i className="icon-share"></i>
                </a>
                <div className="tour-listing-details__destination__social__list">
                  <a href="https://twitter.com">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://pinterest.com">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                  </a>
                  <a href="https://instagram.com">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </Container>
        </div>

        {/* Info Section */}
        <div
          className="tour-listing-details__info-area wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="500ms"
        >
          <Container>
            <ul className="tour-listing-details__info-area__info list-unstyled">
              <li>
                <div className="tour-listing-details__info-area__icon">
                  <i className="icon-location"></i>
                </div>
                <div className="tour-listing-details__info-area__content">
                  <h5 className="tour-listing-details__info-area__title">
                    Age Group
                  </h5>
                  <p className="tour-listing-details__info-area__text">
                    {tourData?.age_group} Years
                  </p>
                </div>
              </li>
              <li>
                <div className="tour-listing-details__info-area__icon">
                  <i className="icon-travel-and-tourism"></i>
                </div>
                <div className="tour-listing-details__info-area__content">
                  <h5 className="tour-listing-details__info-area__title">
                    Starting Price
                  </h5>
                  <p className="tour-listing-details__info-area__text">
                    &#8377;
                    {tourData?.starting_price}
                  </p>
                </div>
              </li>
              <li>
                <div className="tour-listing-details__info-area__icon">
                  <i className="icon-clock"></i>
                </div>
                <div className="tour-listing-details__info-area__content">
                  <h5 className="tour-listing-details__info-area__title">
                    Durations
                  </h5>
                  <p className="tour-listing-details__info-area__text">
                    {tourData?.duration_days} Days, {tourData?.duration_nights}{" "}
                    Nights
                  </p>
                </div>
              </li>
              <li>
                <div className="tour-listing-details__info-area__icon">
                  <i className="icon-group"></i>
                </div>
                <div className="tour-listing-details__info-area__content">
                  <h5 className="tour-listing-details__info-area__title">
                    Pickup/Drop
                  </h5>
                  <p className="tour-listing-details__info-area__text">
                    {tourData?.pickup_point} / {tourData?.drop_point}
                  </p>
                </div>
              </li>
              <li>
                <a href="" className="gotur-btn">
                  Get Itinary
                </a>
              </li>
            </ul>
          </Container>
        </div>

        <Container>
          <div className="row gutter-y-30">
            <div className="col-lg-8">
              <div className="tour-listing-details__content">
                <div
                  className="tour-listing-details__content__item tour-listing-details__content__text wow fadeInUp animated"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <h4 className="tour-listing-details__title">
                    {overviewTitle}
                  </h4>

                  <p
                    className={`tour-listing-details__text ${
                      showMore ? "expanded" : "clamped"
                    }`}
                  >
                    {tourData?.description}
                  </p>

                  <button
                    type="button"
                    className="read-more-btn"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </button>
                </div>

                {/* <div
                  className="tour-listing-details__content__item tour-listing-details__content__text wow fadeInUp animated"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <h4 className="tour-listing-details__title">
                    {overviewTitle}
                  </h4>
                  <p className="tour-listing-details__text">
                    {tourData?.description}
                  </p>
                </div> */}
                <div className="tour-listing-details__content__item tour-listing-details__ture-plan">
                  <h4 className="tour-listing-details__title">Tour Plan</h4>
                  <div className="faq-page__accordion faq-accordion gotur-accordion">
                    <Accordion defaultActiveKey="0">
                      {tourData?.itineraries?.map((iti, idx) => (
                        <Accordion.Item eventKey={idx.toString()} key={idx}>
                          <Accordion.Header>
                            <div className="accordion-title">
                              <h4 className="accordion-title__text">
                                : {iti.title}
                                <span className="accordion-title__icon"></span>
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="accordion-content">
                              <div className="inner">
                                {iti.description?.map((desc, idx) => {
                                  return (
                                    <p
                                      eventKey={idx.toString()}
                                      key={idx}
                                      className="inner__text"
                                    >
                                      {desc}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>

                <div
                  className="tour-listing-details__content__item tour-listing-details__amenities wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <h4 className="tour-listing-details__title">
                    Inclusion / Exclusion
                  </h4>
                  <div className="tour-listing-details__amenities__inner">
                    <ul className="tour-listing-details__amenities__list">
                      {tourData?.inclusion?.map((amenity, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {amenity}
                        </li>
                      ))}
                    </ul>
                    <ul className="tour-listing-details__amenities__list tour-listing-details__amenities__list--two">
                      {tourData?.exclusion?.map((amenity, index) => (
                        <li key={index}>
                          <i className="fas fa-times"></i> {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Notes Section */}
                {tourData?.note && (
                  <div
                    className="tour-listing-details__content__item tour-listing-details__list wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="500ms"
                  >
                    <h4 className="tour-listing-details__title">Notes</h4>

                    <p
                      className={`tour-listing-details__text ${
                        showMoreNotes ? "expanded" : "clamped"
                      }`}
                    >
                      {tourData?.note}
                    </p>
                    <button
                      type="button"
                      className="read-more-btn"
                      onClick={() => setShowMoreNotes(!showMoreNotes)}
                    >
                      {showMoreNotes ? "Read Less" : "Read More"}
                    </button>
                  </div>
                )}
                {/* Highlight List Section */}
                {tourData?.things_to_pack && (
                  <div
                    className="tour-listing-details__content__item tour-listing-details__list wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="500ms"
                  >
                    <h4 className="tour-listing-details__title">
                      Things To Pack
                    </h4>
                    <ul className="tour-listing-details__content__list">
                      {tourData?.things_to_pack.map((item, index) => (
                        <li key={index}>
                          <i className="icon-check-star"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tour Amenities Section */}
                {/* <div
                  className="tour-listing-details__content__item tour-listing-details__amenities wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <h4 className="tour-listing-details__title">
                    Inclusion / Exclusion
                  </h4>
                  <div className="tour-listing-details__amenities__inner">
                    <ul className="tour-listing-details__amenities__list">
                      {tourData?.inclusion?.map((amenity, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {amenity}
                        </li>
                      ))}
                   
                    </ul>
                    <ul className="tour-listing-details__amenities__list tour-listing-details__amenities__list--two">
                      {tourData?.exclusion?.map((amenity, index) => (
                        <li key={index}>
                          <i className="fas fa-times"></i> {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <div
                  className="tour-listing-details__content__item tour-listing-details__thumb wow fadeInUp animated"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <div className="row gutter-y-30">
                    {tourData.trip_gallery.map((img, idx) => (
                      <div className="col-md-6" key={idx}>
                        <div className="destination-details__content__thumb__item">
                          <img src={img.image_url} alt="gallery" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tour Plan */}

                {/* <div className="tour-listing-details__content__item tour-listing-details__ture-plan">
                  <h4 className="tour-listing-details__title">Tour Plan</h4>
                  <div className="faq-page__accordion faq-accordion gotur-accordion">
                    <Accordion
                      defaultActiveKey="0"

                    >
                      {tourData?.itineraries?.map((iti, idx) => (
                        <Accordion.Item eventKey={idx.toString()} key={idx}>
                          <Accordion.Header>
                            <div className="accordion-title">
                              <h4 className="accordion-title__text">
                                : {iti.title}
                                <span className="accordion-title__icon"></span>
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="accordion-content">
                              <div className="inner">
                                {iti.description?.map((desc, idx) => {
                                  return (
                                    <p
                                      eventKey={idx.toString()}
                                      key={idx}
                                      className="inner__text"
                                    >
                                      {desc}
                                    </p>
                                  );
                                })}

                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}

                    </Accordion>
                  </div>
                </div> */}
                {/* Related Tours Section */}
                <div className="tour-listing-details__content__item tour-listing-details__ture-list">
                  <h4 className="tour-listing-details__title">
                    Related Tour List
                  </h4>
                  <PhotoSwipeGallery>
                    <div className="row">
                      {relatedTours.map((item, index) => (
                        <Col lg={6} md={6} key={index}>
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
                                    href="https://www.youtube.com/watch?v=0MuL8fd3pb8"
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
                        </Col>
                      ))}
                    </div>
                  </PhotoSwipeGallery>
                </div>
                <div
                  className="tour-listing-details__content__item tour-listing-details__calender wow fadeInUp animated"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  {/* <h4
                    className='tour-listing-details__title wow fadeInUp animated'
                    data-wow-duration='1500ms'
                    data-wow-delay='500ms'
                  >
                    Calendar Price
                  </h4> */}
                </div>
                {/* Comments
                <div className='tour-listing-details__content__item tour-listing-details__reviews'>
                  <h3
                    className='tour-listing-details__title wow fadeInUp animated '
                    data-wow-duration='1500ms'
                    data-wow-delay='500ms'
                  >
                    {comments.length} Reviews
                  </h3>
                  <ul className='list-unstyled product-details__comment__list'>
                    {comments.map((comment, index) => (
                      <li
                        key={index}
                        className='product-details__comment__card wow fadeInUp animated'
                        data-wow-delay='100ms'
                        data-wow-duration='1500ms'
                      >
                        <div className='product-details__comment__card__image'>
                          <img src={comment.avatar} alt={comment.name} />
                        </div>
                        <div className='product-details__comment__card__content'>
                          <div className='product-details__comment__card__top'>
                            <div className='product-details__comment__card__info'>
                              <h3 className='product-details__comment__card__title'>
                                {comment.name}
                              </h3>
                              <p className='product-details__comment__card__date'>
                                {comment.date}
                              </p>
                            </div>
                            <div className='product-details__comment__card__star'>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                            </div>
                          </div>
                          <p className='product-details__comment__card__text'>
                            {comment.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* <div className='tour-listing-details__content__item tour-listing-details__add-reviews'>
                  <div className='contact-page__contact'>
                    <h2 className='tour-listing-details__title wow fadeInUp animated'>
                      Add a Review
                    </h2>
                    <div
                      className='product-details__form-ratings wow fadeInUp animated'
                      data-wow-duration='1500ms'
                      data-wow-delay='500ms'
                    >
                      <p className='product-details__form-ratings__label'>
                        Your Rating*
                      </p>
                      <span className='far fa-star'></span>
                      <span className='far fa-star'></span>
                      <span className='far fa-star'></span>
                      <span className='far fa-star'></span>
                      <span className='far fa-star'></span>
                    </div>
                    <form
                      className='comments-form__form contact-form-validated product-details__form__form form-one wow fadeInUp animated'
                      onSubmit={handleComment}
                    >
                      <div className='form-one__group'>
                        {formFields.map((field, index) => (
                          <div
                            key={index}
                            className={`form-one__control ${
                              field.type === "textarea"
                                ? "form-one__control--full"
                                : ""
                            }`}
                          >
                            <label htmlFor={field.name}>{field.label}</label>
                            {field.type === "textarea" ? (
                              <textarea
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                              ></textarea>
                            ) : (
                              <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                              />
                            )}
                          </div>
                        ))}
                        <div className='form-one__control form-one__control--full'>
                          <button
                            type='submit'
                            className='gotur-btn gotur-btn--base'
                          >
                            Send Message <i className='icon-arrow-right'></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tour-listing-details__sidebar">
                <div
                  className="tour-listing-details__sidebar__item tour-listing-details__sidebar__item-form wow fadeInUp animated"
                  data-wow-delay="0.4s"
                  data-wow-duration="1500ms"
                >
                  <h4
                    className="tour-listing-details__sidebar__title"
                    style={{ fontSize: "20px" }}
                  >
                    Dates
                  </h4>
                  <div className="sidebar-two__form">
                    <div
                      className="sidebar-two__form__inner contact-form-validated"
                      // onSubmit={handleSubmit}
                    >
                      <div
                        className="sidebar-two__form__control date-slots-container"
                        style={{ marginBottom: "10px" }}
                      >
                        {tourData?.trip_dates?.map((date) => (
                          <div key={date.id} className="date-slot">
                            <p className="date-slot__text">
                              {dayjs(date.start_date).format("DD MMM")} -{" "}
                              {dayjs(date.end_date).format("DD MMM")}
                            </p>
                          </div>
                        ))}
                      </div>

                      <h5
                        style={{ marginTop: "15px", fontSize: "20px" }}
                        className="tour-listing-details__sidebar__title"
                      >
                        Pricing
                      </h5>
                      <div
                        className="sidebar-two__form__control price-container"
                        style={{ marginBottom: "10px" }}
                      >
                        {tourData?.trip_costing?.map((price) => (
                          <div key={price.id} className="price-slot">
                            <p className="price-text">
                              {price.occupancy_type} :
                              <b> ₹{price.price_per_person.toLocaleString()}</b>{" "}
                              + 5% GST
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* <div className="sidebar-two__form__control">
                        <label htmlFor="checkout">Time:</label>
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                        />
                      </div>
                      <div className="sidebar-two__form__control">
                        <label htmlFor="checkout">Tickets:</label>
                        <input
                          id="checkout"
                          type="text"
                          name="checkout"
                          placeholder="Please, Select Date Fist"
                        />
                      </div>
                      <div className="sidebar-two__form__control sidebar-two__form__control--two">
                        <label
                          className="sidebar-two__form__control--title"
                          htmlFor="guests"
                        >
                          Add Extra:
                        </label>
                        <ul className="list-unstyled sidebar-two__form__checkbox">
                          <li>
                            <input type="checkbox" name="check8" id="check8" />
                            <label htmlFor="check8">
                              {" "}
                              <span> Services per booking</span>
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="check9" id="check9" />
                            <label htmlFor="check9">
                              <span>Services per person</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <ul className="list-unstyled sidebar-two__form__add-list">
                        <li>
                          <div className="sidebar-two__form__add">
                            Adult:<span>$20.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-two__form__add">
                            Youth: <span>$16.00</span>
                          </div>
                        </li>
                      </ul>
                      <div className="sidebar-two__form__total">
                        Total:<span>$36.00</span>
                      </div>
                      <button
                        type="submit"
                        className="gotur-btn gotur-btn--base"
                      >
                        Book Now <i className="icon-right"></i>
                      </button> */}
                    </div>
                  </div>
                </div>

                {/* <div
                  className="tour-listing-details__sidebar__item tour-listing-details__sidebar__item-location wow fadeInUp animated"
                  data-wow-delay="0.4s"
                  data-wow-duration="1500ms"
                >
                  <div className="tour-listing-details__sidebar__item-box">
                    <iframe
                      title="Google Map"
                      src={mapEmbedUrl}
                      allowFullScreen
                      className="w-100"
                      height="300"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default TourListingTwoDetails;

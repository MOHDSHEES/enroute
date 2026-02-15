"use client";
import React, { FormEvent, useState } from "react";
// import DatePicker from "react-datepicker";

import tourDetailsOneData, { mapEmbedUrl } from "@/data/tourDetailsOneData";
import { Accordion, Col, Container } from "react-bootstrap";
// import VideoModal from "@/components/common/VideoModal/VideoModal";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";
// import { contactFormFields } from "@/data/contactData";
import dayjs from "dayjs";
import Card from "../../card";

const TourListingTwoDetails = ({ tourData, relatedTrips }) => {
  console.log(tourData);
  console.log(relatedTrips);

  const [showMore, setShowMore] = useState(false);
  const [showMoreNotes, setShowMoreNotes] = useState(false);
  // const [startDate, setStartDate] = useState();
  // const [startTime, setStartTime] = useState();
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  // const formFields = contactFormFields;
  const { overviewTitle, relatedTours } = tourDetailsOneData;

  return (
    <>
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
              </div>
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
          <div className="row gutter-y-30 flex-column-reverse flex-lg-row">
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

                  <div
                    className={`tour-listing-details__text-container ${
                      showMore ? "expanded" : "clamped"
                    }`}
                  >
                    {(() => {
                      const fullDescription = tourData?.description || "";
                      const CHAR_LIMIT = 1000; // Threshold for showing the "Read More" button
                      const isLongDescription =
                        fullDescription.length > CHAR_LIMIT;

                      // 1. If the content is short, show all paragraphs normally with no button
                      if (!isLongDescription) {
                        return fullDescription
                          .split("\n")
                          .filter((l) => l.trim() !== "")
                          .map((para, i) => (
                            <p
                              key={i}
                              className="tour-listing-details__text"
                              style={{ marginBottom: "15px" }}
                            >
                              {para}
                            </p>
                          ));
                      }

                      // 2. If content is long, truncate the text to the character limit when clamped
                      const textToDisplay = showMore
                        ? fullDescription
                        : `${fullDescription.substring(0, CHAR_LIMIT)}...`;

                      return (
                        <>
                          {textToDisplay
                            .split("\n")
                            .filter((l) => l.trim() !== "")
                            .map((para, i) => (
                              <p
                                key={i}
                                className="tour-listing-details__text"
                                style={{ marginBottom: "15px" }}
                              >
                                {para}
                              </p>
                            ))}

                          <button
                            type="button"
                            className="read-more-btn"
                            onClick={() => setShowMore(!showMore)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "var(--gotur-base, #ef5c27)",
                              fontWeight: "bold",
                              cursor: "pointer",
                              padding: "0",
                              marginTop: "5px",
                            }}
                          >
                            {showMore ? "Read Less" : "Read More"}
                          </button>
                        </>
                      );
                    })()}
                  </div>
                </div>
                {/* <div
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
                   
                    {!showMore && tourData?.description?.length > 250
                      ? `${tourData.description.substring(0, 250)}...`
                      : tourData?.description}
                  </p>

                
                  {tourData?.description?.length > 250 && (
                    <button
                      type="button"
                      className="read-more-btn"
                      onClick={() => setShowMore(!showMore)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--gotur-base, #ef5c27)", 
                        fontWeight: "bold",
                        cursor: "pointer",
                        padding: "0",
                        marginTop: "10px",
                      }}
                    >
                      {showMore ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div> */}

                <div className="tour-listing-details__content__item tour-listing-details__ture-plan">
                  <h4 className="tour-listing-details__title">Tour Plan</h4>
                  <div className="faq-page__accordion faq-accordion gotur-accordion">
                    <Accordion defaultActiveKey="0">
                      {tourData?.itineraries
                        // Sort by day_number ascending
                        ?.sort((a, b) => a.day_number - b.day_number)
                        ?.map((iti, idx) => (
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
                              <div className="itinerary-details">
                                {/* Description Section */}
                                <ul className="accordion-inner-list list-unstyled">
                                  {iti.description?.map((desc, idx) => {
                                    return (
                                      <div
                                        eventKey={idx.toString()}
                                        key={idx}
                                        className="accordion-content"
                                      >
                                        <div
                                          className="inner"
                                          style={{ paddingBottom: "10px" }}
                                        >
                                          {/* {iti.description?.map((desc, idx) => {
                                  return ( */}
                                          <li className="accordion-inner-item">
                                            <p
                                              // eventKey={idx.toString()}
                                              // key={idx}
                                              className="inner__text"
                                            >
                                              {desc}
                                              {/* {desc} */}
                                            </p>
                                          </li>
                                          {/* );
                                })} */}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </ul>
                                {iti.meals && iti.meals.length > 0 && (
                                  <div className="itinerary-meals-wrapper">
                                    <div className="meal-header">
                                      <i className="fas fa-utensils"></i>
                                      <span>Included Meals</span>
                                    </div>
                                    <div className="meal-badges">
                                      {iti.meals.map((meal, mIdx) => (
                                        <span key={mIdx} className="meal-badge">
                                          {meal}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
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
                  <div
                    className="tour-listing-details__amenities__inner"
                    style={{ alignItems: "flex-start" }}
                  >
                    <ul
                      className="tour-listing-details__amenities__list"
                      style={{ listStyle: "none", padding: 0 }}
                    >
                      {tourData?.inclusion?.map((amenity, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start", // Keeps icon at the top if text is very long
                            marginBottom: "8px",
                          }}
                        >
                          <i
                            className="fas fa-check"
                            style={{
                              marginRight: "10px",
                              marginTop: "5px", // Adjust this to center the icon with the first line
                              color: "var(--gotur-base, #4A90E2)", // Your theme color
                              flexShrink: 0, // Prevents the icon from squishing
                            }}
                          ></i>
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                    <ul
                      className="tour-listing-details__amenities__list tour-listing-details__amenities__list--two"
                      style={{ listStyle: "none", padding: 0 }}
                    >
                      {tourData?.exclusion?.map((amenity, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start", // Icon stays at the top of the first line
                            marginBottom: "8px",
                          }}
                        >
                          <i
                            className="fas fa-times"
                            style={{
                              marginRight: "10px",
                              marginTop: "5px", // Aligns icon vertically with the first line of text
                              color: "#e74c3c", // Standard red color for exclusions
                              flexShrink: 0, // CRITICAL: Stops icon from squishing when text is long
                              width: "16px", // Fixed width keeps all text columns perfectly aligned
                              textAlign: "center",
                            }}
                          ></i>
                          <span style={{ flex: 1 }}>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Notes Section */}
                {tourData?.note && (
                  <div className="tour-listing-details__content__item tour-listing-details__list wow fadeInUp">
                    <h4 className="tour-listing-details__title">Notes</h4>

                    <div
                      className={`tour-listing-details__text-container ${
                        showMoreNotes ? "expanded" : "clamped"
                      }`}
                    >
                      {(() => {
                        const fullText = tourData.note || "";
                        const CHAR_LIMIT = 400; // Your "Master Gatekeeper" length
                        const isLongContent = fullText.length > CHAR_LIMIT;

                        // 1. If it's short content, just render it all normally
                        if (!isLongContent) {
                          return fullText
                            .split("\n")
                            .filter((l) => l.trim() !== "")
                            .map((para, i) => (
                              <p
                                key={i}
                                className="tour-listing-details__text"
                                style={{
                                  marginBottom: "10px",
                                  lineHeight: "1.6",
                                }}
                              >
                                {para}
                              </p>
                            ));
                        }

                        // 2. If it's long content, decide what to show based on the toggle state
                        const textToDisplay = showMoreNotes
                          ? fullText
                          : `${fullText.substring(0, CHAR_LIMIT)}...`;

                        return (
                          <>
                            {textToDisplay
                              .split("\n")
                              .filter((l) => l.trim() !== "")
                              .map((para, i) => (
                                <p
                                  key={i}
                                  className="tour-listing-details__text"
                                  style={{
                                    marginBottom: "10px",
                                    lineHeight: "1.6",
                                  }}
                                >
                                  {para}
                                </p>
                              ))}

                            <button
                              type="button"
                              className="read-more-btn"
                              onClick={() => setShowMoreNotes(!showMoreNotes)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "var(--gotur-base, #ef5c27)",
                                fontWeight: "bold",
                                cursor: "pointer",
                                padding: "0",
                                marginTop: "5px",
                              }}
                            >
                              {showMoreNotes ? "Read Less" : "Read More"}
                            </button>
                          </>
                        );
                      })()}
                    </div>
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
                    <ul
                      className="tour-listing-details__content__list"
                      style={{ listStyle: "none", padding: 0 }}
                    >
                      {tourData?.things_to_pack.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "0px",
                          }}
                        >
                          <i
                            className="icon-check-star"
                            style={{
                              marginRight: "12px",
                              marginTop: "4px", // Adjust based on your text size
                              flexShrink: 0,
                              color: "var(--gotur-base, #ef5c27)", // Your primary theme color
                              fontSize: "18px", // Matches the icon size to the text
                            }}
                          ></i>
                          <span
                            style={{
                              lineHeight: "1.5",
                              display: "block",
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

                {/* Related Tours Section */}
                {relatedTrips && relatedTrips.length > 0 && (
                  <div className="tour-listing-details__content__item tour-listing-details__ture-list">
                    <h4 className="tour-listing-details__title">
                      Related Tours
                    </h4>
                    <PhotoSwipeGallery>
                      <div className="row">
                        {relatedTrips.map((item, index) => (
                          <Col lg={6} md={6} key={index}>
                            <Card item={item} />
                          </Col>
                        ))}
                      </div>
                    </PhotoSwipeGallery>
                  </div>
                )}
                <div
                  className="tour-listing-details__content__item tour-listing-details__calender wow fadeInUp animated"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                ></div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} /> */}
    </>
  );
};

export default TourListingTwoDetails;

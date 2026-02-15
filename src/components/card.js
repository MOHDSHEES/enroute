import React from "react";
import image1 from "@/assets/images/blog/listing-list-4-1.jpg";
import { Link } from "gatsby";

const Card = ({ item }) => {
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
  return (
    <div className="item">
      <div
        className="listing-card-four wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <div className="listing-card-four__image" style={imageContainerStyle}>
          <img
            src={item.thumbnail_url ? item.thumbnail_url : image1}
            alt={item.name}
            style={imageStyle}
          />

          <ul className="listing-card-four__meta list-unstyled">
            <li>
              <Link to={`/trip/details/${item.id}`}>
                <span className="listing-card-four__meta__icon">
                  <i className="fa fa-user"></i>
                </span>
                Age {item.age_group}
              </Link>
            </li>
            <li>
              <Link to={`/trip/details/${item.id}`}>
                <span className="listing-card-four__meta__icon">
                  <i className="calendar"></i>
                </span>
                {item.duration_days} D / {item.duration_nights}N
              </Link>
            </li>
          </ul>
        </div>

        <div className="listing-card-four__content">
          {/* Title fixed to 2 lines via CSS class */}
          <h3 className="listing-card-four__title">
            <Link to={`/trip/details/${item.id}`}>{item.name}</Link>
          </h3>

          <div className="listing-card-four__content__btn">
            <div className="listing-card-four__price">
              <span className="listing-card-four__price__sub">
                Starting from
              </span>
              <span className="listing-card-four__price__number">
                &#8377;{item.starting_price}
              </span>
            </div>
            <Link
              to={`/trip/details/${item.id}`}
              className="listing-card-four__btn gotur-btn"
            >
              Book Now{" "}
              <span className="icon">
                <i className="icon-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

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

const City = () => {
  // 1. Memoize data to prevent re-initialization crashes during page transitions
  const { firstHalf, secondHalf } = useMemo(() => {
    const midpoint = Math.ceil(cities.length / 2);
    return {
      firstHalf: cities.slice(0, midpoint),
      secondHalf: cities.slice(midpoint),
    };
  }, [cities]);

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
      768: { items: 5 },
      1199: { items: 6 },
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
                  <TextAnimation text={"Trending"} animationType="right" />
                </h6>
                <h3 className="sec-title__title d-md-flex gap-2">
                  <TextAnimation text={"Destination"} animationType="left" />
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
            {firstHalf.map((cate) => (
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
      <div
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
                1199: { items: 6 },
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
      </div>
    </section>
  );
};

export default City;

const cities = [
  {
    id: 1,
    name: "Jaisalmer",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052135/jaisalmer_pv0oin.webp",
  },
  {
    id: 2,
    name: "Auli Chopta",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052134/auli_chopta_l7fcgp.webp",
  },
  {
    id: 3,
    name: "Kedarnath",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052136/kedarnath_p3dwja.webp",
  },
  {
    id: 4,
    name: "Manali",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052136/manali_npzrpl.webp",
  },
  {
    id: 5,
    name: "Spiti Valley",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052137/spiti_aor2ax.webp",
  },
  {
    id: 6,
    name: "Kashmir",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052135/kashmir_a1raf6.webp",
  },
  {
    id: 7,
    name: "Zanskar",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052137/zenskar_phqfn6.webp",
  },
  {
    id: 8,
    name: "Rishikesh",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052137/rishikesh_ojkn0o.webp",
  },
  {
    id: 9,
    name: "Kasol",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052136/kasol_dhib15.webp",
  },
  {
    id: 10,
    name: "Tungnath",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052137/tungnath_dd9sxr.webp",
  },
  {
    id: 11,
    name: "Kinnaur",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052136/kinnaur_g1djwp.webp",
  },
  {
    id: 12,
    name: "Joshimath",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052135/joshimath_tor0xj.webp",
  },
  {
    id: 13,
    name: "Chakrata",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052135/chakarta_m2lzo7.webp",
  },
  {
    id: 14,
    name: "Udaipur",
    image_url:
      "https://res.cloudinary.com/dtn5i5hpt/image/upload/v1772052137/udaipur_eotdct.webp",
  },
];

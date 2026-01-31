"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
import destinationsTwoTwoData from "@/data/destinationsTwoTwoData";
import loadable from "@loadable/component";
import { Link } from "gatsby";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import destinationImg3 from "@/assets/images/resources/destinations-2-3.jpg";
const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const DestinationsTwoTwo = ({ categories }) => {
  const { tagline, title, highlighted, destinations, elementImage } =
    destinationsTwoTwoData;
  // console.log(categories);
  const carouselOptions = {
    items: 1,
    gutter: 30,
    loop: true,
    smartSpeed: 700,
    controls: true,
    controlsContainer: ".destinations-two__bottom__nav",
    nav: false,

    // --- Autoplay Settings ---
    autoplay: true,
    autoplayTimeout: 3000, // Speed in milliseconds
    autoplayButton: false, // Prevents the creation of a Start/Stop button
    autoplayButtonOutput: false, // Ensures no stop button HTML is outputted
    // autoplayHoverPause: true, // Optional: pauses when user hovers over the slide

    responsive: {
      0: { items: 1 },
      575: { items: 2 },
      768: { items: 3 },
      992: { items: 3 },
      1199: { items: 4 },
    },
  };
  // const carouselOptions = {
  //   items: 1,
  //   gutter: 30,
  //   loop: true,
  //   smartSpeed: 700,
  //   controls: true,
  //   controlsContainer: ".destinations-two__bottom__nav",
  //   nav: false,
  //   autoplay: false,
  //   responsive: {
  //     0: { items: 1 },
  //     575: { items: 2 },
  //     768: { items: 3 },
  //     992: { items: 3 },
  //     1199: { items: 4 },
  //   },
  // };

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
                  <TextAnimation text={"Popular"} animationType="right" />
                </h6>
                <h3 className="sec-title__title d-md-flex gap-2">
                  <TextAnimation text={"Categories"} animationType="left" />
                  {/* <span>
                    <TextAnimation text={"Categories"} animationType="left" />
                  </span> */}
                </h3>
              </div>
            </Col>
            <Col lg={4}>
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

      <div className="container-fluid">
        <div className="destinations-two__inner">
          <TinySlider
            className="destinations-two__carousel gotur-owl__carousel gotur-owl__carousel--custom-nav gotur-owl__carousel--with-shadow owl-carousel owl-theme owl-loaded owl-drag"
            settings={carouselOptions}
          >
            {categories.map((cate, index) => (
              <div key={index}>
                <div className="item">
                  <div
                    className="destinations-card-two wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                  >
                    <div
                      className="destinations-card-two__thumb"
                      style={{
                        width: "320px",
                        height: "426px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={cate.image_url ? cate.image_url : destinationImg3}
                        alt={cate.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      {/* <div
                        className="destinations-card-two__hover"
                        style={{
                          width: "320px",
                          height: "426px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={
                            cate.image_url ? cate.image_url : destinationImg3
                          }
                          alt={cate.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div> */}
                    </div>
                    <h4 className="destinations-card-two__title">
                      <Link to={`/category/${cate.id}`}>{cate.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
              // <div key={index}>
              //   <div className="item">
              //     <div
              //       className="destinations-card-two wow fadeInUp"
              //       data-wow-duration="1500ms"
              //       data-wow-delay="100ms"
              //     >
              //       <div className="destinations-card-two__thumb">
              //         <img
              //           src={cate.image_url ? cate.image_url : destinationImg3}
              //           alt={cate.name}
              //         />
              //         <div className="destinations-card-two__hover">
              //           <img
              //             src={
              //               cate.image_url ? cate.image_url : destinationImg3
              //             }
              //             alt={cate.name}
              //           />
              //         </div>
              //       </div>
              //       <h4 className="destinations-card-two__title">
              //         <Link to={`/category/${cate.id}`}>{cate.name}</Link>
              //       </h4>
              //     </div>
              //   </div>
              // </div>
            ))}
            {/* {destinations.map((dest, index) => (
              <div key={index}>
                <div className="item">
                  <div
                    className="destinations-card-two wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                  >
                    <div className="destinations-card-two__thumb">
                      <img src={dest.image} alt={dest.title} />
                      <div className="destinations-card-two__hover">
                        <img src={dest.hoverImage} alt={dest.title} />
                      </div>
                    </div>
                    <h4 className="destinations-card-two__title">
                      <Link to={dest.link}>{dest.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))} */}
          </TinySlider>
        </div>
      </div>

      <div className="destinations-two__element">
        <DynamicImage src={elementImage} alt="" />
      </div>
    </section>
  );
};

export default DestinationsTwoTwo;

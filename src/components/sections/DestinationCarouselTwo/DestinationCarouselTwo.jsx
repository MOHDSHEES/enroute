"use client";
import React from "react";
import destinationCarouselTwoData from "@/data/destinationCarouselTwoData";
import loadable from "@loadable/component";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});
// interface DestinationItem {
//   id: number;
//   image: any;
//   label: string;
// }

const DestinationCarouselTwo = () => {
  return (
    <div className="destination-carousel destination-carousel--two section-space">
      <div className="gotur-owl__carousel--basic-nav owl-carousel">
        <TinySlider
          settings={{
            items: 1,
            gutter: 30,
            loop: true,
            nav: false,
            autoplay: true,
            controls: true,
            mouseDrag: true,
            autoplayButton: false, // Prevents the creation of a Start/Stop button
            autoplayButtonOutput: false, // Ensures no stop button HTML is outputted
            controlsContainer: ".owl-nav",
          }}
          className="destination-carousel__inner owl-carousel owl-theme"
        >
          {destinationCarouselTwoData.map((item) => (
            <div className="item" key={item.id}>
              <div className="destination-carousel__item text-center">
                <img src={item.image} alt="destination" />
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </TinySlider>
        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev"
            aria-label="carousel button"
          >
            <span className="icon-arrow-left"></span>
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next"
            aria-label="carousel button"
          >
            <span className="icon-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCarouselTwo;

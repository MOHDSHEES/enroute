"use client";
import React, { useEffect, useState } from "react";
import mainSliderFourData from "@/data/mainSliderFourData";
import { Container } from "react-bootstrap";
import BannerForm from "../BannerForm/BannerForm";
import loadable from "@loadable/component";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const MainSliderFour: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    lazyload: true,
    nav: false,
    // navPosition: "bottom",
    mouseDrag: true,
    items: 1,
    gutter: 0,
    autoplay: true,
    autoplayButtonOutput: false,
    // CHANGE 1: Set controls to true but REMOVE controlsContainer
    controls: false,
    loop: true,
    mode: "gallery",
    speed: 1000,
    autoplayTimeout: 6000,
    // Use the default tiny-slider class logic instead of custom ID if it keeps failing
  };

  if (!isMounted) return null;

  return (
    <section className="main-slider-four" id="home">
      <div className="main-slider-four__carousel">
        {mainSliderFourData && mainSliderFourData.length > 0 && (
          <div className="slider-wrapper-stable">
            <TinySlider settings={settings}>
              {mainSliderFourData.map((item) => (
                <div key={`banner-${item.id}`}>
                  <div className="main-slider-four__item">
                    <div
                      className="main-slider-four__bg"
                      style={{ backgroundImage: `url(${item.imageSrc})` }}
                    ></div>
                    <div className="container">
                      <div className="main-slider-four__content">
                        <h5 className="main-slider-four__subtitle">
                          {item.subtitle}
                        </h5>
                        <h2 className="main-slider-four__title">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>

            {/* CHANGE 2: Keep the buttons here, but we are going to style them 
               manually. If Tiny Slider can't "bind" them via settings without crashing, 
               we use CSS to overlay them.
            */}
            <div className="main-slider-four__nav-manual">
              {/* If you still get the 'outerHTML' error, the library is 
                  crashing on the internal 'controlsContainer' logic. 
                  Try removing the `controlsContainer` line from the settings 
                  object entirely and use these buttons as 'custom' buttons.
                */}
            </div>
          </div>
        )}
      </div>

      <div className="main-slider-four__action-form">
        <Container style={{ padding: 0 }}>
          <div className="main-slider-four__form" style={{ width: "100%" }}>
            <BannerForm />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MainSliderFour;
// "use client";
// import React from "react";

// import mainSliderFourData from "@/data/mainSliderFourData";
// import { Container } from "react-bootstrap";
// import BannerForm from "../BannerForm/BannerForm";
// import loadable from "@loadable/component";

// const TinySlider = loadable(() => import("tiny-slider-react"), {
//   ssr: false,
// });

// interface SliderItem {
//   id: number;
//   subtitle: string;
//   title: string;
//   titleSpan: string;
//   titleEnd: string;
//   imageSrc: string;
//   imageAlt: string;
//   lineShape: string;
// }
// const settings = {
//   loop: true,
//   autoplay: true,
//   mode: "gallery",
//   animateOut: "tns-fadeOut",
//   animateIn: "tns-fadeIn",
//   items: 1,
//   gutter: 0,
//   mouseDrag: true,
//   preventScrollOnTouch: "auto",
//   nav: false,
//   autoplayButtonOutput: false,

//   controlsContainer: ".owl-nav",
//   // dots: true,
//   autoplayTimeout: 6000,
//   speed: 1000,
// };

// const MainSliderFour: React.FC = () => {
//   return (
//     <section className="main-slider-four" id="home">
//       <div className="main-slider-four__carousel gotur-owl__carousel owl-carousel">
//         <TinySlider settings={settings}>
//           {mainSliderFourData?.map((item: SliderItem) => (
//             <div key={item.id}>
//               <div className="item">
//                 <div className="main-slider-four__item">
//                   <div
//                     className="main-slider-four__bg"
//                     style={{
//                       backgroundImage: `url(${item.imageSrc})`,
//                     }}
//                   ></div>
//                   <div className="container">
//                     <div className="main-slider-four__content">
//                       <h5 className="main-slider-four__subtitle">
//                         {item.subtitle}
//                       </h5>
//                       <h2 className="main-slider-four__title">
//                         {item.title}
//                         {/* <span>
//                           {item.titleSpan}
//                           <img src={item.lineShape} alt='line' />
//                         </span>
//                         {item.titleEnd} */}
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </TinySlider>
//         <div className="owl-nav">
//           <button
//             type="button"
//             role="presentation"
//             className="owl-prev"
//             aria-label="carousel button"
//           >
//             <span className="icon-arrow-left"></span>
//           </button>
//           <button
//             type="button"
//             role="presentation"
//             className="owl-next"
//             aria-label="carousel button"
//           >
//             <span className="icon-arrow-right"></span>
//           </button>
//         </div>
//       </div>
//       <div className="main-slider-four__action-form">
//         <Container style={{ padding: 0 }}>
//           <div className="main-slider-four__form" style={{ width: "100%" }}>
//             <BannerForm />
//           </div>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default MainSliderFour;

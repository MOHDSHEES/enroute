"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import testimonialsTwoData from "@/data/testimonialsTwoData";
// import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
import loadable from "@loadable/component";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

interface Testimonial {
  id: number;
  name: string;
  position?: string;
  text: string;
  image: string;
  stars?: number;
}

interface TestimonialsData {
  tagline: string;
  title: string;
  highlighted: string;
  elementImage: string;
  testimonials: Testimonial[];
}

// Card Component receiving state from Parent
const TestimonialCard = ({
  testimonial,
  isExpanded,
  onToggle,
}: {
  testimonial: Testimonial;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const charLimit = 150;
  const needsReadMore = testimonial.text.length > charLimit;

  return (
    <div
      className="testimonials-two-card testimonials-two-card--two  wow fadeInUp"
      data-wow-duration="1500ms"
      data-wow-delay="00ms"
    >
      <div className="testimonials-two-card__inner">
        <div className="testimonials-two-card__top">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="testimonials-two-card__content">
          <div className="testimonials-two-card__content testimonials-two-card__content--two">
            <h4 className="testimonials-two-card__author__name">
              {testimonial.name}
            </h4>
            <p className="testimonials-two-card__author__dec">
              {testimonial.position}
            </p>
          </div>
          {/* whiteSpace: 'pre-line' handles your /n line breaks */}
          <p
            className="testimonials-two-card__text"
            style={{ whiteSpace: "pre-line" }}
          >
            {isExpanded || !needsReadMore
              ? testimonial.text
              : `${testimonial.text.substring(0, charLimit)}...`}
            {needsReadMore && (
              <button
                type="button"
                // onPointerDown triggers before the slider can hijack the event
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggle();
                }}
                className="read-more-btn"
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--gotur-base, #ef5c27)",
                  fontWeight: "700",
                  marginLeft: "5px",
                  cursor: "pointer",
                  display: "inline-block",
                  position: "relative",
                  zIndex: 50,
                }}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            )}
          </p>
        </div>
        <div className="testimonials-two-card__star">
          <div className="testimonials-two-card__star__item">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="icon-star"></i>
            ))}
          </div>
        </div>
        <div className="testimonials-two-card__quite">
          <i className="icon-straight-quotes"></i>
        </div>
      </div>
    </div>
  );
};

const TestimonialsTwo = () => {
  const {
    tagline,
    title,
    highlighted,
    testimonials,
    elementImage,
  }: TestimonialsData = testimonialsTwoData;

  // Lifted state to manage which testimonial is expanded
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const settings = {
    items: 1,
    gutter: 30,
    loop: false, // Recommended to keep false when managing React state inside slides
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false, // Prevents "Stop" button from appearing
    autoplayHoverPause: true,
    controls: true,
    mouseDrag: true,
    touch: true,
    nested: "inner", // Helps slider ignore internal button clicks
    controlsContainer: ".testimonials-two__bottom__nav",
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1199: { items: 2 }, // Since you only have 3, showing 2 is a good balance
    },
  };

  return (
    <section className="testimonial-page section-space">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <div className="sec-title">
            <h6 className="sec-title__tagline">{tagline}</h6>
            <h3 className="sec-title__title">
              {title} <span>{highlighted}</span>
            </h3>
          </div>
        </Col>
      </Row>
      <Container>
        <div className="testimonial-page__carousel gotur-owl__carousel gotur-owl__carousel--with-shadow gotur-owl__carousel--basic-nav owl-carousel owl-theme owl-loaded owl-drag">
          <TinySlider settings={settings}>
            {testimonials.map((testimonial: Testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard
                  testimonial={testimonial}
                  isExpanded={expandedId === testimonial.id}
                  onToggle={() =>
                    setExpandedId(
                      expandedId === testimonial.id ? null : testimonial.id
                    )
                  }
                />
              </div>
            ))}
          </TinySlider>
          <div className="testimonials-two__bottom__nav owl-nav">
            <button className="testimonials-two__carousel__nav--left">
              <span className="icon-arrow-left"></span>
            </button>
            <button className="testimonials-two__carousel__nav--right">
              <span className="icon-arrow-right"></span>
            </button>
          </div>
          {/* <div className="owl-nav">
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
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;

// "use client";

// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import testimonialsTwoData from "@/data/testimonialsTwoData";
// import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
// import loadable from "@loadable/component";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

// const TinySlider = loadable(() => import("tiny-slider-react"), {
//   ssr: false,
// });

// interface Testimonial {
//   id: number;
//   name: string;
//   position?: string;
//   text: string;
//   image: string;
//   stars?: number;
// }

// interface TestimonialsData {
//   tagline: string;
//   title: string;
//   highlighted: string;
//   elementImage: string;
//   testimonials: Testimonial[];
// }

// const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   console.log(isExpanded);

//   const charLimit = 150;
//   const needsReadMore = testimonial.text.length > charLimit;

//   return (
//     <div
//       className="testimonials-two-card wow fadeInUp"
//       data-wow-duration="1500ms"
//     >
//       <div className="testimonials-two-card__inner">
//         <div className="testimonials-two-card__top">
//           <img src={testimonial.image} alt={testimonial.name} />
//         </div>
//         <div className="testimonials-two-card__content">
//           <div className="testimonials-two-card__author">
//             <h4 className="testimonials-two-card__author__name">
//               {testimonial.name}
//             </h4>
//             <p className="testimonials-two-card__author__dec">
//               {testimonial.position}
//             </p>
//           </div>
//           <p className="testimonials-two-card__text">
//             {isExpanded || !needsReadMore
//               ? testimonial.text
//               : `${testimonial.text.substring(0, charLimit)}...`}
//             {needsReadMore && (
//               <button
//                 onClick={() => setIsExpanded(!isExpanded)}
//                 className="read-more-btn"
//                 style={{
//                   background: "none",
//                   border: "none",
//                   zIndex: 10,
//                   color: "var(--gotur-base, #4A90E2)",
//                   fontWeight: "600",
//                   marginLeft: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {isExpanded ? "Show Less" : "Read More"}
//               </button>
//             )}
//           </p>
//         </div>
//         <div className="testimonials-two-card__star">
//           <div className="testimonials-two-card__star__item">
//             {[...Array(5)].map((_, i) => (
//               <i key={i} className="icon-star"></i>
//             ))}
//           </div>
//         </div>
//         <div className="testimonials-two-card__quite">
//           <i className="icon-straight-quotes"></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TestimonialsTwo = () => {
//   const {
//     tagline,
//     title,
//     highlighted,
//     testimonials,
//     elementImage,
//   }: TestimonialsData = testimonialsTwoData;

//   const settings = {
//     items: 1,
//     gutter: 30,
//     // loop: true, // Changed to true for smooth autoplay
//     nav: false,
//     // autoplay: true, // Enable Autoplay
//     autoplayTimeout: 5000, // Duration in ms (5 seconds)
//     autoplayButtonOutput: false, // Prevents "Stop" button from appearing
//     autoplayHoverPause: true, // Pause when user hovers over a review
//     controls: true,
//     mouseDrag: false,
//     preventScrollOnTouch: "auto",
//     controlsContainer: ".testimonials-two__bottom__nav",
//     responsive: {
//       0: { items: 1 },
//       768: { items: 2 },
//       992: { items: 2 },
//       1199: { items: 2 },
//     },
//   };

//   return (
//     <section className="testimonials-two" id="testimonials">
//       <Container fluid>
//         <Row className="align-items-center gy-4">
//           <Col xl={4} xxl={3}>
//             <div className="mb-4">
//               <div className="sec-title">
//                 <h6 className="sec-title__tagline">
//                   <TextAnimation text={tagline} animationType="right" />
//                 </h6>
//                 <h3 className="sec-title__title">
//                   <TextAnimation text={title} animationType="left" />
//                   <span>
//                     <TextAnimation text={highlighted} animationType="left" />
//                   </span>
//                 </h3>
//               </div>
//               <div className="testimonials-two__bottom__nav">
//                 <button className="testimonials-two__carousel__nav--left">
//                   <span className="icon-arrow-left"></span>
//                 </button>
//                 <button className="testimonials-two__carousel__nav--right">
//                   <span className="icon-arrow-right"></span>
//                 </button>
//               </div>
//             </div>
//           </Col>

//           <Col xl={8} xxl={9}>
//             <TinySlider
//               settings={settings}
//               className="testimonials-two__carousel gotur-owl__carousel gotur-owl__carousel--custom-nav gotur-owl__carousel--with-shadow owl-carousel owl-theme"
//             >
//               {testimonials.map((testimonial: Testimonial) => (
//                 <div key={testimonial.id}>
//                   <TestimonialCard testimonial={testimonial} />
//                 </div>
//               ))}
//             </TinySlider>
//           </Col>
//         </Row>
//       </Container>
//       <div
//         className="testimonials-two__element"
//         style={{ width: "165px", height: "241px" }}
//       >
//         <DynamicImage src={elementImage} alt="" />
//       </div>
//     </section>
//   );
// };

// export default TestimonialsTwo;

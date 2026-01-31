"use client";

import React, { useState, useEffect, useRef } from "react";
import TextAnimation from "@/components/common/AnimatedText/TextAnimation";
import { whyChooseOneData } from "@/data/whyChooseOneData";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { Col, Container, Row } from "react-bootstrap";

const WhyChooseOne: React.FC = () => {
  const targetRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <section className='why-choose-one section-space-bottom' id='destination'>
      <Container>
        <Row className=' align-items-center gutter-y-40'>
          {/* Left Column (Images) */}
          <Col lg={6}>
            <div
              className='why-choose-one__thumb wow fadeInLeft'
              data-wow-duration='1500ms'
              data-wow-delay='400ms'
            >
              <div className='row align-items-center gutter-y-30'>
                <div className='col-lg-6'>
                  <div className='why-choose-one__thumb__item-one'>
                    <DynamicImage
                      src={whyChooseOneData.image}
                      alt='Why Choose Us'
                    />
                  </div>
                  <div className='why-choose-one__thumb__item-one'>
                    <DynamicImage
                      src={whyChooseOneData.imageSmall}
                      alt='Why Choose Us Small'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='why-choose-one__thumb__item-two'>
                    <DynamicImage
                      src={whyChooseOneData.image3}
                      alt='Why Choose Us Element'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column (Content) */}
          <Col lg={6}>
            <div className='why-choose-one__content'>
              <div className='sec-title'>
                <h6 className='sec-title__tagline bw-split-in-right'>
                  <TextAnimation text='Why Choose Us' animationType='right' />
                </h6>
                <h3 className='sec-title__title bw-split-in-left'>
                  <div className='d-flex gap-2'>
                    <TextAnimation text='Get The' animationType='left' />
                    <span>
                      <TextAnimation text='Best Travel' animationType='left' />
                    </span>
                  </div>
                  <TextAnimation
                    text='Experience With Gotur'
                    animationType='left'
                  />
                </h3>
              </div>

              <p className='why-choose-one__content__text'>
                {whyChooseOneData.description}
              </p>

              <ul className='why-choose-one__list'>
                {whyChooseOneData.items.map((item, index) => (
                  <li key={index}>
                    <div
                      className='why-choose-one__list__item wow fadeInLeft'
                      data-wow-duration='1500ms'
                      data-wow-delay={item.delay}
                    >
                      <div className='why-choose-one__icon'>
                        <i className={item.icon}></i>
                      </div>
                      <h5 className='why-choose-one__title'>{item.title}</h5>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='why-choose-one__element'>
        <DynamicImage src={whyChooseOneData.perasut} alt='Element One' />
      </div>
    </section>
  );
};

export default WhyChooseOne;

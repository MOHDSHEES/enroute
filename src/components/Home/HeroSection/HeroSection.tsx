import React from "react";
import { heroSectionData } from "@/data/HeroSectionData";

import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";

const HeroSection = () => {
  const { bgImage, logo, title, text, button, images } = heroSectionData;

  return (
    <section className='hero-section-landing'>
      <div
        className='hero-section-landing__bg'
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container>
        <div className='hero-section-landing__content'>
          <Link to={logo.href} className='hero-section-landing__logo'>
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          </Link>
          <h1 className='hero-section-landing__title'>
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </h1>
          <p className='hero-section-landing__text'>
            {text.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </p>
          <Link
            to={button.href}
            className='gotur-btn-landing'
            target={button.target}
            rel='noreferrer'
          >
            {button.text}
          </Link>
        </div>
      </Container>
      <div className='hero-section-landing__arrow'></div>
      <div className='hero-section-landing__badge'></div>
      <div className='hero-section-landing__images'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className='wow fadeInRight animated'
            data-aos-delay={img.animationDelay}
            style={{
              visibility: "visible",
              animationDelay: img.animationDelay,
              animationName: "fadeInRight",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

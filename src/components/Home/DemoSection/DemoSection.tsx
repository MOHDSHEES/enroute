import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { demoOneData } from "@/data/DemoOneData";
import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DemosSection = () => (
  <section className='demos-one' id='demos'>
    <Container>
      <Row>
        {demoOneData.map((demo) => (
          <Col lg={4} md={6} key={demo.id}>
            <div className='demos-one__single'>
              <div className='demos-one__image'>
                <DynamicImage src={demo.image} alt={demo.alt} />
                <div className='demos-one__buttons'>
                  {demo.buttons.map((button, index) => (
                    <Link
                      key={index}
                      target='_blank'
                      to={button.href}
                      className='gotur-btn demo-one__btn'
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>
                <div className='demos-one__image__group'>
                  <span className='demos-one__image__hover demos-one__image__hover--1'></span>
                  <span className='demos-one__image__hover demos-one__image__hover--2'></span>
                  <span className='demos-one__image__hover demos-one__image__hover--3'></span>
                  <span className='demos-one__image__hover demos-one__image__hover--4'></span>
                  <span className='demos-one__image__hover demos-one__image__hover--5'></span>
                </div>
              </div>
              <div className='demos-one__text'>
                <h3 className='demos-one__text__title'>{demo.title}</h3>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default DemosSection;

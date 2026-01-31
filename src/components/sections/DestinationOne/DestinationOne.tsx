'use client';


import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

import destinationOneData from '@/data/destinationOneData';
import DynamicImage from '@/components/common/DynamicImage/DynamicImage';

const DestinationOne = () => {
  interface DestinationItem {
    name: string;
    image: any; // You can refine to StaticImageData if needed
    link: string;
  }

  return (
    <section className="destination-one section-space">
      <Container>
        <Row className="gutter-y-20 gutter-x-20">
          {destinationOneData.map((destination: DestinationItem, index: number) => (
            <Col
              xl={3}
              lg={4}
              md={4}
              sm={6}
              key={index}
              className="wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay={`${100 + (index % 4) * 200}ms`}
            >
              <div className="destination-card-one">
                <div className="destination-card-one__thumb">
                  <DynamicImage src={destination.image} alt={destination.name}  />
                  <a href={destination.link} className="destination-card-one__overly" />
                </div>
                <div className="destination-card-one__content">
                  <h3 className="destination-card-one__title">
                    <a href={destination.link}>{destination.name}</a>
                  </h3>
                </div>
              </div>
            </Col>
          ))}
          <Col xs={12}>
            <ul
              className="post-pagination justify-content-center"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <li>
                <a href="#" className="previous">Previous</a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">...</a></li>
              <li className="active">
                <a href="#" className="next">Next</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationOne;

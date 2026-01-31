import React from "react";
import destinationsTwoGridData from "@/data/destinationTwoGridData";

import {Link} from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

interface Destination {
  title: string;
  image: string;
  link: string;
  colorClass: string;
  wowDelay: string;
}
const DestinationTwo = () => {
  return (
    <section className='destination-two section-space'>
      <Container>
        <Row className='gutter-y-30 gutter-x-30'>
          {destinationsTwoGridData.map((item: Destination, index: number) => (
            <Col lg={4} md={6} sm={6} key={index}>
              <div
                className={`destination-card-two ${item.colorClass} wow fadeInUp`}
                data-wow-duration='1500ms'
                data-wow-delay={item.wowDelay}
              >
                <div className='destination-card-two__thumb'>
                  <DynamicImage src={item.image} alt={item.title} />
                  <Link
                    to={item.link}
                    className='destination-card-two__overly'
                  ></Link>
                </div>
                <div className='destination-card-two__content'>
                  <h3 className='destination-card-two__title'>
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            </Col>
          ))}

          {/* Pagination */}
          <Col xs={12}>
            <ul
              className='post-pagination justify-content-center wow fadeInUp'
              data-wow-duration='1500ms'
              data-wow-delay='500ms'
            >
              <li>
                <Link to='#' className='previous'>
                  Previous
                </Link>
              </li>
              <li>
                <Link to='#'>1</Link>
              </li>
              <li>
                <Link to='#'>2</Link>
              </li>
              <li>
                <Link to='#'>3</Link>
              </li>
              <li>
                <Link to='#'>...</Link>
              </li>
              <li className='active'>
                <Link to='#' className='next'>
                  Next
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationTwo;

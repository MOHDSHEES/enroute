"use client";

import React from "react";
import destinationInfo, { mapEmbedUrl } from "@/data/destinationInfoData";
import {Link} from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import destinationsTwoGridData from "@/data/destinationTwoGridData";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
interface Destination {
  title: string;
  image: string;
  link: string;
  colorClass: string;
  wowDelay: string;
}

const DestinationTwoRight = () => {
  return (
    <section className='destination-one section-space'>
      <Container>
        <Row className='gutter-y-30 gutter-x-30'>
         

          {/* Destinations */}
          <Col lg={8}>
            <div className='row gutter-y-20 gutter-x-20'>
              {destinationsTwoGridData
                .slice(0, 6)
                .map((item: Destination, index: number) => (
                  <Col sm={6} md={6} key={index}>
                    <div
                      className={`destination-card-two ${item.colorClass} wow fadeInUp`}
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
              <div className='col-12'>
                <ul className='post-pagination justify-content-center wow fadeInUp'>
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
              </div>
            </div>
          </Col>

           {/* Sidebar */}
           <Col lg={4}>
            <aside className='destination-details__sidebar'>
              <div className='destination-details__sidebar__item destination-details__sidebar__item-list wow fadeInUp'>
                <h4 className='destination-details__sidebar__title'>
                  Some Information
                </h4>
                <ul className='destination-details__sidebar__list'>
                  {destinationInfo.map((item, index) => (
                    <li key={index}>
                      <p className='destination-details__sidebar__text'>
                        <i className='icon-check-star'></i> {item.label}:
                      </p>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='destination-details__sidebar__item destination-details__sidebar__item-map wow fadeInUp'>
                <iframe
                  title='Google Map'
                  src={mapEmbedUrl}
                  allowFullScreen
                  className='w-100'
                  height='300'
                />
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationTwoRight;

'use client';


import React from 'react';
import destinationInfo, { mapEmbedUrl } from '@/data/destinationInfoData';
import destinationOneData from '@/data/destinationOneData';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import DynamicImage from '@/components/common/DynamicImage/DynamicImage';
interface DestinationItem {
  name: string;
  image: any; // You can refine to StaticImageData if needed
  link: string;
}

const DestinationOneRight
 = () => {
  return (
    <section className="destination-one section-space">
      <Container >
        <Row className="gutter-y-20 gutter-x-20">
         

          {/* Destinations */}
          <Col lg={8}>
            <div className="row gutter-y-20 gutter-x-20">
              {destinationOneData.slice(0,6).map((item: DestinationItem, index:number) => (
                <div className="col-md-6 col-sm-6" key={index}>
                  <div className="destination-card-one wow fadeInUp">
                    <div className="destination-card-one__thumb">
                      <DynamicImage src={item.image} alt={item.name}  />
                      <Link to={item.link} className="destination-card-one__overly"></Link>
                    </div>
                    <div className="destination-card-one__content">
                      <h3 className="destination-card-one__title">
                        <Link to={item.link}>{item.name}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="col-12">
                <ul className="post-pagination justify-content-center wow fadeInUp">
                  <li><a href="#" className="previous">Previous</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">...</a></li>
                  <li className="active"><a href="#" className="next">Next</a></li>
                </ul>
              </div>
            </div>
          </Col>
           {/* Sidebar */}
           <Col lg={4}>
            <aside className="destination-details__sidebar">
              <div className="destination-details__sidebar__item destination-details__sidebar__item-list wow fadeInUp">
                <h4 className="destination-details__sidebar__title">Some Information</h4>
                <ul className="destination-details__sidebar__list">
                  {destinationInfo.map((item, index) => (
                    <li key={index}>
                      <p className="destination-details__sidebar__text">
                        <i className="icon-check-star"></i> {item.label}:
                      </p>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="destination-details__sidebar__item destination-details__sidebar__item-map wow fadeInUp">
                <iframe
                  title="Google Map"
                  src={mapEmbedUrl}
                  allowFullScreen
                  className="w-100"
                  height="300"
                />
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationOneRight
;

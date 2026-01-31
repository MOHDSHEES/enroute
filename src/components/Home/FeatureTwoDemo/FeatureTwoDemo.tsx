import { featuresTwoDemoData } from "@/data/FeatureTwoDemo";

import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const FeatureTwoDemo = () => {
  return (
    <section className='features-two'>
      <Container>
        <Row>
          {featuresTwoDemoData.map(({ id, title, image, alt }) => (
            <Col lg={3} md={6} key={id}>
              <div className='features-two__box'>
                <img src={image} alt={alt} />
                <h2 className='features-two__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureTwoDemo;

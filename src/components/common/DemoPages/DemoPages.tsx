import React from "react";
import { demoPages } from "@/data/demoPages"; // Import your data

import { Link } from "gatsby";

import { Col, Container, Row } from "react-bootstrap";
import DynamicImage from "../DynamicImage/DynamicImage";

interface Page {
  image: string;
  title: string;
  isNew?: boolean;
  multiPageLink?: string;
  onePageLink?: string;
  darkPageLink?: string;
  viewPageLink?: string;
}

const DemoPages: React.FC = () => {
  return (
    <ul>
      <li>
        <section className='home-showcase'>
          <Container>
            <div className='home-showcase__inner'>
              <Row>
                {demoPages.map((page: Page, index: number) => (
                  <Col lg={3} md={6} key={index}>
                    <div className='demo-one__card'>
                      <div className='demo-one__image'>
                        <DynamicImage
                          src={page.image}
                          alt={`gotur image ${page.title}`}
                        />
                        {/* <StaticImage
                          src={`../../../assets/images/${page.image}`}
                          alt='A dinosaur'
                        /> */}
                        {/* <Image
                          relativePath={page.image}
                          alt={`gotur image ${page.title}`}
                        /> */}
                        <div className='demo-one__btns'>
                          {page.multiPageLink && (
                            <Link
                              to={page.multiPageLink}
                              className='gotur-btn demo-one__btn'
                            >
                              Multi Page
                            </Link>
                          )}
                          {page.onePageLink && (
                            <Link
                              to={page.onePageLink}
                              className='gotur-btn demo-one__btn'
                            >
                              One Page
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className='demo-one__content'>
                        <h3 className='demo-one__title'>
                          {/* <Link to={page.multiPageLink}>
                         {page.title}
                            </Link> */}
                        </h3>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </li>
    </ul>
  );
};

export default DemoPages;

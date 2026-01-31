"use client";
import React from "react";
import blogTwoData from "@/data/blogTwoData";
import { Link } from "gatsby";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { Col, Container, Row } from "react-bootstrap";

interface BlogPost {
  image: string;
  date: {
    day: string;
    month: string;
  };
  author: string;
  category: string;
  title: string;
  link: string;
}

const BlogTwo = () => {
  const {
    sectionTagline,
    sectionTitle,
    buttonText,
    buttonLink,
    mainBlog,
    blogs,
  }: {
    sectionTagline: string;
    sectionTitle: string;
    buttonText: string;
    buttonLink: string;
    mainBlog: BlogPost;
    blogs: BlogPost[];
  } = blogTwoData;

  return (
    <section className='blog-two section-space' id='blog'>
      <Container>
        <div className='blog-two__top'>
          <Row className='align-items-end'>
            <Col lg={8}>
              <div className='sec-title'>
                <h6 className='sec-title__tagline bw-split-in-right'>
                  {sectionTagline}
                </h6>
                <h3
                  className='sec-title__title bw-split-in-left'
                  dangerouslySetInnerHTML={{ __html: sectionTitle }}
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className='blog-two__top__btn text-lg-end'>
                <Link to={buttonLink} className='gotur-btn gotur-btn--base'>
                  {buttonText}
                  <span className='icon'>
                    <i className='icon-right'></i>
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        <Row className='gutter-y-30'>
          {/* Main Left Blog */}
          <Col lg={6}>
            <div
              className='blog-two__left wow fadeInLeft'
              data-wow-duration='1500ms'
              data-wow-delay='300ms'
            >
              <div className='blog-two-card'>
                <div className='blog-two-card__image position-relative'>
                  <DynamicImage src={mainBlog.image} alt={mainBlog.title} />
                  <Link
                    to={mainBlog.link}
                    className='blog-two-card__image__link'
                  ></Link>
                  <div className='blog-two-card__date'>
                    <span>{mainBlog.date.day}</span> {mainBlog.date.month}
                  </div>
                </div>
                <div className='blog-two-card__content'>
                  <ul className='list-unstyled blog-two-card__meta'>
                    <li>
                      <Link to='/blog-list'>
                        <i className='icon-user'></i>By {mainBlog.author}
                      </Link>
                    </li>
                    <li>
                      <Link to={mainBlog.link}>
                        <i className='icon-price-tag'></i>
                        {mainBlog.category}
                      </Link>
                    </li>
                  </ul>
                  <h3 className='blog-two-card__title'>
                    <Link to={mainBlog.link}>{mainBlog.title}</Link>
                  </h3>
                  <div className='blog-two-card__link'>
                    <Link to={mainBlog.link} className='blog-two-card__btn'>
                      Read More <i className='icon-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Blog List */}
          <Col lg={6}>
            <div className='blog-two-card__list'>
              {blogs.map((post, idx) => (
                <div
                  key={idx}
                  className='blog-two-card wow fadeInUp'
                  data-wow-duration='1500ms'
                  data-wow-delay='300ms'
                >
                  <div className='blog-two-card__image position-relative'>
                    <DynamicImage src={post.image} alt={post.title} />
                    <Link
                      to={post.link}
                      className='blog-two-card__image__link'
                    ></Link>
                    <div className='blog-two-card__date'>
                      <span>{post.date.day}</span> {post.date.month}
                    </div>
                  </div>
                  <div className='blog-two-card__content'>
                    <ul className='list-unstyled blog-two-card__meta'>
                      <li>
                        <Link to='/blog-list'>
                          <i className='icon-user'></i>By {post.author}
                        </Link>
                      </li>
                      <li>
                        <Link to={post.link}>
                          <i className='icon-price-tag'></i>
                          {post.category}
                        </Link>
                      </li>
                    </ul>
                    <h3 className='blog-two-card__title'>
                      <Link to={post.link}>{post.title}</Link>
                    </h3>
                    <div className='blog-two-card__link'>
                      <Link to={post.link} className='blog-two-card__btn'>
                        Read More <i className='icon-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;

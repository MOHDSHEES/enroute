import React from "react";

import Pagination from "@/components/common/Pagination/Pagination";
import { blogGridData } from "@/data/blogGridData";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from "gatsby";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
interface BlogPost {
  id: number;
  image: string;
  title: string;
  link: string;
  date: string;
  day: string;
  month: string;
  author: string;
  category: string;
}

// Define the interface for the blog data
interface BlogData {
  posts: BlogPost[];
}

const BlogGrid: React.FC = () => {
  const { posts }: BlogData = blogGridData;
  return (
    <section className='blog-page section-space'>
      <Container className='container'>
        <Row className='gutter-y-30'>
          {posts.map((post: BlogPost) => (
            <Col lg={4} md={6} key={post.id}>
              <div
                className='blog-card wow fadeInUp'
                data-wow-duration='1500ms'
                data-wow-delay={`${100 * post.id}ms`}
              >
                <div className='blog-card__image'>
                  <DynamicImage src={post.image} alt={post.title} />
                  <Link to={post.link} className='blog-card-two__image__link'>
                    <span className='sr-only'>{post.title}</span>
                  </Link>
                </div>
                <div className='blog-card__content'>
                  <div className='blog-card__content__top'>
                    <div className='blog-card__date'>
                      <span className='blog-card__date__day'>{post.day}</span>
                      <span className='blog-card__date__month'>
                        {post.month}
                      </span>
                    </div>
                    <ul className='list-unstyled blog-card__meta'>
                      <li>
                        <Link to={post.link}>
                          <span className='blog-card__meta__icon'>
                            <i className='icon-user'></i>
                          </span>
                          By {post.author}
                        </Link>
                      </li>
                      <li>
                        <Link to={post.link}>
                          <span className='blog-card__meta__icon'>
                            <i className='icon-price-tag'></i>
                          </span>
                          {post.category}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className='blog-card__title'>
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <Link to={post.link} className='blog-card__content__btn'>
                    Read More <i className='icon-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
          <Col lg={12}>
            <Pagination />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogGrid;

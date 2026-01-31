import React from "react";
import { footerDemoData } from "@/data/FooterDemo";

import { Container } from "react-bootstrap";
import { Link } from "gatsby";

const FooterDemo = () => {
  const { title, text, button, copyright } = footerDemoData;

  const year = new Date().getFullYear();

  return (
    <footer className='main-footer-landing'>
      <Container className='text-center'>
        <h2 className='main-footer-landing__title'>{title}</h2>
        <p className='main-footer-landing__text'>{text}</p>
        <Link
          to={button.href}
          rel={button.rel}
          target={button.target}
          className='gotur-btn-landing'
        >
          {button.text}
        </Link>
      </Container>

      <Container>
        <div className='main-footer-landing__copyright text-center'>
          <p>
            © Copyright <span className='dynamic-year'>{year}</span>{" "}
            {copyright.text}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterDemo;

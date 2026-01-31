import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import { teamData } from "@/data/teamPageData";
import {Link} from "gatsby";
interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    instagram: string;
  };
}
const TeamPage: React.FC = () => {
  return (
    <section className='team-page section-space'>
      <Container>
        <Row className='gutter-y-30'>
          {teamData.map((member: TeamMember, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className='team-card wow fadeInUp'
                data-wow-duration='1500ms'
                data-wow-delay={`${100 * index}ms`}
              >
                <div className='team-card__thumb'>
                  <div className='team-card__thumb__item'>
                    <img
                      src={member.image}
                      alt={`team member ${member.name}`}
                     
                    />
                  </div>
                  <div className='team-card__social'>
                    <Link
                      to={member.socialLinks.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='icon-facebook' aria-hidden='true'></i>
                      <span className='sr-only'>Facebook</span>
                    </Link>
                    <Link
                      to={member.socialLinks.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='icon-linkedin' aria-hidden='true'></i>
                      <span className='sr-only'>LinkedIn</span>
                    </Link>
                    <Link
                     to={member.socialLinks.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-instagram' aria-hidden='true'></i>
                      <span className='sr-only'>Instagram</span>
                    </Link>
                    <p>Share</p>
                  </div>
                </div>
                <div className='team-card__content'>
                  <h4 className='team-card__title'>{member.name}</h4>
                  <p className='team-card__dec'>{member.role}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamPage;

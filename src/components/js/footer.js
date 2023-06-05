import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../ImagesOfProject/instagram_profile_image.png';
import '../css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col className="text-left">
            <img src={logo} alt="Your Logo" className="footer-logo mb-3" />
          </Col>
          <Col className="text-right">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faFacebook} className="mr-4 icon-lg" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faTwitter} className="mr-4 icon-lg" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="mr-4 icon-lg" />
            </a>
            <a href="mailto:your-email@example.com" className="social-link">
              <FontAwesomeIcon icon={faEnvelope} className="icon-lg" />
            </a>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="spicy-text">© 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
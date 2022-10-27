import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

//import logo from "../../assets/images/eco-logo.png";

import "./footer.css";

const Footer = () => {
  //
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <div>
                <h1 className="text-white">JOVI</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              laudantium cum at atque. Odio explicabo eveniet similique? Minima
              aliquam deleniti facere possimus perspiciatis dolores quaerat
              quos, a, nam adipisci praesentium.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Pages</h4>
              <ListGroup className="mb-3">
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact mb-3">
                {/*  */}
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>8923 Morelia, Mich., Mexico.</p>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+85456846864</p>
                </ListGroupItem>
                {/*  */}
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>correo@correo.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          {/* COPY  */}
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} JIVO. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

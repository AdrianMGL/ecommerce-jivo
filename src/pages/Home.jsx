import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import Services from "../components/Services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";

import products from "../assets/data/products";

import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";

import "../styles/home.css";

const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [trendingModeProducts, setTrendingModeProducts] = useState([]);
  const [trendingMode1Products, setTrendingMode1Products] = useState([]);

  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredTrendingModeProducts = products.filter(
      (item) => item.category === "jacket"
    );

    const filteredTrendingMode1Products = products.filter(
      (item) => item.category === "shirt"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setTrendingModeProducts(filteredTrendingModeProducts);
    setTrendingMode1Products(filteredTrendingMode1Products);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title="Home">
      {/* HERO */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <motion.p
                  className="hero__subtitle"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.3,
                    ease: "easeInOut",
                    delay: 0.2,
                    type: "tween",
                  }}
                >
                  Trending product in {year}
                </motion.p>
                <motion.h2
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "circInOut",
                    delay: 0.2,
                    type: "just",
                  }}
                >
                  Make your interior more minimalistic & modern
                </motion.h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi debitis tenetur eius suscipit earum labore iure et
                  est? Accusamus provident labore tempora aspernatur tempore.
                  Vel enim aut expedita quibusdam ipsa?
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ scale: 1.2 }}
                  className="buy__btn mt-5"
                >
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.9,
                    ease: "anticipate",
                    delay: 0.2,
                    type: "keyframes",
                  }}
                  src={heroImg}
                  alt="hero"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* SERVICES */}
      <Services />

      {/* TRENDING PRODUCTS */}
      <section className="trending__products">
        <Container>
          <Row>
            {/* products list */}
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      {/* BEST SALES  */}
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            {/*  */}
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      {/*  COUNTER */}
      <section className="timer__count py-5">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col ">
              <div className="clock__top-content">
                <h4 className="text-white fs-5 mb-0">Limited Offers</h4>
                <h3 className="text-white fs-1 mb-3">Quantity ArmChair</h3>
              </div>
              {/* CLOCK */}
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.1 }}
                className="buy__btn store__btn mt-5"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="counter" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* NEW ARRIVALS */}
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center my-5">
              <h2 className="section__title">Best Products</h2>
            </Col>
            <ProductList data={trendingModeProducts} />
            <ProductList data={trendingMode1Products} />
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrival</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      {/* POPULAR */}
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

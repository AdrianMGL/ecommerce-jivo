import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import useAuth from "../../custom-hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import "./header.css";

//
const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

/** */
const Header = () => {
  //
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  //
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  //
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  //
  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  /*** */
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <motion.h1
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                    type: "tween",
                  }}
                >
                  <Link to="/home">JIVO</Link>
                </motion.h1>
              </div>
            </div>
            {/*  */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item) => (
                  <li key={item.path} className="nav__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
            <div className="nav__icons">
              <motion.span className="fav__icon"  whileHover={{  scale: 1.075 }}  whileTap={{ scale: 1.1 }}>
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </motion.span>

              <motion.span
                className="cart__icon"
                onClick={navigateToCart}
                whileHover={{  scale: 1.075 }}
                whileTap={{ scale: 1.1 }}
              >
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </motion.span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ scale: 0.9 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="profile"
                  onClick={toggleProfileActions}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

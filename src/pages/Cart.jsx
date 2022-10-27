import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { cartActions } from "../redux/slices/cartSlice";

import { motion } from "framer-motion";

import "../styles/cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  //
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"Shopping Cart"} />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            {/*  */}
            <Col lg="3" className="mt-5 mb-5">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">$ {totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6">
                Taxes and shipping will calculate in checkout
              </p>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05}}
                  className="buy__btn w-100 mt-5"
                >
                  <Link to="/checkout">
                    Checkout
                    <i className="ri-shield-check-line text-success"></i>
                  </Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="buy__btn w-100 mt-4"
                >
                  <Link to="/shop">Continue shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

// TR
const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    toast.error("Deleted Products");
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="image" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td className="text-center ">{item.quantity}</td>

      <td className="text-center ">
        <motion.i
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line fs-5 text-danger"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;

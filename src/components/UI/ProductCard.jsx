import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { motion } from "framer-motion";

// store
import { cartActions } from "../../redux/slices/cartSlice";

import "../../styles/product-card.css";

/**
 *
 * @param {*} param0
 * @returns
 */
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  //
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product Added successfully");
  };

  return (
    <Col lg=" 3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product_img">
          <Link to={`/shop/${item.id}`}>
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="image"
            />
          </Link>
        </div>

        <div className="product__info p-2 ">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>

        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2 ">
          <span className="price">${item.price}</span>
          <motion.span
           
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
                scale: 0.8,
                 rotate: -90,
                borderRadius: "100%",
              }}
            onClick={addToCart}
            className="add bordered"
          >
            <i
              className="ri-add-line "
            ></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

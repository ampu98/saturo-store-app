import React from "react";
import "./ProductDetails.scss";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Redux/Cart/cartSlice";

const ProductDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItem(location.state));
  };

  return (
    <div className="product-details container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require(`../assets/images/shop/${location.state.product_img}`)}
            alt={location.state.product_name}
            className="img-fluid product-image"
          />
        </div>
        <div className="col-md-6">
          <h2 className="product-name mb-3">{location.state.product_name}</h2>
          <div className="rating mb-3">
            {[...Array(5)].map((_, index) => (
              <i key={index} className="fas fa-star"></i>
            ))}
          </div>
          <div className="price mb-3">
            MRP: <span className="fw-bold">{location.state.price}</span>
            <div className="text-muted">Inclusive of all taxes.</div>
          </div>
          <button className="btn btn-primary add-to-cart" onClick={addToCart}>
            <i className="fas fa-shopping-cart me-2"></i>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

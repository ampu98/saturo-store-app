import React from "react";
import "./Products.scss";
import { useSelector } from "react-redux";
import productsSlice from "../store/slices/ProductsSlice";

const Products = () => {
  const productList = useSelector(productsSlice.getInitialState);

  return (
    <div className="product-grid">
      {productList &&
        productList.map((item, index) => (
          <div key={index} className="product-container">
            <div className="product-card">
              <div className="product-image">
                <img
                  src={require(`../assets/images/shop/${item.img}`)}
                  alt={item.pName}
                />
              </div>
              <div className="product-info">
                <h5 className="product-name">
                  <a href="#">{item.pName}</a>
                </h5>
                <p className="product-price">${item.price.toFixed(2)}</p>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;

import React, { useEffect } from "react";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import productsSlice from "../Redux/Products/ProductsSlice";
import { getProducts } from "../Redux/Products/productAction";
import { addCartItem } from "../Redux/Cart/cartSlice";

const Products = () => {
  const productList = useSelector((state) => state.pr.products);
  const cart = useSelector((state) => state.cr);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (data) => {
    dispatch(addCartItem(data));
  };

  return (
    <div className="product-grid">
      {productList &&
        productList.map((item, index) => (
          <div key={index} className="product-container">
            <div className="product-card">
              <div className="product-image">
                <img
                  src={require(`../assets/images/shop/${item.product_img}`)}
                  alt={item.product_name}
                />
              </div>
              <div className="product-info">
                <h5 className="product-name">
                  <a href="#">{item.product_name}</a>
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
              <div className="add-to-cart" onClick={() => addToCart(item)}>
                <div className="cart-button">
                  <i className="fa fa-shopping-cart"></i> Add to cart
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;

import React, { useEffect } from "react";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import productsSlice from "../Redux/Products/ProductsSlice";
import { getProducts } from "../Redux/Products/productAction";
import { addCartItem } from "../Redux/Cart/cartSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const productList = useSelector((state) => state.pr.products);
  const cart = useSelector((state) => state.cr);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (data) => {
    const payload = { ...data, quantity: 1 };
    dispatch(addCartItem(payload));
  };

  return (
    <div className="product-grid">
      {productList && productList.length > 0 ? (
        productList.map((item, index) => (
          <div key={index} className="product-container">
            <div className="product-card">
              <Link to={"/productDetails"} state={item}>
                <div className="product-image">
                  <img
                    src={require(`../assets/images/shop/${item.product_img}`)}
                    alt={item.product_name}
                  />
                </div>
              </Link>
              <div className="product-info">
                <h5 className="product-name">
                  {/* <a href="#">{item.product_name}</a> */}
                  <Link to={`/productDetails`} state={item}>
                    {item.product_name}
                  </Link>
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
        ))
      ) : (
        <div className="no-products-container">
          <div className="no-products-found">
            <h3>No products found</h3>
            <p>Sorry, there are no products available at the moment.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

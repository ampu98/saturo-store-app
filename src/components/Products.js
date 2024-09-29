import React from "react";
import "./Products.scss";

const Products = () => {
  const productList = [
    { pName: "Elegant Dress", price: 89.99, img: "shop-1.jpg" },
    { pName: "Casual T-Shirt", price: 24.99, img: "shop-2.jpg" },
    { pName: "Leather Jacket", price: 129.99, img: "shop-3.jpg" },
    { pName: "Denim Jeans", price: 59.99, img: "shop-4.jpg" },
    { pName: "Running Shoes", price: 79.99, img: "shop-5.jpg" },
    { pName: "Summer Hat", price: 19.99, img: "shop-6.jpg" },
    { pName: "Formal Suit", price: 199.99, img: "shop-7.jpg" },
    { pName: "Silk Scarf", price: 34.99, img: "shop-8.jpg" },
    { pName: "Leather Boots", price: 109.99, img: "shop-9.jpg" },
  ];

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

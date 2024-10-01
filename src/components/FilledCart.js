import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FilledCart.scss";
import { deleteCartItem, updateItemQuantity } from "../Redux/Cart/cartSlice";

const FilledCart = () => {
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();

  const quantityHandler = (e, item, key) => {
    const payload = {
      operator: e.target.innerText,
      key,
      item,
    };
    dispatch(updateItemQuantity(payload));
  };

  const deleteHandler = (item) => {
    dispatch(deleteCartItem(item));
  };

  return (
    <div className="filled-cart-container">
      <div className="cart-items">
        {cart?.cartItems.map((item, key) => (
          <div key={item.id} className="cart-item">
            <img
              src={require(`../assets/images/shop/${item.product_img}`)}
              alt={item.product_name}
              className="product-img"
            />
            <div className="item-details">
              <h4>{item.product_name}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div
              className="item-controls"
              onClick={(e) => quantityHandler(e, item, key)}
            >
              <button className="control-btn">-</button>
              <span className="item-quantity">{item.quantity}</span>
              <button className="control-btn">+</button>
              <button
                className="remove-btn"
                onClick={() => deleteHandler(item)}
              >
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <div className="summary-content">
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${cart.totalItemsPrice.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="summary-item total">
            <span>Total:</span>
            <span>${cart.totalItemsPrice.toFixed(2)}</span>
          </div>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default FilledCart;

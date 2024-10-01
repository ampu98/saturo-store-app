import React from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cr);

  return (
    <div>
      {cart && cart.cartItems.length > 0 ? <FilledCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;

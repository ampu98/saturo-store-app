import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <i className="fas fa-shopping-cart fa-4x mb-3 text-muted"></i>
          <h2 className="mb-3">Your Cart is Empty</h2>
          <p className="lead mb-4">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

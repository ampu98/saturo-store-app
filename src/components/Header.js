import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="display-4">Saturo World</h1>
            <p className="lead">
              Find great deals on all your favorite products!
            </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="dropdown me-2">
              <select className="form-select" aria-label="Category select">
                <option selected>Select category</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
            <form className="d-flex">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search products"
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  aria-label="Submit search"
                >
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
            <div className="d-flex align-items-center">
              <div className="login-container ms-3">
                <i
                  className="fa fa-user-circle user-icon"
                  aria-hidden="true"
                ></i>
                <nav className="login-links" aria-label="User authentication">
                  <a href="/login" className="me-2">
                    Login
                  </a>
                  <a href="/register">Register</a>
                </nav>
              </div>
              <div className="cart-container ms-3">
                <a
                  href="/cart"
                  className="text-white"
                  aria-label="Shopping cart"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

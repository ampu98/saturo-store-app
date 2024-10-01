import React from "react";
import "./Header.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItemCount = useSelector((state) => state.cr.totalItems);

  return (
    <header className="header bg-dark text-white py-3">
      <div className="container">
        <div className="header-content">
          <div className="brand">
            <h1 className="brand-name">Saturo World</h1>
            <p className="brand-tagline">
              Find great deals on all your favorite products!
            </p>
          </div>
          <div className="nav-actions">
            <div className="dropdown category-dropdown">
              <select className="form-select" aria-label="Category select">
                <option>Category</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
            <form className="search-form">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search products"
                />
                <button
                  className="btn btn-search"
                  type="submit"
                  aria-label="Submit search"
                >
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
            <div className="user-cart">
              <div className="user-login">
                <i
                  className="fa fa-user-circle user-icon"
                  aria-hidden="true"
                ></i>
                <nav className="login-links" aria-label="User authentication">
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                  <Link to="/register" className="register-link">
                    Register
                  </Link>
                </nav>
              </div>
              <div className="cart-container">
                <Link
                  to="/cart"
                  className="cart-link"
                  aria-label="Shopping cart"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  {cartItemCount > 0 && (
                    <div className="cart-count">
                      <p>{cartItemCount}</p>
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

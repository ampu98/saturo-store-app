import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a className="main-nav__link" href="/men">
              Men
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/women">
              Women
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/unisex">
              Unisex
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/offers">
              Offers
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

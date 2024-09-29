import React from "react";
import "./Navigation.scss";
import { useSelector } from "react-redux";
import categorySlice from "../store/slices/CategorySlice";

const Navigation = () => {
  const categories = useSelector(categorySlice.getInitialState);

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <ul className="main-nav__list">
          {categories.map((category) => (
            <li className="main-nav__item">
              <a className="main-nav__link" href={`/${category}`}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

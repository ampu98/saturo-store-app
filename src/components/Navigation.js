import React, { useEffect } from "react";
import "./Navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import categorySlice from "../Redux/Category/CategorySlice";
import { getCategories } from "../Redux/Category/actions";
import { Link } from "react-router-dom";

const Navigation = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link className="main-nav__link" to={"/"}>
              Home
            </Link>
          </li>
          {categories.map(
            (category) =>
              category.parent_category_id === null && (
                <li className="main-nav__item">
                  <a className="main-nav__link" href={`/${category}`}>
                    {category.category}
                  </a>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

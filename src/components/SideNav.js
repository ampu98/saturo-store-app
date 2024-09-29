import React from "react";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        <div className="accordion-item individual-category">
          <div className="accordion-header">
            <button
              className="accordion-button"
              data-bs-target="#accordion-heading-one"
              data-bs-toggle="collapse"
            >
              <div className="category-title">
                <a href="#">Men</a>
              </div>
            </button>
          </div>
          <div
            id="accordion-heading-one"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  <a href="#">Shirts</a>
                </li>
                <li className="sub-items">
                  <a href="#">Pants</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shoes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

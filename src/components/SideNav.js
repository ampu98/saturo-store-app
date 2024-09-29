import React from "react";
import "./SideNav.scss";
import accordionSlice from "../store/slices/AccordionSlice";
import { useSelector } from "react-redux";

const SideNav = () => {
  const accordionList = useSelector(accordionSlice.getInitialState);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        {accordionList &&
          accordionList.map((item, key) => (
            <div className="accordion-item individual-category" key={key}>
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-target={"#collapse" + key}
                  data-bs-toggle="collapse"
                >
                  <div className="category-title">
                    <a href="#">{item.category}</a>
                  </div>
                </button>
              </div>
              <div
                id={"collapse" + key}
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <ul>
                    {item.items.map((items, key) => (
                      <li className="sub-items" key={key}>
                        <a href="#">{items}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideNav;

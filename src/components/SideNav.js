import React, { useEffect, useState } from "react";
import "./SideNav.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/Category/actions";
import { filterByPrice, filterProducts } from "../Redux/Products/ProductsSlice";

const SideNav = () => {
  const accordionList = useSelector(
    (state) => state.categoryReducer.categories
  );
  const fetchProductsData = useSelector((state) => state.pr);
  const [products, setProducts] = useState();
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(200);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    setProducts(fetchProductsData.products);
  }, [fetchProductsData.status]);

  const filterData = (data) => {
    console.log(data);
    const payload = { data, products };
    dispatch(filterProducts(payload));
  };

  const filterPrice = () => {
    const payload = { products, minPrice, maxPrice };
    dispatch(filterByPrice(payload));
  };

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        {accordionList &&
          accordionList.map(
            (item) =>
              item.parent_category_id === null && (
                <div
                  className="accordion-item individual-category"
                  key={item.id}
                >
                  <div className="accordion-header">
                    <button
                      className="accordion-button"
                      data-bs-target={`#collapse${item.id}`}
                      data-bs-toggle="collapse"
                    >
                      <div className="category-title">
                        <a href="#">{item.category}</a>
                      </div>
                    </button>
                  </div>
                  <div
                    id={`collapse${item.id}`}
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <ul>
                        {accordionList.map((subCategory) => {
                          if (item.id === subCategory.parent_category_id) {
                            return (
                              <li className="sub-items" key={subCategory.id}>
                                <a
                                  href="#"
                                  onClick={() => filterData(subCategory)}
                                >
                                  {subCategory.category}
                                </a>
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>

      <div className="section-title">
        <h3>Filter by price</h3>
      </div>
      <div className="price-filter">
        <div className="price-input">
          <label htmlFor="min-price">Min: ${minPrice}</label>
          <input
            type="range"
            id="min-price"
            min={10}
            max={200}
            step={10}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="price-input">
          <label htmlFor="max-price">Max: ${maxPrice}</label>
          <input
            type="range"
            id="max-price"
            min={10}
            max={200}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button className="filter-button" onClick={() => filterPrice()}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default SideNav;

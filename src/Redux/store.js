import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category/CategorySlice";
import ProductsSlice from "./Products/ProductsSlice";
import cartSlice from "./Cart/cartSlice";

export const store = configureStore({
  reducer: {
    categoryReducer: CategorySlice,
    pr: ProductsSlice,
    cr: cartSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const filteredData = action.payload.products.filter((item) => {
        return item.category_id === action.payload.data.id;
      });

      state.products = filteredData;
    },
    filterByPrice: (state, action) => {
      const filteredData = action.payload.products.filter((item) => {
        return (
          item.price >= action.payload.minPrice &&
          item.price <= action.payload.maxPrice
        );
      });
      state.products = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "Success";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export const { filterProducts, filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;

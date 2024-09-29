import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Men", "Women", "Unisex", "Offers", "Contact"];

const categorySlice = createSlice({
  name: "category",
  initialState,
});

export default categorySlice;

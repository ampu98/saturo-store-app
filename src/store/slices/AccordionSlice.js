import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { category: "Men", items: ["Jackets", "Trousers", "Shirts", "Accessories"] },
  { category: "Women", items: ["Dresses", "Tops", "Jeans", "Accessories"] },
  { category: "Unisex", items: ["T-Shirts", "Jeans", "Shorts", "Accessories"] },
];

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
});

export default accordionSlice;

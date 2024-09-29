import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { pName: "Elegant Dress", price: 89.99, img: "shop-1.jpg" },
  { pName: "Casual T-Shirt", price: 24.99, img: "shop-2.jpg" },
  { pName: "Leather Jacket", price: 129.99, img: "shop-3.jpg" },
  { pName: "Denim Jeans", price: 59.99, img: "shop-4.jpg" },
  { pName: "Running Shoes", price: 79.99, img: "shop-5.jpg" },
  { pName: "Summer Hat", price: 19.99, img: "shop-6.jpg" },
  { pName: "Formal Suit", price: 199.99, img: "shop-7.jpg" },
  { pName: "Silk Scarf", price: 34.99, img: "shop-8.jpg" },
  { pName: "Leather Boots", price: 109.99, img: "shop-9.jpg" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
});

export default productsSlice;

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", () => {
  const categories = fetch("http://localhost:5000/getProducts").then((res) =>
    res.json()
  );
  return categories;
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productShow/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

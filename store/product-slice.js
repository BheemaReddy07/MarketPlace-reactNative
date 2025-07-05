import { createSlice } from "@reduxjs/toolkit";
import { generateFakeProducts } from "../utils/constants";

const initialState = {products:generateFakeProducts()};
export const productSlice = createSlice({
    name:"products",
    initialState
    
})
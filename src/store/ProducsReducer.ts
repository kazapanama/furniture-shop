import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "../Products";

const initialState: AllProducts[] = [];

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addAll: (state, action:{type:string,payload:AllProducts[]}) => {
      state = [...action.payload.sort((a,b)=> (+b.id) - +a.id)];
      return state as AllProducts[];
    },
    addOne: (state, action:{type:string,payload:AllProducts}) => {

      state.push(action.payload);
      
      return state as AllProducts[];
    },
    updateOne: (state, action:{type:string,payload:AllProducts}) => {
      let product:AllProducts = state.find((item) => item.id === action.payload.id)!;

      state = [
        action.payload,
        ...state.filter((item) => item.id !== product.id),
      ];
      
      return state as AllProducts[];
    },
    deleteOne: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

export const { addAll,addOne,updateOne,deleteOne} = ProductsSlice.actions;

export default ProductsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "../Products";

const initialState: AllProducts[] = [];

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addAll: (state, action:{type:string,payload:AllProducts[]}) => {
      state = [...action.payload.sort((a,b)=> (+b.id) - +a.id)];
      return state;
    },
    // addOne: (state, action) => {
    //   const flat = state.find((item) => item.id === action.payload.id);

    //   if (flat) {
    //     state = [
    //       action.payload,
    //       ...state.filter((item) => item.id !== flat.id),
    //     ];
    //   } else {
    //     state.unshift(action.payload);
    //   }
    //   return state;
    // },
    // deleteOne: (state, action) => {
    //   state = state.filter((item) => item.id !== action.payload);
    //   return state;
    // },
  },
});

export const { addAll,} = ProductsSlice.actions;

export default ProductsSlice.reducer;
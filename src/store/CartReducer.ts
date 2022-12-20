import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../types/Cart";

const initialState: ICartItem[] = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    increaseByOne: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      
      if (item) {
        item.quantity++;
      } else {
        state.push({ id: action.payload.id, price:action.payload.price, quantity: 1 });
      }
      
      return state 
    },
    decreaseByOne: (state, action) => {

      const item = state.find((item) => item.id === action.payload.id)!;
      

      if (item.quantity>1) {
        item.quantity--;
      } else {

        state = state.filter((item) => item.id !== action.payload.id);
      }

      return state 
    },
    resetToEmpty: (state) => {
      state = initialState;

      return state 
    },
  },
});

export const { increaseByOne,decreaseByOne,resetToEmpty} = CartSlice.actions;

export default CartSlice.reducer;
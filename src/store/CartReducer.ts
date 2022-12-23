import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../types/Cart";

const initialState: ICartItem[] = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    increaseByOne: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id && item.color === action.payload.color && item.price === action.payload.price);
      
      if (item) {
        item.quantity++ ;
      } else {
        const {color,clothCategory} = action.payload;

        const newItem = {
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          color,
          clothCategory
        }
        state.push(newItem);
      }
      
      return state 
    },
    decreaseByOne: (state, action) => {

      const item = state.find((item) => item.id === action.payload.id && item.color === action.payload?.color && item.price === action.payload.price)!;
      

      if (item.quantity>1) {
        item.quantity--;
      } else {

        state = state.filter((product) => product !== item);
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
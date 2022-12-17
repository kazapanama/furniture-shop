import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../Cart";

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
    // updateOne: (state, action:{type:string,payload:AllProducts}) => {
    //   let product:AllProducts = state.find((item) => item.id === action.payload.id)!;

    //   state = [
    //     action.payload,
    //     ...state.filter((item) => item.id !== product.id),
    //   ];
      
    //   return state as AllProducts[];
    // },
    // deleteOne: (state, action) => {
    //   state = state.filter((item) => item.id !== action.payload);
    //   return state;
    // },
  },
});

export const { increaseByOne,decreaseByOne} = CartSlice.actions;

export default CartSlice.reducer;
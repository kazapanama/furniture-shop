import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../Cart";

const initialState: CartItem[] = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    increaseByOne: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      
      if (item) {
        item.quantity++;
      } else {
        state.push({ id: action.payload.id, price:action.payload.price, quantity: 1 });
      }
      
      return state 
    },
    // addOne: (state, action:{type:string,payload:AllProducts}) => {

    //   state.push(action.payload);
      
    //   return state as AllProducts[];
    // },
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

export const { increaseByOne} = CartSlice.actions;

export default CartSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../firebaseConfig/firebase";
import { AllProducts } from "../types/Products";


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',

  async () => {
    const products = await getProducts();
    return products;
  }

)


interface ProductsState {
  products: AllProducts[],
  loading: boolean,
  error: boolean | null
}

const initialState:ProductsState = {
  products:[],
  loading: false,
  error: null
}

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addOne: (state, action:{type:string,payload:AllProducts}) => {

      state.products.push(action.payload);
      
      return state
    },
    updateOne: (state, action:{type:string,payload:AllProducts}) => {
      let product:AllProducts = state.products.find((item) => item.id === action.payload.id)!;

      state.products = [
        action.payload,
        ...state.products.filter((item) => item.id !== product.id),
      ];
      
      return state
    },
    deleteOne: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
      return state;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    
    builder.addCase(fetchProducts.pending, (state) => {
      // Add user to the state array
      state.loading = true

    }),
    
    builder.addCase(fetchProducts.fulfilled, (state, action:{type:string,payload:AllProducts[]}) => {
      // Add user to the state array
      state.products = action.payload
      state.loading = false

    }),
    
    builder.addCase(fetchProducts.rejected, (state) => {
      // Add user to the state array
      state.error = true
      state.loading = false
    })
  },

})

export const { addOne,updateOne,deleteOne} = ProductsSlice.actions;

export default ProductsSlice.reducer;
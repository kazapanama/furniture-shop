import { configureStore,combineReducers } from "@reduxjs/toolkit";
import products from "./ProducsReducer";
import user from "./UserReducer";
import cart from "./CartReducer";

const rootReducer = combineReducers({
    products,
    user,
    cart
})





export const store = configureStore({
    reducer:rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
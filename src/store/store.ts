import { configureStore,combineReducers } from "@reduxjs/toolkit";
import products from "./ProducsReducer";
import user from "./UserReducer";
import cart from "./CartReducer";

import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const rootReducer = combineReducers({
    products,
    user,
    cart
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)



  export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
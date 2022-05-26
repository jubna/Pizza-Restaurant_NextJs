import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux"; 
import cartReducer from "./cartSlice";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const reducers = combineReducers({
    cartlist: cartReducer,      
   });

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducers)

    const store = configureStore({
        reducer:persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
          })
    })
   
    export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// export default configureStore({
//     reducer: {
//       cart: cartReducer,
//     },
//   });
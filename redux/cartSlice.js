import { createSlice,current } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        totalPrice:0,
    },
    reducers:{
        addProduct:(state,action)=>{
        
           
         state.products.push(action.payload);
            state.quantity +=action.payload.orgQty;
            state.totalPrice+= action.payload.totalPrice
        }
    ,
    reset:(state)=>{
        state.products=[];
        state.quantity=0;
        state.totalPrice=0
    }   
}
})



export const {addProduct,reset} =cartSlice.actions;
export default cartSlice.reducer;
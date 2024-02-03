
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./CounterSlice"


const Store=configureStore({
    reducer:{
    mycounter:countReducer,
    }
});
export default Store;

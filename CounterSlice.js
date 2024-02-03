import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({

    name:"mycounter",
    initialState:{
        cnt:0,
    },

    reducers:{
        Increment:(state)=>{
            state.cnt=state.cnt+1;
        },
        Decrement:(state)=>{
            state.cnt= state.cnt-1;
        }
    }
});
export const {Increment,Decrement}=CounterSlice.actions;
export default CounterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        nowTailor:null
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addTrailor:(state,action)=>{
       state.nowTailor=action.payload;
        }
    }
});

export default movieslice.reducer;
export const {addnowplayingmovies,addTrailor}= movieslice.actions
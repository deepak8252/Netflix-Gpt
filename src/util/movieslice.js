import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        nowTailor:null,
        PopularMovies:null,
        UpComming:null,
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
          state.PopularMovies=action.payload;
        },
        addUpComming:(state,action)=>{
          state.UpComming=action.payload;
        },
        addTrailor:(state,action)=>{
       state.nowTailor=action.payload;
        }
    }
});

export default movieslice.reducer;
export const {addnowplayingmovies,addTrailor,addPopularMovies,addUpComming}= movieslice.actions;
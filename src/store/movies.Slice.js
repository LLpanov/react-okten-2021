import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../sevices";

const initialState ={
    pages: []
}


export const getMoviePage = createAsyncThunk(
    'moviesSlice/getMoviePage',
        async (_,{dispatch}) =>{
            const {data} = await movieService.getAll(data);
            console.log(data)

        }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState
});

const movieReducer = moviesSlice.reducer;
export default movieReducer;

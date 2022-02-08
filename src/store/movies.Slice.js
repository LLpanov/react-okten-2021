import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService, movieService} from "../sevices";

const initialState = {
    movieList: [],
    state: null,
    error: null,

    genre: []
}


export const getMovieList = createAsyncThunk(
    'moviesSlice/getMovieList',
    async (_, {dispatch}) => {

        const {data: {results, page, total_pages, total_results}} = await movieService.getAll();
        dispatch(setMovieList({movieList: results}))


    });

export const getGenre = createAsyncThunk(
    'moviesSlice/getGenre',
    async (_, {dispatch}) => {

        const {data:{genres}} = await genreService.getAll()
        dispatch(setGenre({genre:genres}))


    })

const moviesSlice = createSlice({
    name: 'moviesSlice',

    initialState,
    reducers: {
        setMovieList: (state, action) => {
            state.movieList = action.payload.movieList
        },
        setGenre: (state,action)=>{
            state.genre =action.payload.genre
        }

    },
    extraReducers:{

    }


});

const movieReducer = moviesSlice.reducer;
export const {setMovieList,setGenre} = moviesSlice.actions
export default movieReducer;

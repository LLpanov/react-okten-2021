import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService, movieService, PaginationService} from "../sevices";

const initialState = {
    movieList: [],
    state: null,
    error: null,
    genre: []
}


export const getMovieList = createAsyncThunk(
    'movieSlice/getMovieList',
    async (_, {rejectWithValue}) => {
            const movies = await movieService.getAll()
        try {
            return movies
        }
        catch (e){
            return rejectWithValue(e.message);
        }



    }
)

export const getGenre = createAsyncThunk(
    'moviesSlice/getGenre',
    async (_, {dispatch}) => {

        const {data: {genres}} = await genreService.getAll()
        dispatch(setGenre({genre: genres}))


    });


export const Pagination = createAsyncThunk(
    'moviesSlice/Pagination',
    async (page, {dispatch}) => {
        try {
            const newPage = await PaginationService.getPage(page)
            console.log(page);
            dispatch(setPage(newPage))

        } catch (e) {
            console.log(e)
        }

    });


const moviesSlice = createSlice({
    name: 'moviesSlice',

    initialState,
    reducers: {
        setMovieList: (state, action) => {
            state.movieList = action.payload.movieList
        },
        setGenre: (state, action) => {
            state.genre = action.payload.genre
        },
        //
        // setPage: (state, action) => {
        //     state.movieList = action.payload
        //
        // }

    },
    extraReducers: {
        [getMovieList.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getMovieList.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movieList = action.payload
        },
        [getMovieList.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
    });

const movieReducer = moviesSlice.reducer;
export const {setGenre, setPage} = moviesSlice.actions
export default movieReducer;

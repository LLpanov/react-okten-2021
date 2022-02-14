import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {genreService, movieService} from '../sevices';

const initialState = {
    movieDetail: [],
    status: null,
    error: null,
    genre: []
}


export const getGenre = createAsyncThunk(
    'moviesSlice/getGenre',
    async (_, {dispatch}) => {

        const {data: {genres}} = await genreService.getAll()
        dispatch(setGenre({genre: genres}));


    });

export const getMovie = createAsyncThunk(
    'moviesSlice/getMovie',
    async ({id}, {rejectWithValue}) => {
            const movieDetail = await movieService.getById(id);

            try {
                return movieDetail

            } catch (e) {
                return rejectWithValue(e.message)
            }

    })


const moviesSlice = createSlice({
    name: 'moviesSlice',

    initialState,
    reducers: {
        setGenre: (state, action) => {
            state.genre = action.payload.genre
        },
        setMovieDetails: (state, action) => {
            state.movieDetail = action.payload
        },



    },
    extraReducers: {
        [getMovie.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movieDetail = action.payload
        },
        [getMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
});

const movieReducer = moviesSlice.reducer;
export const {setMovieDetails, setGenre} = moviesSlice.actions
export default movieReducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {pagesService} from '../sevices';

const initialState = {
    genre: "",
    page: {},
    state: null,
    error: null,

}

export const getPageWithGenre = createAsyncThunk(
    'pageSlice/getPageWithGenre',
    async ([genre, page], {dispatch, rejectWithValue}) => {
        try {
            dispatch(setPage(await pagesService.getPageByNumberWithGenre(genre, page)))
            return genre
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const pageSlice = createSlice({
    name: 'pageSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setGenres: (state, action) => {
            state.genre = action.payload
        }
    },
    extraReducers: {
        [getPageWithGenre.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getPageWithGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genre = action.payload
        },
        [getPageWithGenre.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const pageReducer = pageSlice.reducer;
export const {setPage, setGenres} = pageSlice.actions
export default pageReducer;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {placeholderService} from "../sevices/placeholder.service";

export const getAllComment = createAsyncThunk(
    'commentsSlice/getAllComment',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllComments();

        } catch (e) {
            return (rejectWithValue(e.message));

        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllComment.pending]: (state) => {
            state.status = 'pending';
            state.error = null;

        },
        [getAllComment.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComment.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }

    }


});


const commentsReducer = commentsSlice.reducer;
export default commentsReducer;

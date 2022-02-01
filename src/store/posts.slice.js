import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {placeholderService} from "../sevices/placeholder.service";

export const getAllPost = createAsyncThunk(
    'usersSlice/getAllPost',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllPosts();

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const postsSLice = createSlice({
    name: 'postsSLice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllPost.pending]: (state) => {
            state.status = 'pending';
            state.error = null;

        },
        [getAllPost.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;

        },
        [getAllPost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }

    }

})

const postsReducer = postsSLice.reducer;

export default postsReducer;

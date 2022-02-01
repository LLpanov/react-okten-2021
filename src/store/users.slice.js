import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {placeholderService} from "../sevices/placeholder.service";

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await placeholderService.getAllUsers()
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending';
            state.error = null;

        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;

        },

        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }

})

const usersReducer = usersSlice.reducer;

export default usersReducer;



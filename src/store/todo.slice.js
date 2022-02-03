import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],

};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false});
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            todo.status = !todo.status;
        },
        del: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);

        }


    }
});

const todoReducer = todoSlice.reducer;
export const {addTodo, changeStatus, del} = todoSlice.actions;
export default todoReducer;
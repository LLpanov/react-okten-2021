import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import usersReducer from "./users.slice";
import postsReducer from "./posts.slice";
import commentsReducer from "./comments.slice";

const store = configureStore({
    reducer: {
        carReducer: carReducer,
        usersReducer: usersReducer,
        postsReducer: postsReducer,
        commentsReducer: commentsReducer
    }
})

export default store

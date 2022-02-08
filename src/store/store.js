import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movies.Slice";

const store = configureStore({
    reducer: {
        movieList: movieReducer


    }

});

export default store;

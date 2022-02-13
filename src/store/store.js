import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movies.Slice";
import pageReducer from "./pages.Slice";

const store = configureStore({
    reducer: {
        movieList: movieReducer ,pageReducer


    }

});

export default store;

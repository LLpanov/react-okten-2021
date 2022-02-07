import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movies.Slice";

const store = configureStore({
    reducer: {
        page: movieReducer,


    }

});

export default store;

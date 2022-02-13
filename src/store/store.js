import {configureStore} from '@reduxjs/toolkit';

import pageReducer from './pageWithGenre.Slice';
import movieReducer from './movies.Slice';

const store = configureStore({
    reducer: {
        movieList: movieReducer ,pageReducer


    }

});

export default store;

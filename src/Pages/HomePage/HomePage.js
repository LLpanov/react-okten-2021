import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovieList} from "../../store";
import {MovieList} from "../../components";
import css from './HomePage.module.css'

const HomePage = () => {

    const {movieList} = useSelector(state => state['movieList']);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovieList())
    }, [])

    return (

        <div className={css.Wrap}>


            {movieList.map(movies => <MovieList key={movies.id} movies={movies}/>)}

        </div>
    );
};

export {HomePage};
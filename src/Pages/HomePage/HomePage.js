import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovieList} from "../../store";
import {MovieList} from "../../components";
import './Loading.scss'
import './HomePage.scss'


const HomePage = () => {

    const {movieList: {results, page, total_page},status,error} = useSelector(state => state['movieList']);


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovieList())


    }, [])


    return (


        <div>
            <div className={'movie-container'}>
                {status === 'pending' && <div className={'loading'}>Loading...</div>}
                {error && <h4>Back Invalid{error}</h4>}
                {results && results.map(movies => <MovieList key={movies.id} movies={movies}/>)}
            </div>
            <div className={'btn'}>
                <button>prev</button>
                <span>{page}</span>
                <button>next</button>
            </div>
        </div>
    );
};
export {HomePage};
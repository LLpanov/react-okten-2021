import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getGenre} from '../../store';
import './Loading.scss'
import './HomePage.scss'
import {getPageWithGenre} from "../../store/pages.Slice";
import {MovieList} from "../../components";

const HomePage = () => {

    const {genre:allGenres} = useSelector(state => state['movieList']);
    const {page: {results, page}, genre} = useSelector(state => state['pageReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPageWithGenre(["", 1]))
    }, [])

    useEffect(() => {

        dispatch(getGenre())

    }, [])


    const Next = (p) => {
        if(p<500) dispatch(getPageWithGenre([genre, p+1]))
        else dispatch(getPageWithGenre([genre,1]))
    }

    const Prev = (p) => {
        if(p>1) dispatch(getPageWithGenre([genre,p-1]))
        else dispatch(getPageWithGenre([genre,500]))
    }

    const changeGenreTo = (newGenre = "") => {
        dispatch(getPageWithGenre([newGenre,1]))
    }



    return (


        <div>

            <div className={'Genres'}>
                {allGenres.map(genre => <div onClick={() => changeGenreTo(genre.id)} className={'genre-item'} key={genre.id}>{genre.name}</div>)}
            </div>

            <div className={'movie-container'}>
                {/*    {status === 'pending' && <div className={'loading'}>Loading...</div>}*/}
                {/*    {error && <h4>Back Invalid{error}</h4>}*/}
                {results && results.map(movies => <MovieList key={movies.id} movies={movies}/>)}
            </div>
            <div className={'btn'}>
                <button onClick={() => Prev(page)}>PREV</button>
                <span>{page}</span>
                <button onClick={() => Next(page)}>NEXT</button>
            </div>

        </div>
    );
};
export {HomePage};
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";

import {getMovie} from '../../store';
import './MovieDetails.scss'
import '../../Pages/HomePage/Loading.scss'

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieDetail:{backdrop_path,budget,original_title,overview,release_date,vote_average,vote_count,genres},error,status} = useSelector(state => state['movieList']);
    const {id} = useParams();



    useEffect(() => {
        dispatch(getMovie({id}));
    }, [id])
    return (

        <div className={'movie-section'}>
          <div><img src={`https://image.tmdb.org/t/p/w780${backdrop_path}`} alt="Poster"/></div>
            {status === 'pending' && <div className={'loading'}>Loading...</div>}
            {error && <h4 style={{color:'red'}}>Back Invalid: {error}</h4>}
            <div className={'allGenres'}>{genres && genres.map(genres => <div className={'genres'} key={genres.id}>{genres.name}</div>)}</div>
            <div>
                <div className={'movie-title'}><h2>{original_title} <span>{vote_average} / 10</span></h2></div>
                <div className={'movie-plot'}><p>{overview}</p></div>
                <div className={'movie-some-info'}><p>Budget: $ {budget} million</p>
                    <p>Date: {release_date}</p>
                    <p>Votes: {vote_count}</p>
                </div>
            </div>

        </div>
    );
};

export {MovieDetails};
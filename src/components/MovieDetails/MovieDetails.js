import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../store";
import {useParams} from "react-router-dom";
import './MovieDetails.scss'

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieDetail:{backdrop_path,budget,original_language,original_title,overview,release_date,status,vote_average}} = useSelector(state => state['movieList']);
    const {id} = useParams();


    useEffect(() => {
        dispatch(getMovie(id));
    }, [id])
    return (
        <div className={'movie-section'}>
          <div><img src={`https://image.tmdb.org/t/p/w780${backdrop_path}`} alt="Poster"/></div>
            <div>
                <div className={'movie-title'}><h2>{original_title} <span>{vote_average} / 10</span></h2></div>
                <div className={'movie-plot'}><p>{overview}</p></div>
                <div><p>Budget:</p></div>
            </div>

        </div>
    );
};

export {MovieDetails};
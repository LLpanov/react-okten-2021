import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../store";
import {useParams} from "react-router-dom";
import './MovieDetails.scss'

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieDetail:{backdrop_path,budget,original_title,overview,release_date,status,vote_average,vote_count,genres}} = useSelector(state => state['movieList']);
    const {id} = useParams();
    console.log(genres)



    useEffect(() => {
        dispatch(getMovie({id}));
    }, [id])
    return (
        <div className={'movie-section'}>
          <div><img src={`https://image.tmdb.org/t/p/w780${backdrop_path}`} alt="Poster"/></div>
            <div className={'allGenres'}>{genres.map(genres => <div className={'genres'} key={genres.id}>{genres.name}</div>)}</div>
            <div>
                <div className={'movie-title'}><h2>{original_title} <span>{vote_average} / 10</span></h2></div>
                <div className={'movie-plot'}><p>{overview}</p></div>
                <div className={'movie-some-info'}><p>Budget: $ {budget} million</p>
                    <p>Status : {status} </p>
                    <p>Date: {release_date}</p>
                    <p>Votes: {vote_count}</p>
                </div>
            </div>

        </div>
    );
};

export {MovieDetails};
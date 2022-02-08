import React from 'react';

import css from './MovieList.module.css'

const MovieList = ({movies: {original_title, overview, release_date, vote_average, vote_count, poster_path}}) => {

    return (
        <div className={css.Wrap}>
            <div><img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/></div>
            <div>
                <h4>{original_title}</h4>
                <span>Rating:{vote_average} (total votes:{vote_count})</span>
                <p>{overview}</p>
                <span>Release date: {release_date}</span>

            </div>


        </div>
    );
};

export {MovieList};
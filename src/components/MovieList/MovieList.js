import React from 'react';

import './MovieList.scss'

const MovieList = ({movies: {original_title, release_date, vote_average, vote_count, poster_path}}) => {

    return (
        <div className={'card-item'}>
            <div className={'card-top'}><img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}/></div>
            <div className={'card-info'}>
                <h5>{original_title}</h5>
                <p>Rating: <span>{vote_average}</span></p>
                <p>total votes: <span>{vote_count}</span></p>
                <p>Release : <span>{release_date}</span></p>
            </div>
        </div>
    );
};

export {MovieList};
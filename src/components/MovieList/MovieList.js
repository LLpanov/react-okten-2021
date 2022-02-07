import React from 'react';

const MovieList = ({movies: {original_title, overview, release_date, vote_average, vote_count, poster_path}}) => {

    return (
        <div>
            <div><img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/></div>
            <div>
                <h2>{original_title}</h2>
                <span>Rating:{vote_average} (total votes:{vote_count})</span>
                <p>{overview}</p>
                <span>Release date: {release_date}</span>

            </div>


        </div>
    );
};

export {MovieList};
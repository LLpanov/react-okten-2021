import React from 'react';

import './MovieList.scss'
import {Link} from "react-router-dom";

const MovieList = ({movies: {id, original_title, release_date, vote_average, vote_count, poster_path}}) => {
    return (
        <div className={'card-item'}>
            <Link to={`/movie/${id}`}>
                <div className={'card-top'}><img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                                                 alt={original_title}/></div>
                <div className={'card-info'}>
                    <h5>{original_title}</h5>
                    <p>Rating: <span>{vote_average} / 10</span></p>
                    <p>total votes: <span>{vote_count}</span></p>
                    <p>Release : <span>{release_date.slice(0, 4)}</span></p>
                </div>
            </Link>
        </div>
    );
};

export {MovieList};
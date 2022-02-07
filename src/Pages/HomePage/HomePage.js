import React, {useEffect, useState} from 'react';
import {movieService} from "../../sevices";
import {MovieList} from "../../components";

const HomePage = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {

        (async () => {
            const {data:{results, page, total_pages, total_results}} = await movieService.getAll();
            setMovieList(results);

        })();

    }, [])
    return (

        <div>
            {movieList.map(movies => <MovieList key={movies.id} movies={movies}/>)}

        </div>
    );
};

export {HomePage};
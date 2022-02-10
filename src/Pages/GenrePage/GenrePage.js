import React, {useEffect, useState} from 'react';
import {genreService} from "../../sevices";
import {useDispatch, useSelector} from "react-redux";
import {getGenre} from "../../store";

const GenrePage = () => {

    // const [genre, setGenre] = useState([]);
    // console.log(genre);
    // useEffect(() => {
    //     (async () => {
    //         const {data} = await genreService.getAll();
    //         setGenre(data)
    //
    //     })()
    //
    // }, [])
    const {genre} = useSelector(state => state['movieList']);
    console.log(genre)

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getGenre())

    }, [])

    return (
        <div>
            {genre.map(genre => <div key={genre.id}>{genre.name} </div>)}
        </div>
    );
};

export {GenrePage};
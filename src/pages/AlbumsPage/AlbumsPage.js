import React, {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../sevices/albums.service";
import css from "../page.module.css"

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getUserAlbums(id).then(value => setAlbums([...value]))

    }, [id])
    console.log(albums)
    return (
        <div className={css.TargetAlbums}>
            {albums.map(album => <div className={css.AlbumUsers} key={album.id}>
                <p>UserID :{album.userId}</p>
                <p>ID :{album.id}</p>
                <p>Title : {album.title}</p>
                <Link to={`${id.toString()}/photos`}>
                    <button>photo</button>
                </Link>
            </div>)}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {albumsService} from "../../sevices/albums.service";
import css from "../page.module.css"

const PhotosPage = () => {
    const {id} = useParams();
    const [photos, setPhoto] = useState([]);

    useEffect(() => {
        albumsService.getUserPhoto(id).then(value => setPhoto([...value]));

    }, [id])

    return (
        <div className={css.TargetPhoto}>
            {photos.map(photo =>
                <div className={css.Photo} key={photo.id}>
                    <div>
                        <p>AlbumID :{photo.albumId}</p>
                        <p>ID :{photo.id}</p>
                    </div>
                    <p>{<img src={photo.thumbnailUrl} alt="photo"/>}</p>
                </div>)}
        </div>
    );
};

export {PhotosPage};
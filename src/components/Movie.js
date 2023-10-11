import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({title, poster_path, vote_average}) {
    return (
        <div className="movieContainer">
            <img src={BASE_URL + poster_path}/>
            <div className="movieInfo">
                <h4>제목{title}</h4>
                <span>평점 {vote_average}</span>
            </div>
        </div>
    )
}

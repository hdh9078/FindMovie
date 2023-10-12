import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Upcoming({title, poster_path, release_date}) {
    
    return (
        <div className="movieContainer">
            <img className="movieImg" src={BASE_URL + poster_path}/>
            <div className="movieInfo">
                <h4>{title}</h4>
                <span>개봉일{release_date}</span>
            </div>
        </div>
    )
}
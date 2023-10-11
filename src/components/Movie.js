import React from "react";
import image1 from "../img/기생충.jpg"
import image2 from "../img/너의 이름은.jpg"
import image3 from "../img/인셉션.jpg"

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({title, poster_path, vote_average}) {
    return (
        <div className="movieContainer">
            <img className="movieImg" src={BASE_URL + poster_path}/>
            <div className="movieInfo">
                <h4>{title}</h4>
                <span>평점 {vote_average}</span>
            </div>
        </div>
    )
}

{/* <div className="movieSlideCover">
                <div className="movieSlideWrapper">
                    <img className="movieSlideImg" src={image1}/>
                    <img className="movieSlideImg" src={image2}/>
                    <img className="movieSlideImg" src={image3}/>
                </div>
            </div> */}
import React, { useState } from "react";
import MovieUpcomingModal from "./MoviePosterModal.tsx";
import { MovieData } from "../movieData.ts";


const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieData;
};


export default function VoteAverage({movieData}: Props) {
    
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <>
            <div className="movieContainer" onClick={() => setVisibleModal(true)}>
                <img className="movieImg" src={BASE_URL + movieData.poster_path}/>
                <div className="movieInfo">
                    <h4>{movieData.title}</h4>
                    <span>평점 {movieData.vote_average}</span>
                </div>
            </div>
            {visibleModal && <MovieUpcomingModal movieData={movieData} setVisibleModal={setVisibleModal} />}
        </>
        
    )
}
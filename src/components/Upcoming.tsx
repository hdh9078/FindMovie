import React, { useState } from "react";
import MovieUpcomingModal from "./MoviePosterModal.tsx";
import { MovieUpcoming } from "../movieUpcoming.ts";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieUpcoming;
};

export default function Upcoming({movieData}: Props) {

    const [visibleModal, setVisibleModal] = useState(false);
    
    return (
        <>
            <div className="movieContainer" onClick={() => setVisibleModal(true)}>
                <img className="movieImg" src={BASE_URL + movieData.poster_path}/>
                <div className="movieInfo">
                    <h4>{movieData.title}</h4>
                    <span>개봉일{movieData.release_date}</span>
                </div>
            </div>

            {visibleModal && <MovieUpcomingModal movieData={movieData} setVisibleModal={setVisibleModal} />}
        </>
    )
}
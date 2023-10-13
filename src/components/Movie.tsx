import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviePosterModal from "./MoviePosterModal.tsx";
import { MovieData } from "../movieData.ts";


const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieData;
}

export default function Movie({ movieData }: Props) {
    // const navigete = useNavigate();
    // const movieInfor = (image) => {
    //     // navigete(`/movie/${props.title}`, {state:props})
    //     const modal = document.querySelector("#modalContainer");
    //     modal.classList.remove("hidden");
    // };

    // const closeModal = () => {
    //     const modal = document.querySelector("#modalContainer");
    //     modal.classList.add("hidden");
    // };

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <>
            <div className="movieContainer" id="movieContainer" onClick={() => setVisibleModal(true)}>
                <img className="movieImg" src={BASE_URL + movieData.poster_path} />
                <div className="movieInfo">
                    <h4>{movieData.title}</h4>
                    <span>평점 {movieData.vote_average}</span>
                </div>
            </div>


            {visibleModal && <MoviePosterModal movieData={movieData} setVisibleModal={setVisibleModal} />}
            {/*---------modal---------*/}
            {/* <div id="modalContainer" className="hidden" onClick={closeModal}>
                <div className="modalWrapper" onClick={closeModal}>
                    <div className="modalMain">
                        <div className="modalHeader">
                            <div classNames="modalTitle">영화정보</div>
                            <button type="button" className="modalButton" onClick={closeModal}>x</button>
                        </div>
                        <br />
                        <img className="modalImg" src={BASE_URL + props.poster_path} />
                        <div class="wrapperMyPlaylist"></div>
                    </div>
                </div>
            </div> */}

        </>
    )
}


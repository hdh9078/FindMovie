import React, { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { MovieData } from '../movieData.ts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons"
import styles from "../css/MoviePosterModal.module.css";
import MovieContext from './store/movie-context.tsx';

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieData;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MoviePosterModal({ movieData, setVisibleModal }: Props) {

    const { movies, setMovies } = useContext(MovieContext);
    const [visible, setVisible] = useState(true);
    const addMovie = (movie: MovieData) => {
        setMovies((prev) => [...prev, movie]);
        setVisible(!visible);
    };


    return (
        <Portal>
            <div className={styles.dim} onClick={() => setVisibleModal(false)} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <div onClick={() => setVisibleModal(false)}><FontAwesomeIcon icon={faCircleXmark} /></div>
                </div>


                <img className={styles.modalImg} src={BASE_URL + movieData.poster_path} />
                <br/>
                <div className={styles.movieData}>
                    <div className={styles.pickupCover}>
                        <div>제목:{movieData.title}</div><br />
                        <button className={styles.pickupBtn} onClick={() => addMovie(movieData)}><FontAwesomeIcon icon={faBriefcase} /></button>
                    </div><br />
                    <div>개봉날짜:{movieData.release_date}</div><br />
                    <div className={styles.story}>줄거리:{movieData.overview}</div>
                </div>
            </div>
        </Portal>
    )
}


interface PortalProps {
    portalId?: string;
    children?: React.ReactNode;
}

const Portal = ({ portalId = 'portal', children }: PortalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    return mounted ? createPortal(children, document.getElementById(portalId) as HTMLElement) : null;
};

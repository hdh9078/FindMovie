import React, { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { MovieUpcoming } from '../movieUpcoming.ts';
import styles from "../css/MoviePosterModal.module.css";
import MovieContext from './store/movie-context.tsx';

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieUpcoming;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MovieUpcomingModal({ movieData, setVisibleModal }: Props) {

    const { upcoming, setUpcoming } = useContext(MovieContext);

    const addMovie = (movie: MovieUpcoming) => {
        setUpcoming((prev) => [...prev, movie]);
    };


    return (
        <Portal>
            <div className={styles.dim} onClick={() => setVisibleModal(false)}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.outBtn} onClick={() => setVisibleModal(false)}>x</div>
                    </div>


                    <img className={styles.modalImg} src={BASE_URL + movieData.poster_path} />
                    
                    <div className={styles.movieData}>
                        <div>제목:{movieData.title}</div><br />
                        <div>개봉날짜:{movieData.release_date}</div><br />
                        <div className={styles.story}>줄거리:{movieData.overview}</div>
                        <button className={styles.btn} onClick={() => addMovie(movieData)}>찜</button>
                    </div>
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

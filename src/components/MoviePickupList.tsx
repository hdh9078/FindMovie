import { useContext, useState } from 'react';
import MovieContext from "./store/movie-context.tsx";
import { MovieData } from '../movieData.ts';
import styles from "../css/MoviePickupList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieData;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MoviePickupList({ movieData }: Props) {
    const [visible, setVisible] = useState(true);
    const { movies, setMovies } = useContext(MovieContext);

    const removeMovie = (movie: MovieData) => {
        setMovies(movies.filter((movied) => movied.id !== movie.id));
    };

    

    return (
        <div className={styles.container}>
            <h2>나중에 볼 영화 목록<br/>{movies.length ? "" 
            : <div className={styles.noData}>저장된 영화가 없습니다.</div>}
                
            </h2>
            
            {movies.map((movie) => {
                return (
                    <div key={movie.id} className={styles.wrapper}>
                        <img className="movieImg" src={BASE_URL + movie.poster_path} />
                        <div className={styles.main}>
                            <div className={styles.title}>{movie.title}</div>
                            <button className={styles.btn} onClick={() => removeMovie(movie)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div> 
                    </div>
                );
            })}
        </div>
    );
}

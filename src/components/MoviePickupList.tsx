import { useContext } from 'react';
import MovieContext from "./store/movie-context.tsx";
import { MovieData } from '../movieData.ts';


const BASE_URL = "https://image.tmdb.org/t/p/w500/";

interface Props {
    movieData: MovieData;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MoviePickupList({ movieData }: Props) {

    const { movies, setMovies } = useContext(MovieContext);

    const removeMovie = (movie: MovieData) => {
        setMovies(movies.filter((movied) => movied.id !== movie.id));
    };

    return (
        <div>
            <h2>나중에 볼 영화 목록</h2>
            {movies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <div>
                            {movie.title}
                        </div>
                        <img className="movieImg" src={BASE_URL + movie.poster_path} />
                        <button onClick={() => removeMovie(movie)}>삭제</button>
                    </div>
                );
            })}
        </div>
    );
}

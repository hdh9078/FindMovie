import React, { createContext, useState } from 'react';
import { MovieData } from '../../movieData';
import {MovieUpcoming} from "../../movieUpcoming";

//context
const MovieContext = createContext({
    movies: [] as MovieData[],
    setMovies: null as any as React.Dispatch<React.SetStateAction<MovieData[]>>,
    upcoming: [] as MovieUpcoming[],
    setUpcoming: null as any as React.Dispatch<React.SetStateAction<MovieData[]>>,
    voteAverage: [] as MovieData[],
    setVoteAverage: null as any as React.Dispatch<React.SetStateAction<MovieData[]>>
});

//provider component
export function MovieProvider(props: any) {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const [upcoming, setUpcoming] = useState<MovieUpcoming[]>([]);
    const [voteAverage, setVoteAverage] = useState<MovieUpcoming[]>([]);
    return <MovieContext.Provider value={{ movies, setMovies, upcoming, setUpcoming, voteAverage, setVoteAverage }}>{props.children}</MovieContext.Provider>;
}

export default MovieContext;


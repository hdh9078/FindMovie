import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import { movieNow } from "../movieNow";
import { data } from "../movieData";
import { upcomingMovie } from "../movieUpcoming";
import Main from "./Main";
import Movie from "./Movie"
import Upcoming from "./Upcoming";
import VoteAverage from "./VoteAverage";
import MovieContext, { MovieProvider } from "./store/movie-context";
import MoviePickupList from "./MoviePickupList";
import { useContext } from "react";


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/voteAverage" element={
                        <div className="app-container">
                            {data.results.map((value) => {
                                return (
                                    <VoteAverage
                                        title={value.title}
                                        poster_path={value.poster_path}
                                        vote_average={value.vote_average}
                                    />
                                )
                            })
                            }
                        </div>
                    } />
                    <Route path="/upcoming" element={
                        <div className="app-container">
                            {upcomingMovie.results.map((value, i) => {
                                return (
                                    <Upcoming
                                        key={i}
                                        movieData={value}
                                    />
                                )
                            })
                            }
                        </div>} />
                    <Route path="/" element={
                        <div className="app-container">
                            <Main />
                            {movieNow.results.map((value, i) => {
                                return (
                                    <Movie
                                        key={i}
                                        movieData={value}
                                    />
                                )
                            })
                            }
                        </div>} />
                    <Route path="/pickup" element={<MoviePickupList />} />
                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}
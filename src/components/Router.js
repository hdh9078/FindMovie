import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import { movieNow } from "../movieNow";
import {data} from "../movieData";
import {upcomingMovie} from "../movieUpcoming";
import Main from "./Main";
import Movie from "./Movie"
import Upcoming from "./Upcoming";
import VoteAverage from "./VoteAverage";
import Pickup from "./Pickup";


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
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
                            {upcomingMovie.results.map((value) => {
                                return (
                                <Upcoming
                                    title={value.title}
                                    poster_path={value.poster_path}
                                    release_date={value.release_date}
                                />
                                )
                            })
                            }
                      </div>}/>
                    <Route path="/" element={
                        <div className="app-container">
                            <Main/>
                            {movieNow.results.map((value) => {
                                return (
                                    <Movie
                                        title={value.title}
                                        poster_path={value.poster_path}
                                        vote_average={value.vote_average}
                                    />
                                )
                            })
                            }
                      </div>}/>
                    <Route path="/pickup" element={<Pickup/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
            
        
        </>
    )
}
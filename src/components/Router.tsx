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
import MoviePickupList from "./MoviePickupList";
import HeaderMain from "./HeadMain";
import Signin from "./Signin";


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HeaderMain/>}/>
                    <Route path="/main" element={
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
                            </div>}
                        />

                    <Route path="/voteAverage" element={
                        <div className="app-container">
                            {data.results.map((value, i) => {
                                return (
                                    <VoteAverage
                                        key={i}
                                        movieData={value}
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
                    
                    <Route path="/pickup" element={<MoviePickupList/>} />
                    <Route path="/signin" element={<Signin/>}/>
                    
                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}
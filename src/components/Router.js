import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header"
import Movie from "./Movie"
import {data} from "../movieData";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <div className="app-container">
                            {data.results.map((value) => {
                                return (
                                <Movie
                                    title={value.title}
                                    poster_path={value.poster_path}
                                    vote_average={value.vote_average}
                                />
                                )
                            })
                            }
                      </div>
                    } />
                </Routes>
            </BrowserRouter>
            
        
        </>
    )
}
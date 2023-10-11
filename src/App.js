import {data} from "./movieData";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          data.results.map((value) => {
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
    </div>
  );
}

export default App;

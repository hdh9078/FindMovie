import {data} from "./movieData";
import Movie from "./components/Movie";
import "./css/App.css"
import Router from "./components/Router";

function App() {
  console.log("a", data)
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;

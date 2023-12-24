import "./css/App.css"
import Router from "./components/Router";
import { MovieProvider } from "./components/store/movie-context";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Router />
      </MovieProvider>
    </div>
  );
}

export default App;

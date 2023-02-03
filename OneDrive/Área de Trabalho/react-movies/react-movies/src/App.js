import data from "./Assets/movies";
import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card/Card";

function App() {
  const [movies, setMovies] = useState(data);
  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <div>
            <Card Filme={movie} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

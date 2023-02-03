import { useState } from "react";
import { FilmCard } from "../components/Card/Card";
import { Poster } from "../components/Poster/Poster";
import movies from "../components/movies";

export function Section() {
  const [Poster, setPoster] = useState(" ");

  return movies.map((currentMovie, index) => (
    <div key={index}>
      <FilmCard
        title={currentMovie.original_title}
        description={currentMovie.overview}
        CTA={() => setPoster(currentMovie.Poster_path)}
      />
      {Poster === currentMovie.Poster_path && (
        <Poster
          image={"https://image.tmdb.org/t/p/w500/" + currentMovie.Poster_path}
        />
      )}
      ;
    </div>
  ));
}

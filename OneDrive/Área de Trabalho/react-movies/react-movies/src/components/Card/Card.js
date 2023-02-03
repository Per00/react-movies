import Poster from "../Poster/Poster";
import { useState } from "react";

export function Card({ filme }) {
  const [showPoster, setShowPoster] = useState(false);

  function handleClick() {
    setShowPoster(!showPoster);
  }

  return (
    <div>
      <h1>{filme.Title}</h1>
      <p>{filme.Overviwe}</p>
      <button onClick={handleClick}>Show Poster</button>

      {showPoster === true && <Poster path={filme.backdrop_path} />}
    </div>
  );
}

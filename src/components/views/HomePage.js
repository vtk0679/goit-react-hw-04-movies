import { useState, useEffect } from "react";

import { getTrending } from "../../services/api";
import MoviesList from "../MoviesList/MoviesList";

import s from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    return getTrending()
      .then((movies) => movies.results)
      .then(setMovies)
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className={s.title}> Trending today </h2>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
}

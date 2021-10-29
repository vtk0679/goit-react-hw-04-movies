import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import { searchMovies } from "../../services/api";
import MoviesList from "../MoviesList/MoviesList";

import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.search !== "") {
      const prevQuery = location.search.split("=")[1];
      searchMovies(prevQuery)
        .then((film) => film.results)
        .then(setMovies);
      setQuery(prevQuery);
    }
  }, [location.search]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    history.push({ ...history.location, search: `?query=${query}` });
  };

  return (
    <>
      <form onSubmit={onSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
}

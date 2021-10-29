import { Route, useParams, useRouteMatch } from "react-router";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { getMovieDetails } from "../../services/api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

import s from "./MovieDetailsPage.module.css";

export default function MovieDetails() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { filmId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);

  useEffect(() => {
    return getMovieDetails(filmId).then(setFilmInfo);
  }, [filmId]);

  const onGoBack = () => {
    console.log(location);
    history.push(location.state?.from ?? "/");
  };

  if (!filmInfo) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <button type="button" onClick={onGoBack} className={s.button}>
        go back
      </button>
      <div className={s.container}>
        <img
          className={s.img}
          src={"https://image.tmdb.org/t/p/w300/" + filmInfo.poster_path}
          alt=""
        />
        <div className={s.textContainer}>
          <h2 className={s.title}>{filmInfo.original_title}</h2>
          <h3>Overview</h3>
          <span>{filmInfo.overview}</span>
          <h3>Genres</h3>
          <ul className={s.listGenres}>
            {filmInfo.genres?.map(
              (genre) =>
                filmInfo.genres && (
                  <li className={s.itemGenre} key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <ul className={s.list}>
        <li key={1}>
          <Link
            to={{
              pathname: `/movies/${filmInfo.id}/cast`,
              state: { from: location.state?.from },
            }}
            className={s.item}
          >
            Cast
          </Link>
        </li>
        <li key={2}>
          <Link
            to={{
              pathname: `/movies/${filmInfo.id}/reviews`,
              state: { from: location.state?.from },
            }}
            className={s.item}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Route path={`${url}/cast`}>
        <Cast filmId={filmId} />
      </Route>
      <Route path={`${url}/Reviews`}>
        <Reviews filmId={filmId} />
      </Route>
    </>
  );
}

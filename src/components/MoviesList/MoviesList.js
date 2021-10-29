import { Link, useLocation } from "react-router-dom";
import React from "react";

import s from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {movies.map(
          (movie) =>
            movie.original_title && (
              <li key={movie.id}>
                <Link
                  className={s.item}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from:
                        location.pathname === "/"
                          ? "/"
                          : "/movies" + location.search,
                    },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

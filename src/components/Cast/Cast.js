import { useState, useEffect } from "react";

import { getMovieCredits } from "../../services/api";

import s from "./Cast.module.css";

export default function Cast({ filmId }) {
  const [actors, setActors] = useState(null);
  useEffect(() => {
    return getMovieCredits(filmId).then(setActors);
  }, [filmId]);

  if (!actors) return <p>We don't have any info about actors.</p>;

  return (
    <>
      {actors.cast.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul className={s.list}>
        {actors.cast.map(
          (actor) =>
            actor.profile_path && (
              <li key={actor.id} className={s.item}>
                <h2 className={s.title}>{actor.name}</h2>
                <img
                  className={s.img}
                  src={"https://image.tmdb.org/t/p/w300/" + actor.profile_path}
                  alt=""
                />
              </li>
            )
        )}
      </ul>
    </>
  );
}

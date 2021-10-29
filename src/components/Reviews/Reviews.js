import { useState, useEffect } from "react";

import { getMovieReviews } from "../../services/api";

import s from "./Reviews.module.css";

export default function Reviews({ filmId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    return getMovieReviews(filmId).then((res) => setReviews(res.results));
  }, [filmId]);

  return (
    <>
      {reviews.length === 0 && (
        <p>Unfortunately there are no reviews for this movie.</p>
      )}

      <ul className={s.list}>
        {reviews.map(
          (actorInfo) =>
            actorInfo.author && (
              <li className={s.item} key={actorInfo.id}>
                <h2>{actorInfo.author}</h2>
                <p>{actorInfo.content}</p>
              </li>
            )
        )}
      </ul>
    </>
  );
}

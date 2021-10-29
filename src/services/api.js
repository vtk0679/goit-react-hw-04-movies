const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `ccfb7060bf1ddcafc35d65cbfee37150`;
const TRENDING_URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`;

export function getTrending() {
  const url = `${TRENDING_URL}&page=1}`;

  return fetch(url).then((response) => response.json());
}

export function searchMovies(searchQuery) {
  return fetch(`${SEARCH_URL}&query=${searchQuery}&page=1`).then((response) =>
    response.json()
  );
}

export function getMovieDetails(movie_id) {
  return fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

export function getMovieCredits(movie_id) {
  return fetch(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

export function getMovieReviews(movie_id) {
  return fetch(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

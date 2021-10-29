import { Redirect, Switch, Route } from "react-router";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() =>
  import("./components/views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MovieDetails = lazy(() => import("./components/views/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./components/views/MoviesPage"));

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loader </div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:filmId/">
            <MovieDetails />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

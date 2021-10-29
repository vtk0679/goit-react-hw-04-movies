import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      exact
      to="/"
      className={s.navLink}
      activeClassName={s.navLink__active}
    >
      HomePage
    </NavLink>
    <NavLink
      to="/movies"
      className={s.navLinkRight}
      activeClassName={s.navLink__active}
    >
      MoviesPage
    </NavLink>
  </nav>
);

export default Navigation;

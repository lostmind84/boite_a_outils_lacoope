import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName={classes.active} to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/inscriptions">
              Groupes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/discord">
              Aide Discord
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/gouvernance">
              Gouvernance
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

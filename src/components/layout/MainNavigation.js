import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  const totalFavorites = favoriteCtx.totalFavorites;

  return (
    <header className={classes.header}>
      <div className={classes.title}>React MeetUp</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New MeetUps</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

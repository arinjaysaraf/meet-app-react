import { useContext } from "react";
import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorite-context";

function MeetUpItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.images}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}>{props.title}</h3>
          <address className={classes.address}>{props.address}</address>
          <p className={classes.description}>{props.description}</p>
        </div>
        <button
          className={classes.action}
          onClick={toggleFavoriteStatusHandler}
        >
          {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
        </button>
      </Card>
    </li>
  );
}

export default MeetUpItem;

import { useContext } from "react";

import FavoritesContext from "../store/favorite-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetUpList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h2>Favorite Page</h2>
      {content}
    </section>
  );
}

export default FavoritesPage;

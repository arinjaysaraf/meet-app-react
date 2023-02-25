import { Route, Routes } from "react-router";

import AllMeetUpsPage from "./pages/AllMeetUps.js";
import NewMeetUpPage from "./pages/NewMeetUp.js";
import FavoritesPage from "./pages/Favorites.js";
import MainNavigation from "./components/layout/MainNavigation.js";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="/new-meetup" element={<NewMeetUpPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

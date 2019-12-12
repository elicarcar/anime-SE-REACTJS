import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/NavBar";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import AnimeDetails from "./pages/AnimeDetails";
import "./App.css";

function App() {
  const [animeDetails, setAnimeDetails] = useState({});
  // const uniqid = require("uniqid");
  // const h = useKey("h");

  const passAnimeData = anime => {
    setAnimeDetails(anime);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home passAnimeData={anime => passAnimeData(anime)} />
          </Route>
          <Route path="/anime/:id" exact>
            <AnimeDetails animeDetails={animeDetails} />
          </Route>
          <Route path="/todo" exact component={TodoPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

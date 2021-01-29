import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './layouts/NavBar'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'
import LikeContextProvider from './contexts/LikeContext'
import { AnimeContextProvider } from './contexts/AnimeContext'
import './App.scss'
import MyFavorites from './pages/MyFavorites'

function App() {
  const [animeDetails, setAnimeDetails] = useState({})
  // const uniqid = require("uniqid");
  // const h = useKey("h");

  const passAnimeData = (anime) => {
    setAnimeDetails(anime)
  }

  return (
    <div className="App">
      <AnimeContextProvider>
        <LikeContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home passAnimeData={(anime) => passAnimeData(anime)} />
              </Route>
              <Route path="/anime/:id" exact>
                <AnimeDetails animeDetails={animeDetails} />
              </Route>
              <Route path="/my-favorites" exact component={MyFavorites} />
            </Switch>
          </Router>
        </LikeContextProvider>
      </AnimeContextProvider>
    </div>
  )
}

export default App

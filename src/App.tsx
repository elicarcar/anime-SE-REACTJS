import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './layouts/NavBar'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'
import LikeContextProvider from './contexts/LikeContext'
import { AnimeContextProvider } from './contexts/AnimeContext'
import './App.scss'
import MyFavorites from './pages/MyFavorites'
import { MangaContextProvider } from './contexts/MangaContext'

function App() {
  const [animeDetails, setAnimeDetails] = useState<any>()
  // const uniqid = require("uniqid");
  // const h = useKey("h");

  // TODO: make all any types a consistent and specific type

  const passAnimeData = (anime:any) => {
    setAnimeDetails(anime)
  }

  return (
    <div className="App">
      <MangaContextProvider>
        <AnimeContextProvider>
          <LikeContextProvider>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact>
                  <Home anime={(anime:any) => passAnimeData(anime)} />
                </Route>
                <Route path="/anime/:id" exact>
                  <AnimeDetails {...animeDetails} />
                </Route>
                <Route path="/my-favorites" exact component={MyFavorites} />
              </Switch>
            </Router>
          </LikeContextProvider>
        </AnimeContextProvider>
      </MangaContextProvider>
    </div>
  )
}

export default App

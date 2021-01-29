import React, { useState, useCallback, useEffect, useContext } from 'react'
import { LikeContext } from '../../contexts/LikeContext'
import { AnimeContext } from '../../contexts/AnimeContext'
import AnimeInput from '../../components/AnimeInput'
import ImageFrame from '../../components/ImageFrame'
import './style.css'
import AnimeSlider from '../../components/AnimeSlider'

function useKey(key) {
  const [pressed, setPressed] = useState(false)
  const match = (e) => key.toLowerCase() == e.key.toLowerCase()
  const onDown = (e) => {
    if (match(e)) {
      setPressed(true)
    }
  }

  const onUp = (e) => {
    if (match(e)) {
      setPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [key])

  return pressed
}

export default function Home(props) {
  const [anime, setAnime] = useState('')
  const [animeInfos, setAnimeInfos] = useState([])
  const [state, dispatch] = useContext(AnimeContext)

  const { addLikedAnime } = useContext(LikeContext)
  const { likedAnimes } = useContext(LikeContext)

  const enter = useKey('enter')

  async function fetchAnimes(url, action) {
    try {
      const res = await fetch(url)
      const animes = await res.json()

      dispatch({
        type: action,
        payload: animes.top,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const queryInput = (e) => {
    const targetedAnime = e.target.value
    setAnime(targetedAnime)
  }

  const searchInput = useCallback(() => {
    fetchAnimes()
  }, [anime])

  const getAnimeData = (anime) => {
    props.passAnimeData(anime)
    console.log(anime)
  }

  useEffect(() => {
    fetchAnimes(
      'https://api.jikan.moe/v3/top/anime/1/upcoming',
      'GET_AIRING_ANIMES'
    )
  }, [])

  console.log(state.airing)

  return (
    <div className="wrapper-div">
      <AnimeInput queryInput={queryInput} searchInput={() => searchInput()} />
      {state.airing.length ? (
        <AnimeSlider animes={state.airing[0]} />
      ) : (
        <p>Loading...</p>
      )}

      {enter && searchInput()}
    </div>
  )
}

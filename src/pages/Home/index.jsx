import React, { useState, useCallback, useEffect, useContext } from 'react'
import { LikeContext } from '../../contexts/LikeContext'
import { AnimeContext } from '../../contexts/AnimeContext'
import AnimeInput from '../../components/AnimeInput'
import ImageFrame from '../../components/ImageFrame'
import './style.css'
import AnimeSlider from '../../components/AnimeSlider'
import { season, currentYear } from '../../utils'

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
  const [state, dispatch] = useContext(AnimeContext)

  const enter = useKey('enter')

  async function fetchAnimes(url, action) {
    try {
      const res = await fetch(url)
      const animes = await res.json()

      dispatch({
        type: action,
        payload: animes,
      })

      console.log(animes)
    } catch (error) {
      console.log(error)
    }
  }

  // const searchInput = useCallback(() => {
  //   fetchAnimes()
  // }, [anime])

  // const getAnimeData = (anime) => {
  //   props.passAnimeData(anime)
  //   console.log(anime)
  // }

  useEffect(() => {
    fetchAnimes(
      'https://api.jikan.moe/v3/top/anime/1/airing',
      'GET_AIRING_ANIMES'
    )
    fetchAnimes(
      'https://api.jikan.moe/v3/top/anime/1/upcoming',
      'GET_TOP_ANIMES'
    )
    fetchAnimes(
      `https://api.jikan.moe/v3/season/${currentYear}/${season}`,
      'GET_SEASONAL_ANIMES'
    )
  }, [])

  return (
    <div className="wrapper-div">
      {state.seasonal.length ? (
        <AnimeSlider title={'Winter'} animes={state.seasonal[0]} />
      ) : (
        <p>Loading...</p>
      )}

      {state.airing.length ? (
        <AnimeSlider
          title={'Animes currenlty airing'}
          animes={state.airing[0]}
        />
      ) : (
        <p>Loading...</p>
      )}
      {state.top.length ? (
        <AnimeSlider title={'Upcomings'} animes={state.top[0]} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

import React from 'react'
import './style.scss'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Title from '../Title'
export default function AnimeSlider({
  animes,
  title,
  cut = false,
  sliceAmount = 0,
}) {
  if (cut) {
    animes = animes.slice(0, sliceAmount)
  }

  return (
    <div className="slider">
      <div className="brackets-outer">
        <span className="left">
          <GrPrevious />
        </span>
      </div>

      <Title title={title} />
      <div className="slider-inner ">
        {animes.map((anime, i) => (
          <figure className="slider-item" id={anime.mal_id} key={i}>
            <img src={anime.image_url} alt={anime.title} />
            <figcaption>{anime.title}</figcaption>
          </figure>
        ))}
      </div>

      <div className="brackets-outer">
        <span className="right">
          <GrNext />
        </span>
      </div>
    </div>
  )
}

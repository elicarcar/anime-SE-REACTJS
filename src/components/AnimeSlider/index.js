import React from 'react'
import './style.scss'
import { GrNext, GrPrevious } from 'react-icons/gr'
export default function AnimeSlider({ animes }) {
  return (
    <div className="slider">
      <div className="brackets-outer">
        <span className="left">
          <GrPrevious />
        </span>
      </div>

      <div className="slider-inner">
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

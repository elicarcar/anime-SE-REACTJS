import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
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

  const sliderRef = useRef(null)

  const handleClick = () => {
    console.log(sliderRef)
  }

  return (
    <div className="slider">
      <div className="brackets-outer" onClick={() => handleClick()}>
        <span className="left">
          <GrPrevious />
        </span>
      </div>

      <Title title={title} />
      <div className="slider-outer">
        <div className="slider-inner" ref={sliderRef}>
          {animes.map((anime, i) => (
            <figure className="slider-item" id={anime.mal_id} key={i}>
              <img src={anime.image_url} alt={anime.title} />
              <figcaption>
                <Link to={`anime/${anime.mal_id}`}> {anime.title} </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="brackets-outer" onClick={() => handleClick()}>
        <span className="right">
          <GrNext />
        </span>
      </div>
    </div>
  )
}

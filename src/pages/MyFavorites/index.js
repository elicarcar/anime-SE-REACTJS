import React, { useContext } from 'react'
import { LikeContext } from '../../contexts/LikeContext'
import '../../App.scss'

const MyFavorites = () => {
  const { likedAnimes } = useContext(LikeContext)

  return (
    <div className="liked-animes">
      {likedAnimes.length === 0 ? (
        <p>You don't have any anime in your list.</p>
      ) : (
        <ol className="liked-anime-list">
          {likedAnimes.map((anime) => (
            <li>{anime.title}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default MyFavorites

import React from 'react'
import {  useLikes } from '../../contexts/LikeContext'
import '../../App.scss'

const MyFavorites = () => {
  const { likedAnimes } = useLikes()
  return (
    <div className="liked-animes">
      {likedAnimes.length === 0 ? (
        <p>You don't have any anime in your list.</p>
      ) : (
        <ol className="liked-anime-list">
          {likedAnimes.map((anime:any) => (
            <li>{anime.title}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default MyFavorites

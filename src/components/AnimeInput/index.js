import React from 'react'
import '../../App.scss'

export default function AnimeInput({ value, queryInput, searchInput }) {
  return (
    <div className="input-div">
      <input
        value={value}
        onChange={queryInput}
        placeholder="Search anime, manga and more..."
      />
      <button onClick={searchInput} style={{ cursor: 'pointer' }}>
        Search
      </button>
    </div>
  )
}

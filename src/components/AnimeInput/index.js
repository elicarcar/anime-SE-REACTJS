import React from 'react'
import '../../App.scss'

export default function AnimeInput({ value, queryInput, searchInput }) {
  return (
    <div className="input-div">
      <input
        value={value}
        onChange={queryInput}
        placeholder="Please type the anime you would like to search"
      />
      <button onClick={searchInput} style={{ cursor: 'pointer' }}>
        Search
      </button>
    </div>
  )
}

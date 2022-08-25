import React from 'react'
import '../../App.scss'


// TODO: Implement Input and Button event and remove optional prop

type Props = {
  value?: string
  handleInput?: () => void
  handleSearch?: () => void
  
}

export default function AnimeInput({ value, handleInput, handleSearch }:Props) {
  return (
    <div className="input-div">
      <input
        value={value}
        onChange={handleInput}
        placeholder="Search anime, manga and more..."
      />
      <button onClick={handleSearch} style={{ cursor: 'pointer' }}>
        Search
      </button>
    </div>
  )
}

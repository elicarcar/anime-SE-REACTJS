import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import AnimeInput from '../../components/AnimeInput'
import backArrow from '../../icons/back.png'
import '../../App.scss'

export default function Navbar() {
  let history = useHistory()
  return (
    <nav className="navBar">
      <ul className="ulist">
        <li onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
          <img
            src={backArrow}
            alt={backArrow}
            style={{ width: '25px', height: '25px', float: 'left' }}
          />
        </li>
        <li>
          <Link to="/">Anime</Link>
        </li>
        <li>
          <Link to="/manga">Manga</Link>
        </li>
      </ul>
      <AnimeInput />
    </nav>
  )
}

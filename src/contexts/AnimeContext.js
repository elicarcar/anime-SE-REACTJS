import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/index'

export const AnimeContext = createContext()

const initialState = {
  airing: [],
  top: [],
  seasonal: [],
  movies: [],
}

export const AnimeContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AnimeContext.Provider value={[state, dispatch]}>
      {props.children}
    </AnimeContext.Provider>
  )
}

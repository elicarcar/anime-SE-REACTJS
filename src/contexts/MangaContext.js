import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/index'

export const MangaContext = createContext()

const initialState = {
  airing: [],
  top: [],
}

export const MangaContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MangaContext.Provider value={[state, dispatch]}>
      {props.children}
    </MangaContext.Provider>
  )
}

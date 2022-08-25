import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { reducer } from '../reducers/index'

// TODO: Update anime context interface

interface State {
  airing: any[],
  top: any[],
  seasonal: any[],
  movies: any[],
}



interface AnimeContextInterface  {
  state: State,
  dispatch: Dispatch<any>
}

export const AnimeContext =  createContext<AnimeContextInterface | null>(null)

const initialState: State = {
  airing: [],
  top: [],
  seasonal: [],
  movies: [],
}

export const AnimeContextProvider = (props:React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AnimeContext.Provider value={{state, dispatch}}>
      {props.children}
    </AnimeContext.Provider>
  )
}

export const useAnime = () => {
  const context = useContext(AnimeContext)
  if(!context){
    throw Error('Anime Context can only be used within Anime Context Provider')
  }

  return context
}
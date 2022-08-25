import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/index'

type State = {
  airing:any [] // set it to any for now
  top: any[] //set it to any for now
}

interface MangaContextInterface {
state: State
dispatch: React.Dispatch<null>
}

export const MangaContext = createContext<MangaContextInterface | null>(null)



const initialState: State = {
  airing: [],
  top: [],
}

export const MangaContextProvider = (props: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MangaContext.Provider value={{state, dispatch}}>
      {props.children}
    </MangaContext.Provider>
  )
}

import {
  GET_AIRING_ANIMES,
  GET_TOP_ANIMES,
  GET_SEASONAL_ANIMES,
  GET_TOP_MOVIES,
} from '../actions/types'

export const reducer = (state:any, action:any) => {
  switch (action.type) {
    case GET_AIRING_ANIMES:
      const cutAir = action.payload.top.slice(0, 5)
      return { ...state, airing: [cutAir] }
    case GET_TOP_ANIMES:
      const cut = action.payload.top.slice(0, 5)
      return {
        ...state,
        top: [cut],
      }
    case GET_SEASONAL_ANIMES:
      return {
        ...state,
        seasonal: [action.payload.anime],
      }
    case GET_TOP_MOVIES:
      return {
        ...state,
        movies: [action.payload.top],
      }
  }
}

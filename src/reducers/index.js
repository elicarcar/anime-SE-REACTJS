import {
  GET_AIRING_ANIMES,
  GET_TOP_ANIMES,
  GET_SEASONAL_ANIMES,
} from '../actions/types'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_AIRING_ANIMES:
      return { ...state, airing: [action.payload.top] }
    case GET_TOP_ANIMES:
      return {
        ...state,
        top: [action.payload.top],
      }
    case GET_SEASONAL_ANIMES:
      return {
        ...state,
        seasonal: [action.payload.anime],
      }
  }
}

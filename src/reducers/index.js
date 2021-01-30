import {
  GET_AIRING_ANIMES,
  GET_TOP_ANIMES,
  GET_SEASONAL_ANIMES,
} from '../actions/types'

export const reducer = (state, action) => {
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
  }
}

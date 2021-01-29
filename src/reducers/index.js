import { GET_AIRING_ANIMES } from '../actions/types'
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_AIRING_ANIMES:
      return {
        airing: [action.payload],
      }
  }
}

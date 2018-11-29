import { FETCH_POSTS, FETCH_SHOWS, UPDATE } from "../actions/types";

const initialState = {
  movies: [],
  shows: [],
  details: {},
  numToShow: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, movies: action.payload.results };
    case FETCH_SHOWS:
      return { ...state, shows: action.payload.results };
    case UPDATE:
      return { ...state, details: action.details };
    default:
      return state;
  }
}

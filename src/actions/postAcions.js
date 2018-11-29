import { FETCH_POSTS, FETCH_SHOWS, UPDATE } from "../actions/types";

export const fetchPosts = () => dispatch => {
  console.log("fetching");

  let url =
    "https://api.themoviedb.org/3/discover/movie?api_key=127b71a13b2cc51667348704372ba1df&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=2018-10-29";
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        // update state with API data
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const fetchShows = () => dispatch => {
  console.log("fetching");

  let url =
    "https://api.themoviedb.org/3/discover/tv?api_key=127b71a13b2cc51667348704372ba1df&language=en-US&sort_by=first_air_date.desc&first_air_date.lte=2018-11-29&page=1&include_null_first_air_dates=false";
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        // update state with API data
        type: FETCH_SHOWS,
        payload: data
      })
    );
};

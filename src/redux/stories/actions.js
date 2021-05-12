import { SET_LOADING, SET_DATA, HANDLE_SEARCH, HANDLE_PAGE } from "./types";
import axios from "axios";

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(setLoading());
    return axios.get(url).then((res) => {
      console.log(res);
      dispatch(setData(res.data));
    });
  };
};
const setData = (data) => {
  // Filter if no title
  const filteredHits = data.hits.filter((story) => {
    if (story.title === null || story.title === "") {
      return false;
    }
    return true;
  });
  return {
    type: SET_DATA,
    payload: { hits: filteredHits, nbPages: data.nbPages },
  };
};
const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
export const handleSearch = (query) => {
  return {
    type: HANDLE_SEARCH,
    payload: query,
  };
};
export const handlePage = (value) => {
  return {
    type: HANDLE_PAGE,
    payload: value,
  };
};

import { SET_LOADING, SET_DATA, HANDLE_SEARCH, HANDLE_PAGE } from "./types";

const initialState = {
  query: "",
  isLoading: true,
  hits: [],
  nbPages: 0,
  page: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case HANDLE_PAGE:
      if (action.payload === "next") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "prev") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
      break;
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default reducer;

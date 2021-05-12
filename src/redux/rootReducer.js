import { combineReducers } from "redux";
import storiesReducer from "./stories/reducer";

const rootReducer = combineReducers({
  data: storiesReducer,
});

export default rootReducer;

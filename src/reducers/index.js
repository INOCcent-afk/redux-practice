import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  allMovies: movieReducer,
});

export default rootReducer;

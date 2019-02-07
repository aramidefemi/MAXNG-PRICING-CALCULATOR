import { combineReducers } from "redux";
import search from "./search";
import map from "./map";

export default combineReducers({
  search,
  map
});

import { combineReducers } from "redux";
import user from "./userReducer";
import article from "./articleReducer";

const combinedReducers = combineReducers({
  user,
  article
});

export default combinedReducers;

import { createStore } from "redux";
import combinedReducers from "./reducers/index";

const store = createStore(combinedReducers);

export default store;

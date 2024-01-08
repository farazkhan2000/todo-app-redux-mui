import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({
  todoReducer,
  // more reducers can be added here
});


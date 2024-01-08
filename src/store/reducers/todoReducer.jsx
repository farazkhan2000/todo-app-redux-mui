import { ADD_TODO } from "../types";

const todoReducer = (state=[], action) => {
  console.log("reducer >>>", action)
  switch(action.type){
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default todoReducer;
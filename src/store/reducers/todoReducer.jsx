import { ADD_TODO, DELETE_TODO } from "../types";

const todoReducer = (state = [], action) => {

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;

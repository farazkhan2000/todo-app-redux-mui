import { ADD_TODO } from "../types";

export const addTodo = (todo) => {
  console.log("action todo >>>", todo)
  return {
    type: ADD_TODO,
    payload: todo,
  }
}
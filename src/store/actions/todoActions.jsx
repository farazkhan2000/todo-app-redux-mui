import { ADD_TODO, DELETE_TODO } from "../types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export const deleteTodo = (todo) => {
  console.log('todo: ', todo);
  return {
    type: DELETE_TODO,
    payload: todo,
  }
}
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types";


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export function updateTodo(todoId) {
    return {
        type: UPDATE_TODO,
        payload: todoId
    }
}
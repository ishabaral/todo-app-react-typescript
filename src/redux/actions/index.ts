import { CLEAR_TODO, FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGGED_IN, LOGGED_OUT } from "./actionTypes"

export const login = () => {
    return{
        type: LOGGED_IN
    }
}

export const logout = () =>{
    return{
        type: LOGGED_OUT
    }
}

export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users: User[]) => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (err:string) => {
    return{
        type: FETCH_USER_FAILURE,
        payload: err
    }
}

export const fetchTodoRequest = () => {
    return{
        type: FETCH_TODO_REQUEST
    }
}

export const fetchTodoSuccess = (todos: Todo[]) => {
    return{
        type: FETCH_TODO_SUCCESS,
        payload: todos
    }
}

export const fetchTodoFailure = (err:string) => {
    return{
        type: FETCH_TODO_FAILURE,
        payload: err
    }
}

export const clearTodos = () => {
    return {
        type: CLEAR_TODO
    }
}

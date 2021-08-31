import axios from "axios"
import { Dispatch } from 'redux';
import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, LOGGED_IN, LOGGED_OUT } from "./actionTypes"

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

export const fetchTodoRequest = () => {
    return{
        type: FETCH_TODO_REQUEST
    }
}

export const fetchTodoSuccess = (todos:[]) => {
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

const registeredUser =  JSON.parse(localStorage.getItem('user')!);

export const fetchTodos = () => {
    return function (dispatch: Dispatch) {
        dispatch(fetchTodoRequest());
        registeredUser && axios.get(`http://localhost:4000/users/${registeredUser.id}/todos`)
          .then((res) => {
            const event = res.data;
            // console.log(event);
            dispatch(fetchTodoSuccess(event));
          })
          .catch((err) => {
            dispatch(fetchTodoFailure(err.message));
          });
      };
}
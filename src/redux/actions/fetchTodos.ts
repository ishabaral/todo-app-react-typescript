import axios from "axios";
import { Dispatch } from "redux";
import { fetchTodoFailure, fetchTodoRequest, fetchTodoSuccess } from ".";


export const fetchTodos = () => {
    return function (dispatch: Dispatch) {
        const registeredUser =  JSON.parse(localStorage.getItem('user')!);
        dispatch(fetchTodoRequest());
         registeredUser && axios.get(`http://localhost:4000/users/${registeredUser.id}/todos`)
          .then((res) => {
            const todos = res.data;
            dispatch(fetchTodoSuccess(todos));
          })
          .catch((err) => {
            dispatch(fetchTodoFailure(err.message));
          });
      };
}
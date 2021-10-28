import axios from "axios";
import { Dispatch } from "redux";
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from ".";

export const fetchUsers = () => {
    return function (dispatch: Dispatch) {
        dispatch(fetchUserRequest());
         axios.get(`http://localhost:4000/users`)
          .then((res) => {
            const users = res.data;
            dispatch(fetchUserSuccess(users));
          })
          .catch((err) => {
            dispatch(fetchUserFailure(err.message));
          });
      };
}
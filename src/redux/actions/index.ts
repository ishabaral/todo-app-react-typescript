import { LOGGED_IN, LOGGED_OUT } from "./actionTypes"

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
import { LOGGED_IN, LOGGED_OUT } from "../actions/actionTypes"

interface LoginAction{
    type:string,
    payload? : string
}

const isLogged = (state= false, action: LoginAction) => {
    switch(action.type){
        case LOGGED_IN:
            return true;
        case LOGGED_OUT:
            return false;
        default:
            return state
    }
}

export default isLogged
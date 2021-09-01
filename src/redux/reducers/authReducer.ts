import { LOGGED_IN, LOGGED_OUT } from "../actions/actionTypes"

interface AuthReducer{
    isLogged:boolean
}

const initialState:AuthReducer = {
    isLogged: false
}

const authReducer = (state= initialState, action: ReducerAction) => {
    switch(action.type){
        case LOGGED_IN:
            return {isLogged:true};
        case LOGGED_OUT:
            return {isLogged: false};
        default:
            return state
    }
}

export default authReducer
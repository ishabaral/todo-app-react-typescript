import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions/actionTypes"

interface UserInitialStateType{
    loading:boolean,
    users: [],
    error: string
}

const initialState: UserInitialStateType ={
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state= initialState, action: ReducerAction) =>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {...state, loading:true}
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer
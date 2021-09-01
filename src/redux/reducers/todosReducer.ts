import { CLEAR_TODO, FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "../actions/actionTypes"

interface TodoInitialStateType {
    loading: boolean,
    todos:[],
    error: string
}

const initialState: TodoInitialStateType = {
    loading: false,
    todos: [],
    error:''

}

const todosReducer = (state= initialState, action:ReducerAction) =>{
    switch(action.type){
        case FETCH_TODO_REQUEST:
            return {...state, loading:true}
        case FETCH_TODO_SUCCESS:
            return {
                loading:false,
                todos:action.payload,
                error: ''
            }
        case FETCH_TODO_FAILURE:
            return {
                loading:false,
                todos: [],
                error: action.payload
            }
        case CLEAR_TODO:
            return initialState
        default:
            return state
    }
}

export default todosReducer
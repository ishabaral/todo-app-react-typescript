import { combineReducers } from "redux";
import isLogged from "./isLogged";

const rootReducer = combineReducers({
    isLogged: isLogged
})

export default rootReducer
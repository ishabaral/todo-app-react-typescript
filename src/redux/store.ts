import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { fetchTodos } from "./actions/fetchTodos";
import authReducer from "./reducers/authReducer";
import todosReducer from "./reducers/todosReducer";
import { fetchUsers } from "./actions/fetchUser";
import userReducer from "./reducers/userReducer";

export type AppDispatch = typeof store.dispatch;

const persistConfig = {
    key: "auth",
    storage,
    whiteList: ['authReducer']
}

const rootReducer = combineReducers({
    authReducer: persistReducer(persistConfig ,authReducer), 
    todosReducer: todosReducer,
    userReducer: userReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch<any>(fetchTodos());
store.dispatch<any>(fetchUsers())

const persistor = persistStore(store)

export {store, persistor}
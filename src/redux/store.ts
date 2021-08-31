import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootRducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { fetchTodos } from "./actions";

export type AppDispatch = typeof store.dispatch;

const persistConfig = {
    key: "root",
    storage,
    whiteList: ['isLogged']
}

const pReducer = persistReducer(persistConfig ,rootReducer)

const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch<any>(fetchTodos());

const persistor = persistStore(store)

export {store, persistor}
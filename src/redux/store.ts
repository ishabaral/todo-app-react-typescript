import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootRducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ['isLogged']
}

const pReducer = persistReducer(persistConfig ,rootReducer)

const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store)

export {store, persistor}
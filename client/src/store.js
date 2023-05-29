import {combineReducers,compose,applyMiddleware, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./redux/reducers";

const reducer = combineReducers ({
    rootReducer,
    
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

export default function configureStore(){
    const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}
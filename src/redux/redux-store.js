import {applyMiddleware, combineReducers, createStore, compose, configureStore} from 'redux';
import { authReducer } from './auth/authReducer';
import { deviceListReducer } from './deviceList/deviceListReducer';
import thunkMiddleware from 'redux-thunk'
import { initilazeReducer } from './init/initReducer';


const rootStore = combineReducers({
    auth: authReducer,
    init: initilazeReducer,
    deviceListPage : deviceListReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootStore, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;
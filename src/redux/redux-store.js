import {applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { authReducer } from './auth/authReducer';
import { deviceListReducer } from './deviceList/deviceListReducer';
import { createDeviceReducer } from './createDevice/createDeviceReducer';
import {deleteDeviceReducer } from './deleteDevice/deleteDeviceReducer';
import thunkMiddleware from 'redux-thunk'
import { initilazeReducer } from './init/initReducer';


const rootStore = combineReducers({
    auth: authReducer,
    init: initilazeReducer,
    deviceListPage : deviceListReducer,
    createDevicePage : createDeviceReducer,
    deleteDevice: deleteDeviceReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootStore, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;
import authReducer from './auth/authReducer';
import deviceListReducer from './deviceList/deviceListReducer';
import createDeviceReducer  from './createDevice/createDeviceReducer';
import deleteDeviceReducer  from './deleteDevice/deleteDeviceReducer';
import initilazeReducer from './init/initReducer';
import { configureStore , combineReducers } from '@reduxjs/toolkit';



const rootReducer = combineReducers({
    auth: authReducer,
    init: initilazeReducer,
    deviceListPage: deviceListReducer,
    createDevicePage: createDeviceReducer,
    deleteDevice: deleteDeviceReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

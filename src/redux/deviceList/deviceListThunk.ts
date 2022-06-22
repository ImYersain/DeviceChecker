import { devicesAPI } from '../../api/devicesAPI';
import { tokenKey } from '../../utils/constants';
import { getByKeyFromLocalStorage } from '../../utils/localStorage';
import { AppDispatch } from '../redux-store';
import { deviceListSlice } from './deviceListReducer';






export const GetDevicesRequestThunk = () => async (dispatch: AppDispatch) => {
    dispatch(deviceListSlice.actions.getDevicesRequest())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const data = await devicesAPI.getDevices(token);
        dispatch(deviceListSlice.actions.devicesSuccess(data))   
    } catch (error) {
        dispatch(deviceListSlice.actions.devicesError(error))
    }
} 

export const BorrowDeviceThunk = (id:number | null) => async (dispatch: AppDispatch) => {
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        await devicesAPI.borrowDevice(id, token);
        dispatch(GetDevicesRequestThunk())
    } catch (error) {
        console.log(error)
    }
}

export const BringBackDeviceThunk = (id:number | null) => async (dispatch: AppDispatch) => {
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        await devicesAPI.bringBackDevice(id, token);
        dispatch(GetDevicesRequestThunk())
    } catch (error) {
        console.log(error)
    }
}
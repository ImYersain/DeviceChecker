import { devicesAPI } from '../../api/devicesAPI';
import { DeviceType } from '../../types/device';
import { tokenKey } from '../../utils/constants';
import { getByKeyFromLocalStorage } from '../../utils/localStorage';
import { GetDevicesRequestThunk } from '../deviceList/deviceListThunk';
import { AppDispatch } from '../redux-store';
import { createDeviceSlice } from './createDeviceReducer';


export const requestPostThunk = ({id, model, os, vendor, image}:DeviceType) => async (dispatch: AppDispatch) => {
    dispatch(createDeviceSlice.actions.postRequest())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const {data} = await devicesAPI.postDevice({id, model, os, vendor, image}, token)
        dispatch(createDeviceSlice.actions.postSuccess(data))
        dispatch(GetDevicesRequestThunk())
    } catch (error) {
        dispatch(createDeviceSlice.actions.postError)
    }
}
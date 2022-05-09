import { devicesAPI } from '../../api/Api';
import { tokenKey } from '../../utils/constants';
import { getByKeyFromLocalStorage } from '../../utils/localStorage';
import { GetDevicesRequestThunk } from '../deviceList/deviceListThunk';
import { postError, postRequest, postSuccess } from './createDeviceActionCreater';


export const requestPostThunk = ({id, model, os, vendor, image}) => async (dispatch) => {
    dispatch(postRequest())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const {data} = await devicesAPI.postDevice({id, model, os, vendor, image}, token)
        dispatch(postSuccess(data))
        dispatch(GetDevicesRequestThunk())
    } catch (error) {
        dispatch(postError)
    }
}
import { devicesAPI } from '../../api/Api';
import { tokenKey } from '../../utils/constants';
import { devicesSuccess, devicesError } from './deviceListActionCreater';
import { getByKeyFromLocalStorage } from '../../utils/localStorage';




export const GetDevicesRequestThunk = () => async (dispatch) => {
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const data = await devicesAPI.getDevices(token);
        dispatch(devicesSuccess(data))   
    } catch (error) {
        alert('error')
    }
} 
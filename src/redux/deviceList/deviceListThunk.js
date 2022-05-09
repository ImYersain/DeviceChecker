import { devicesAPI } from '../../api/Api';
import { tokenKey } from '../../utils/constants';
import { devicesSuccess, devicesError, getDevicesRequset, borrowDevice } from './deviceListActionCreater';
import { getByKeyFromLocalStorage } from '../../utils/localStorage';




export const GetDevicesRequestThunk = () => async (dispatch) => {
    dispatch(getDevicesRequset())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const data = await devicesAPI.getDevices(token);
        dispatch(devicesSuccess(data))   
    } catch (error) {
        dispatch(devicesError(error))
    }
} 

export const BorrowDeviceThunk = (id) => async (dispatch) => {
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        await devicesAPI.borrowDevice(id, token);
        dispatch(borrowDevice())
        dispatch(GetDevicesRequestThunk())
    } catch (error) {
        console.log(error)
    }
}
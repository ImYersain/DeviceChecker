import { devicesAPI } from '../../api/Api';
import { tokenKey } from '../../utils/constants';
import { devicesSuccess } from './deviceListActionCreater';




export const GetDevicesRequestThunk = () => async (dispatch) => {
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const {data} = await devicesAPI.getDevices(token)
        dispatch(devicesSuccess(data))    
    } catch (error) {
        dispatch(devicesError(error))
    }
}
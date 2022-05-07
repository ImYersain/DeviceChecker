import { devicesAPI } from '../../api/Api';
import { tokenKey } from '../../utils/constants';
import { getByKeyFromLocalStorage } from '../../utils/localStorage';
import { loginSuccess } from '../auth/actionCreaters';
import { postError, postRequest } from './createDeviceActionCreater';


export const requestPostThunk = ({id, model, os, vendor, image}) => async (dispatch) => {
    dispatch(postRequest())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const {data} = await devicesAPI.postDevice({token, id, model, os, vendor, image})
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(postError)
    }
}
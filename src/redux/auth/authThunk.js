import {authAPI} from '../../api/Api';
import { IdKey, tokenKey } from '../../utils/constants';
import { addDataLocalStorage } from '../../utils/localStorage';
import { loginRequest, loginSuccess, loginError } from './actionCreaters';

export const requestLoginThunk = ({login, password}) => async (dispatch) => {
    dispatch(loginRequest())
    try {
        const {data} = await authAPI.login(login, password);
        addDataLocalStorage(tokenKey, data.token);
        addDataLocalStorage(IdKey, data.id);
        dispatch(loginSuccess(data))    
    } catch (error) {
        dispatch(loginError())
    }
}
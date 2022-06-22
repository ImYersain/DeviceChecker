import { AppDispatch } from './../redux-store';
import { authAPI } from '../../api/authAPI';
import { IdKey, tokenKey } from '../../utils/constants';
import { addDataLocalStorage } from '../../utils/localStorage';
import { authSlice } from './authReducer';




interface Props {
    login: string | null,
    password: string | null
}


export const requestLoginThunk = ({login, password}: Props) => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.loginRequest())
    try {
        const {data} = await authAPI.login(login, password);
        addDataLocalStorage(tokenKey, data.token);
        addDataLocalStorage(IdKey, data.id);
        dispatch(authSlice.actions.loginSuccess(data))    
    } catch (error) {
        dispatch(authSlice.actions.loginError())
    }
}

export const requestLogoutThunk = () => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.logoutRequest());
    localStorage.clear();
}
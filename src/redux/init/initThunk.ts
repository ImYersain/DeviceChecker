import { authAPI } from "../../api/authAPI"
import { IdKey, tokenKey } from "../../utils/constants"
import { getByKeyFromLocalStorage } from "../../utils/localStorage"
import { authSlice } from "../auth/authReducer"
import { AppDispatch } from "../redux-store"
import { initilazeSlice } from "./initReducer"


export const initThunk = () => async (dispatch: AppDispatch) =>{
    const token = getByKeyFromLocalStorage(tokenKey)
    const id = getByKeyFromLocalStorage(IdKey)
    try {
        const {data} = await authAPI.userMe({token, id})
        dispatch(authSlice.actions.loginSuccess(data))    
    } catch (error) {
        dispatch(authSlice.actions.loginError())
    } finally {
        dispatch(initilazeSlice.actions.initialize())
    }
    
}
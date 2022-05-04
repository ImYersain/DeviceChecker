import { authAPI } from "../../api/Api"
import { IdKey, tokenKey } from "../../utils/constants"
import { getByKeyFromLocalStorage } from "../../utils/localStorage"
import { loginSuccess, loginError } from "../auth/actionCreaters"
import { initialaze } from "./initActionCreater"

export const initThunk = () => async (dispatch) =>{
    const token = getByKeyFromLocalStorage(tokenKey)
    const id = getByKeyFromLocalStorage(IdKey)
    try {
        const {data} = await authAPI.userMe({token, id})
        dispatch(loginSuccess(data))    
    } catch (error) {
        dispatch(loginError())
    } finally {
        dispatch(initialaze())
    }
    
}
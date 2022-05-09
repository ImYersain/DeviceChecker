import { devicesAPI } from "../../api/Api"
import { tokenKey } from "../../utils/constants"
import { getByKeyFromLocalStorage } from "../../utils/localStorage"
import { GetDevicesRequestThunk } from "../deviceList/deviceListThunk"
import { deleteSuccess, deleteRequest, deleteError } from "./deleteDeviceActionCreater"

export const deleteDeviceThunk = (id) => async (dispatch) => {
    dispatch(deleteRequest())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        const res = await devicesAPI.deleteDevice({token, id})
        dispatch(GetDevicesRequestThunk())

    } catch (error) {
        dispatch(deleteError(error))
    }   
}
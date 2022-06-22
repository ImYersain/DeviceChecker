import { devicesAPI } from "../../api/devicesAPI"
import { tokenKey } from "../../utils/constants"
import { getByKeyFromLocalStorage } from "../../utils/localStorage"
import { GetDevicesRequestThunk } from "../deviceList/deviceListThunk"
import { AppDispatch } from "../redux-store"
import { deleteDeviceSlice } from "./deleteDeviceReducer"



export const deleteDeviceThunk = (id: number | null) => async (dispatch: AppDispatch) => {
    dispatch(deleteDeviceSlice.actions.deleteDeviceRequest())
    const token = getByKeyFromLocalStorage(tokenKey)
    try {
        await devicesAPI.deleteDevice({token, id})
        dispatch(GetDevicesRequestThunk())

    } catch (error) {
        dispatch(deleteDeviceSlice.actions.deleteDeviceError(error))
    }   
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType } from "../../types/auth";


interface InitialStateType {
    deleteDeviceRequestStatus: AuthType
}

const initialState: InitialStateType = {
    deleteDeviceRequestStatus: {
        pending: false,
        success: false,
        error: false
    }
}


export const deleteDeviceSlice = createSlice({
    name: 'deleteDevice',
    initialState,
    reducers: {
        deleteDeviceRequest(state) {
            state.deleteDeviceRequestStatus.pending = true
        },
        deleteDeviceSuccess(state){
            state.deleteDeviceRequestStatus.pending = false
            state.deleteDeviceRequestStatus.success = true
        },
        deleteDeviceError(state, payload: PayloadAction<any>){
            state.deleteDeviceRequestStatus.pending = false
            state.deleteDeviceRequestStatus.success = false
            state.deleteDeviceRequestStatus.error = true
        }
    }
})


export default deleteDeviceSlice.reducer
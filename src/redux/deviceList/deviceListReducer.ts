import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeviceType } from './../../types/device';



interface GetDevicesRequestStatusType {
    pending: boolean,
    success: boolean,
    error: boolean
}

interface InitialStateType {
    getDevicesRequestStatus: GetDevicesRequestStatusType,
    devices: Array<DeviceType>,
    sortOs: string,
    sortVendor: string,
    areAllowed: boolean

}

const initialState: InitialStateType = {
    getDevicesRequestStatus: {
        pending: false,
        success: false,
        error: false
    },
    devices : [],
    sortOs: 'all',
    sortVendor: 'all',
    areAllowed: false,
}


interface SortDeviceType{
    vendor: string,
    os: string
}


export const deviceListSlice = createSlice({
    name: 'deviceList',
    initialState,
    reducers: {
        getDevicesRequest(state){
            state.getDevicesRequestStatus.pending = true            
        },
        devicesSuccess(state, action: PayloadAction<Array<DeviceType>>){
            state.getDevicesRequestStatus.pending = false
            state.getDevicesRequestStatus.success = true
            state.devices = action.payload
        },
        devicesError(state, action: PayloadAction<any>){
            state.getDevicesRequestStatus.pending = false
            state.getDevicesRequestStatus.success = false
            state.getDevicesRequestStatus.error = true
            state.devices = []
        },
        showAllowed(state, action: PayloadAction<boolean>){
            state.areAllowed = action.payload
        },
        sortDevices(state, action: PayloadAction<SortDeviceType>){
            state.sortVendor = action.payload.vendor
            state.sortOs = action.payload.os
        }
    }
})



export default deviceListSlice.reducer
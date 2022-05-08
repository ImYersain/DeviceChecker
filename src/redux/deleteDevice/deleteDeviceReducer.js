import { DELETE_DEVICE_ERROR, DELETE_DEVICE_REQUEST, DELETE_DEVICE_SUCCESS } from "./deleteDeviceActionCreater";


const initialState = {
    deleteDeviceRequestStatus: {
        pending: false,
        success: false,
        error: false
    }
}

export const deleteDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_DEVICE_REQUEST: {
            return {
                ...state,
                deleteDeviceRequestStatus: {
                    ...state.deleteDeviceRequestStatus,
                    pending: true
                }
            }
        }
        case DELETE_DEVICE_SUCCESS: {
            return {
                ...state,
                deleteDeviceRequestStatus: {
                    ...state.deleteDeviceRequestStatus,
                    pending: false,
                    success: true
                }
            }
        }
        case DELETE_DEVICE_ERROR: {
            return {
                ...state,
                deleteDeviceRequestStatus: {
                    ...state.deleteDeviceRequestStatus,
                    pending: false,
                    success: false,
                    error: true
                }
            }
        }   
        default: return state;
    }
}
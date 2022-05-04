import { GET_DEVICES_REQUEST, DEVICES_SUCCESS, DEVICES_ERROR } from "./deviceListActionCreater"



const initialState = {
    getDevicesRequestStatus: {
        pending: false,
        success: false,
        error: false
    },
    devices : []
}

export const deviceListReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_DEVICES_REQUEST: {
            return {
                ...state,
                getDevicesRequestStatus: {
                    ...state.getDevicesRequestStatus,
                    pending: true
                }
            }
        }
        case DEVICES_SUCCESS: {
            return {
                ...state,
                getDevicesRequestStatus: {
                    ...state.getDevicesRequestStatus,
                    pending: false,
                    success: true
                },
                devices : [...action.payload]
            }
        }
        case DEVICES_ERROR: {
            return {
                ...state,
                getDevicesRequestStatus: {
                    ...state.getDevicesRequestStatus,
                    pending: false,
                    success: false,
                    error: true
                },
                devices : null
            }
        } default: return state
    }
}

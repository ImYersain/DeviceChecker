import { GET_DEVICES_REQUEST, DEVICES_SUCCESS, DEVICES_ERROR, SHOW_ALLOWED, SORT_DEVICES } from "./deviceListActionCreater"



const initialState = {
    getDevicesRequestStatus: {
        pending: false,
        success: false,
        error: false
    },
    devices : [],
    sortOs: 'all',
    sortVendor: 'all',
    areAllowed: false,
    isBorrow: false
}

export const deviceListReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_DEVICES_REQUEST: {
            return {
                ...state,
                getDevicesRequestStatus: {
                    ...state.getDevicesRequestStatus,
                    pending: true,
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
                devices : [...action.payload],
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
        }
        case SHOW_ALLOWED: {
            return {
                ...state,
                areAllowed: action.payload
            }
        }
        case SORT_DEVICES: {
            return {
                ...state,
                sortVendor: action.payload.vendor,
                sortOs: action.payload.os
            }
        }
        default: return state
    }
}

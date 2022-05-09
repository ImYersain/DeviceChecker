import { DEVICES_SUCCESS, GET_DEVICES_REQUEST } from "../deviceList/deviceListActionCreater";
import { POST_ERROR, POST_REQUEST, POST_SUCCESS } from "./createDeviceActionCreater";


const initialState = {
    postDeviceRequestStatus: {
        pending: false,
        success: false,
        error: false
    },
    device: {
        'id': null,
        'os': null,
        'vendor': null,
        'model': null,
        'image': null,
    },
    wasCreated: false
}

export const createDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUEST: {
            return {
                ...state,
                postDeviceRequestStatus:{
                    ...state.postDeviceRequestStatus,
                    pending: true
                }
            }
        }
        case POST_SUCCESS: {
            return {
                ...state,
                postDeviceRequestStatus:{
                    ...state.postDeviceRequestStatus,
                    pending: false,
                    success: true
                },
                device: action.payload,
                wasCreated: true
            }
        }
        case POST_ERROR: {
            return {
                ...state,
                postDeviceRequestStatus:{
                    pending: false,
                    success: false,
                    error: true
                },
                device: null
            }
        }
        case DEVICES_SUCCESS: {
            return {
                ...state,
                wasCreated: false
            }
        }
        default : return state
    }
}
export const GET_DEVICES_REQUEST = 'GET_DEVICES_REQUEST';
export const DEVICES_SUCCESS = 'DEVICES_SUCCESS';
export const DEVICES_ERROR = 'DEVICES_ERROR';


export const getDevicesRequset = () => {
    return {
        type: GET_DEVICES_REQUEST
    }
} 
export const devicesSuccess = (payload) => {
    return {
        type: DEVICES_SUCCESS,
        payload
    }
} 
export const devicesError = () => {
    return {
        type: DEVICES_ERROR
    }
} 
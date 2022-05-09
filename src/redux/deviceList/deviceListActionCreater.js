export const GET_DEVICES_REQUEST = 'GET_DEVICES_REQUEST';
export const DEVICES_SUCCESS = 'DEVICES_SUCCESS';
export const DEVICES_ERROR = 'DEVICES_ERROR';
export const SHOW_ALLOWED = 'SHOW_ALLOWED';
export const SORT_DEVICES = 'SORT_DEVICES';
export const BORROW_DEVICE = 'BORROW_DEVICE';


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
export const showAllowed = (payload) => {
    return {
        type: SHOW_ALLOWED,
        payload
    }
}
export const sortDevices = (payload) => {
    return {
        type: SORT_DEVICES,
        payload
    }
}
export const borrowDevice = (payload) => {
    return {
        type: BORROW_DEVICE,
        payload
    }
}
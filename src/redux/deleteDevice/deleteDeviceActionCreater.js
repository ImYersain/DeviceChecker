export const DELETE_DEVICE_REQUEST = 'DELETE_DEVICE_REQUEST';
export const DELETE_DEVICE_SUCCESS = 'DELETE_DEVICE_SUCCESS';
export const DELETE_DEVICE_ERROR = 'DELETE_DEVICE_ERROR';



export const deleteRequest = () => {
    return {
        type: DELETE_DEVICE_REQUEST
    }
}
export const deleteSuccess = () => {
    return {
        type: DELETE_DEVICE_SUCCESS
    }
}
export const deleteError = () => {
    return {
        type: DELETE_DEVICE_ERROR
    }
}
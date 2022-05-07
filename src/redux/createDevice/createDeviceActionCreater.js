export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';


export const postRequest = () => {
    return {
        type: POST_REQUEST
    }
}
export const postSuccess = (payload) => {
    return {
        type: POST_SUCCESS,
        payload
    }
}
export const postError = () => {
    return {
        type: POST_ERROR
    }
}
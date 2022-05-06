export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = () => {
   return {
       type: LOGIN_REQUEST
   }
}
// export const logoutRequest = () => {
//     return {
//         type: LOGOUT_REQUEST
//     }
//  }

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR
    }
}
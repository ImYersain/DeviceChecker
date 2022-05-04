import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from './actionCreaters';


const initialState = {
    authStatus: {
        pending: false,
        success: false,
        error: false
    },
    isAuth: false,
    user: {
        id: null,
        type: null,
        login: null,
        name: null,
        token: null
    }
}

export const authReducer = (state = initialState, action) => {

 switch(action.type){
    case LOGIN_REQUEST: {
        return {
            ...state,
            authStatus: {
                ...state.authStatus,
                pending: true
            }
        }
    }
    case LOGIN_SUCCESS: {
        return {
            ...state,
            isAuth: true,
            authStatus: {
                ...state.authStatus,
                pending: false,
                success: true
            },
            user: action.payload
        }
    }
    case LOGIN_ERROR: {
        return {
            ...state,
            authStatus: {
                pending: false,
                success: false,
                error: true
            },
            user: null
        }
    } default : return state

}    

}

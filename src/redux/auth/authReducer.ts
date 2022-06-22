import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from '../../types/auth';
import { UserType } from './../../types/user';




interface InitialStateType {
    authStatus: AuthType,
    isAuth: boolean,
    user: UserType | null
}

const initialState: InitialStateType = {
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



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state){
            state.authStatus.pending = true
        },
        logoutRequest(state){
            state.authStatus.pending = true
            state.isAuth = false
            state.user = {
                id: null,
                type: null,
                login: null,
                name: null,
                token: null
            }
        },
        loginSuccess(state, action: PayloadAction<UserType>){
            state.authStatus.pending = false
            state.authStatus.success = true
            state.isAuth = true
            state.user = action.payload
        },
        loginError(state){
            state.authStatus.pending = true
            state.authStatus.success = false
            state.authStatus.error = true
            state.user = null
        }
    }
})


export default authSlice.reducer
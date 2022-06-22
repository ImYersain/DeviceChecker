import { RootState } from './../redux-store';


export const getIsAuth = (state: RootState) => {
    return state.auth.isAuth
} 
export const getUser = (state: RootState) => {
    return state.auth.user
} 
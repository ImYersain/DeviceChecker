import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from './AppHeader';
import { getIsAuth, getUser } from '../../redux/auth/authSelector';
import { requestLogoutThunk } from '../../redux/auth/authThunk';

export const AppHeaderContainer = () => {
    const isAuth = useSelector(getIsAuth);
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(requestLogoutThunk())
    }



    return <>
            <AppHeader isAuth={isAuth} user={user} onLogout={onLogout} />
        </>
}
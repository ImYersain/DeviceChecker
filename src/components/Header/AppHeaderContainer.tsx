import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from './AppHeader';
import { getIsAuth, getUser } from '../../redux/auth/authSelector';
import { requestLogoutThunk } from '../../redux/auth/authThunk';
import { useNavigate } from 'react-router';
import { AppDispatch } from '../../redux/redux-store';



export const AppHeaderContainer = () => {

    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useSelector(getIsAuth);
    const user = useSelector(getUser);
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(requestLogoutThunk())
    }
    const onAddDevice = () => {
        navigate('/create')
    }



    return <AppHeader isAuth={isAuth} user={user} onLogout={onLogout} onAddDevice={onAddDevice} />
}
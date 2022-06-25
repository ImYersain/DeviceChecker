import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import {requestLoginThunk} from '../../redux/auth/authThunk';
import { AppDispatch } from '../../redux/redux-store';
import Login from './Login';



const LoginContainer = () => {

    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useSelector(getIsAuth);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);


    const onLoginRequest = (e: any) => {
        e.preventDefault();
        dispatch(requestLoginThunk({login,password}))
    }

    const onLoginChange = (e: any) => {
        const value = e.target.value;
        setLogin(value)
    }
    const onPasswordChange = (e: any) => {
        const value = e.target.value;
        setPassword(value)
    }



    return <>
        <Login isAuth={isAuth} login={login} password={password} onLoginChange={onLoginChange}
        onPasswordChange={onPasswordChange} onLoginRequest={onLoginRequest} />
    </>
}

export default LoginContainer; 
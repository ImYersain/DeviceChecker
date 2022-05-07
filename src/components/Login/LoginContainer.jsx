import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import {requestLoginThunk} from '../../redux/auth/authThunk';
import Login from './Login';


const LoginContainer = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);


    const onLoginRequest = (e) => {
        e.preventDefault();
        dispatch(requestLoginThunk({login,password}))
    }

    const onLoginChange = (e) => {
        const value = e.target.value;
        setLogin(value)
    }
    const onPasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)
    }



    return <>
        <Login isAuth={isAuth} login={login} password={password} onLoginChange={onLoginChange}
        onPasswordChange={onPasswordChange} onLoginRequest={onLoginRequest} />
    </>
}

export default LoginContainer; 
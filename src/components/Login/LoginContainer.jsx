import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {requestLoginThunk} from '../../redux/auth/authThunk';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

import styles from './Login.module.scss';
import Login from './Login';

const LoginContainer = ({isAuth}) => {
    const dispatch = useDispatch();

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

    const ariaLabel = { 'aria-label': 'description' };

    return ( <></>
        // <><Login props={onLoginChange, login, onPasswordChange, password, onLoginRequest} /></>
    )
}

export default LoginContainer; 
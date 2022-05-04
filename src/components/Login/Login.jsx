import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {requestLoginThunk} from '../../redux/auth/authThunk';

import styles from './Login.module.scss'

const Login = () => {
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

    return (
        <div className={styles.LoginFormWrapper}>
            <form>
            <input type='email' onChange={onLoginChange} value={login}/>
            <input type='password' onChange={onPasswordChange} value={password}/>
            <button onClick={onLoginRequest}> LOGIN </button>
            </form>
        </div>
    )
}

export default Login; 
import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {requestLoginThunk} from '../../redux/auth/authThunk';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

import styles from './Login.module.scss';

const Login = ({isAuth}) => {
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

    return (
        <>
        {isAuth? <Navigate to='/devices'/>: <div className={styles.LoginFormWrapper}>
            {/* <form>
            <input type='email' onChange={onLoginChange} value={login}/>
            <input type='password' onChange={onPasswordChange} value={password}/>
            <button onClick={onLoginRequest}> LOGIN </button>
            </form> */}

            <Box component="form" sx={{'& > :not(style)': { m: 1 },}} noValidate autoComplete="off" >
                <h2 style={{textAlign: 'center'}}>Login</h2>
                <Input type='email' onChange={onLoginChange} defaultValue={login} placeholder="Login" inputProps={ariaLabel} />
                <Input type='password' onChange={onPasswordChange} defaultValue={password} placeholder="Password" inputProps={ariaLabel} />
                <Button size="small" onClick={onLoginRequest} style={{backgroundColor: 'orange', color:'black', float:'right'}}
                variant="contained" endIcon={<SendIcon />}>Send</Button>
            </Box>
            </div>
        }
        </>
    )
}

export default Login; 
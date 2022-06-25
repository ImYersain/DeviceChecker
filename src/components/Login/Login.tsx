import React, { FC } from 'react';
import {Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

import styles from './Login.module.scss';

interface PropsType {
    isAuth: boolean,
    onLoginRequest: (arg:any) => void,
    onLoginChange: (arg:any) => void,
    onPasswordChange: (arg:any) => void,
    login: string | null,
    password: string | null
}

const Login:FC<PropsType> = ({isAuth,onLoginRequest,onLoginChange,onPasswordChange, login, password}) => {

    const ariaLabel = { 'aria-label': 'description' };

    return (
        <>
        {isAuth? <Navigate to='/devices'/>: <div className={styles.LoginFormWrapper}>
           
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
import React from 'react';
import { NavLink } from 'react-router-dom';
import loginAvatar from '../../assets/images/login-avatar.png';
import authorizedAvatar from '../../assets/images/authorized-avatar.png';
import Button from '@mui/material/Button';

import styles from './AppHeader.module.scss';


export const AppHeader = ({ isAuth, user }) => {

    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.logoBlock}>
                    <img src="https://www.etnetera.cz/-a289--png-WXP_F2wn/etnetera-barevne" alt='logo'></img>
                    <h3>deviceChecker</h3>
                </div>
                <div className={styles.loginBlock}>
                    {isAuth ? <>
                        <img style={{ 'width': '40px', 'height': '40px', 'marginRight': '10px' }} src={authorizedAvatar} alt='authorized-avatar'></img>
                        {/* <NavLink to={'/login'} style={{textDecoration: 'none', color: 'black', margin: '10px'}}>
                            logout</NavLink> */}
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <div>{user.login}</div>
                            <Button size='small' variant="text" style={{ color: 'black', backgroundColor: 'white', width: '100px' }}>Logout</Button>
                        </div>
                    </> : <>
                        <img style={{ 'width': '40px', 'height': '40px' }} src={loginAvatar} alt='login-avatar'></img>
                        <NavLink to={'/login'} style={{ textDecoration: 'none', color: 'black', margin: '10px' }}>
                            login</NavLink>
                    </>}
                </div>
            </div>
        </>
    )
}
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import loginAvatar from '../../assets/images/login-avatar.png';
import authorizedAvatar from '../../assets/images/authorized-avatar.png';
import Button from '@mui/material/Button';

import styles from './AppHeader.module.scss';
import { UserType } from '../../types/user';



interface PropsType {
    isAuth: boolean,
    user: UserType | null,
    onLogout: (arg:any) => void,
    onAddDevice: (arg:any) => void
}


export const AppHeader:FC<PropsType> = ({ isAuth, user, onLogout, onAddDevice }) => {
    
    const buttonCreater = (value: string, handleClick: (arg:any) => void, marginRightValue?: any) => {
        return <Button onClick={handleClick} size='small' variant="text" 
        style={{ color: 'black', backgroundColor: 'white', width: '100px', marginRight: marginRightValue}}>{value}</Button>
    }    

    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.logoBlock}>
                    <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/52/2019/08/etnetera-barevne.png" alt='logo' />                 
                </div>
                <div className={styles.loginBlock}>
                    {isAuth ? <>
                        <img style={{ 'width': '40px', 'height': '40px', 'marginRight': '10px' }} src={authorizedAvatar} alt='authorized-avatar'></img>
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <div>{user?.login}</div>
                            <div style={{'display': 'flex', 'marginTop': '5px'}}>
                                {buttonCreater('logout', onLogout, '10px')}
                                {user?.type === 'admin'? buttonCreater(`add device`, onAddDevice): null}
                            </div>
                            
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
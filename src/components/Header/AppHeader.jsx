import React from 'react';

import styles from './AppHeader.module.scss';


export const AppHeader = () => {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.logoBlock}>
                    <img src="https://www.etnetera.cz/-a289--png-WXP_F2wn/etnetera-barevne" alt='logo'></img>
                    <h2>deviceChecker</h2>
                </div>
                <div className={styles.loginBlock}>
                    <button>login</button>
                </div>
            </div>
        </>
    )
}
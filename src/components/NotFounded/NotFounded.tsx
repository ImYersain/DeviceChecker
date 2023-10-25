import React, { FC } from 'react';
import styles from './NotFounded.module.scss';

export const NotFounded: FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br />
                Not found
            </h1>
            <p className={styles.description}>
                No devices have been found
            </p>
        </div>
    )
}

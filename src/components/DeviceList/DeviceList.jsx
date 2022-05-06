import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { SearchPanel } from './SearchPanel';
import { Device } from './Device';
import { GetDevicesRequestThunk } from '../../redux/deviceList/deviceListThunk';

import styles from './DeviceList.module.scss';






const DeviceList = () => {
    // useEffect(() => {
    //     const token = getByKeyFromLocalStorage(tokenKey);
    //     console.log(devicesAPI.getDevices(token))
    //     GetDevicesRequestThunk()
    // }, [])

    return (
        <>
            {/* <div className={styles.SearchPanel}>
                <input type="checkbox" ></input>
            </div> */}
            <SearchPanel />
            <div className={styles.DeviceListWrapper}>
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
            </ div>
        </>
    )
}

export default compose(withAuthRedirect)(DeviceList);
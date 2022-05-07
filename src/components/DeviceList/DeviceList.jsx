import React from 'react';
import { SearchPanel } from './SearchPanel';
import { Device } from './Device';

import styles from './DeviceList.module.scss';




const DeviceList = ({devices}) => {
    
    return (
        <>
            <SearchPanel />
            <div className={styles.DeviceListWrapper}>
                {devices.map(device => <Device key={device.id} device={device} /> )}
            </ div>
        </>
    )
}

export default DeviceList;
import React, { useState } from 'react';
import { SearchPanel } from './SearchPanel';
import { Device } from './Device';

import styles from './DeviceList.module.scss';




const DeviceList = ({devices, user, onDeleteDevice, onBorrow, onBringBackDevice}) => {
    const [searchValue, setSearchValue] = useState('');

    const searchedDevices = devices.filter(device => {
        return device.model.toLowerCase().includes(searchValue.toLocaleLowerCase()) 
    })

    return (
        <>
            <SearchPanel setSearchValue={setSearchValue} />
            <div className={styles.DeviceListWrapper}>
                {searchedDevices.map(device => <Device key={device.id} device={device} user={user} 
                onDeleteDevice={onDeleteDevice} onBorrow={onBorrow} onBringBackDevice={onBringBackDevice}/> )}
            </ div>
        </>
    )
}

export default DeviceList;
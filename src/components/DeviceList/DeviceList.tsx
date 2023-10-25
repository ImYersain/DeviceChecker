import React, { FC, useState } from 'react';
import { SearchPanel } from './SearchPanel';
import { Device } from './Device';

import styles from './DeviceList.module.scss';
import { DeviceType } from '../../types/device';
import { UserType } from '../../types/user';
import { NotFounded } from '../NotFounded/NotFounded';


interface PropsType {
    devices: Array<DeviceType>,
    user: UserType | null,
    onDeleteDevice: (arg: number | null) => void,
    onBorrow: (arg: number | null) => void,
    onBringBackDevice: (arg: number | null) => void
}

const DeviceList:FC<PropsType> = ({devices, user, onDeleteDevice, onBorrow, onBringBackDevice}) => {
    const [searchValue, setSearchValue] = useState('');

    const searchedDevices = devices.filter(device => {
        return device.model?.toLowerCase().includes(searchValue?.toLocaleLowerCase()) 
    })

    return (
        <>
            <SearchPanel setSearchValue={setSearchValue} />
            {searchedDevices.length ? ( <div className={styles.DeviceListWrapper}>
                {searchedDevices.map(device => <Device key={device.id} device={device} user={user} 
                onDeleteDevice={onDeleteDevice} onBorrow={onBorrow} onBringBackDevice={onBringBackDevice}/> )}
            </ div> ) : <NotFounded />}
        </>
    )
}

export default DeviceList;
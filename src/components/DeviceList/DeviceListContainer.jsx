import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { BorrowDeviceThunk, BringBackDeviceThunk, GetDevicesRequestThunk } from '../../redux/deviceList/deviceListThunk';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { deleteDeviceThunk } from '../../redux/deleteDevice/deleteDeviceThunk';
import { getDevices, hasToBeSorted, selectSortedDevices } from '../../redux/deviceList/deviceListSelector';
import { getUser } from '../../redux/auth/authSelector';
import DeviceList from './DeviceList';

const DeviceListContainer = () => {
    const dispatch = useDispatch();
    const devices = useSelector(getDevices);
    const user = useSelector(getUser);
    const sortedDevices = useSelector(selectSortedDevices);
    const shouldSort = useSelector(hasToBeSorted);

    useEffect(() => {
        dispatch(GetDevicesRequestThunk())
    }, [dispatch])

    const onDeleteDevice = (id) => {
        dispatch(deleteDeviceThunk(id))
    }
    const onBorrow = (id) => {
        dispatch(BorrowDeviceThunk(id))
    }
    const onBringBackDevice = (id) => {
        dispatch(BringBackDeviceThunk(id))
    }


    return <>
        <DeviceList devices={shouldSort ? sortedDevices : devices} user={user} 
        onDeleteDevice={onDeleteDevice} onBorrow={onBorrow} onBringBackDevice={onBringBackDevice} />        
    </>
}

export default compose(withAuthRedirect)(DeviceListContainer);
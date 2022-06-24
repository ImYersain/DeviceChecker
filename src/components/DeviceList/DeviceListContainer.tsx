import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { BorrowDeviceThunk, BringBackDeviceThunk, GetDevicesRequestThunk } from '../../redux/deviceList/deviceListThunk';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { deleteDeviceThunk } from '../../redux/deleteDevice/deleteDeviceThunk';
import { getDevices, willBeSorted, selectSortedDevices } from '../../redux/deviceList/deviceListSelector';
import { getUser } from '../../redux/auth/authSelector';
import DeviceList from './DeviceList';
import { AppDispatch } from '../../redux/redux-store';


const DeviceListContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const devices = useSelector(getDevices);
    const user = useSelector(getUser);
    const sortedDevices = useSelector(selectSortedDevices);
    const shouldSort = useSelector(willBeSorted);

    useEffect(() => {
        dispatch(GetDevicesRequestThunk())
    }, [dispatch])

    const onDeleteDevice = (id: number | null) => {
        dispatch(deleteDeviceThunk(id))
    }
    const onBorrow = (id: number | null) => {
        dispatch(BorrowDeviceThunk(id))
    }
    const onBringBackDevice = (id: number | null) => {
        dispatch(BringBackDeviceThunk(id))
    }


    return <>
        <DeviceList devices={shouldSort ? sortedDevices : devices} user={user} 
        onDeleteDevice={onDeleteDevice} onBorrow={onBorrow} onBringBackDevice={onBringBackDevice} />        
    </>
}

export default compose(withAuthRedirect)(DeviceListContainer);
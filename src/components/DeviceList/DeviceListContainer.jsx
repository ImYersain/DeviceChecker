import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { BorrowDeviceThunk, GetDevicesRequestThunk } from '../../redux/deviceList/deviceListThunk';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import DeviceList from './DeviceList';
import { getDevices, hasToBeSorted, selectSortedDevices } from '../../redux/deviceList/deviceListSelector';
import { getUser } from '../../redux/auth/authSelector';
import { deleteDeviceThunk } from '../../redux/deleteDevice/deleteDeviceThunk';

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


    return <>
        <DeviceList devices={shouldSort ? sortedDevices : devices} user={user} onDeleteDevice={onDeleteDevice} onBorrow={onBorrow} />        
    </>
}

export default compose(withAuthRedirect)(DeviceListContainer);
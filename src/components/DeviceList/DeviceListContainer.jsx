import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { GetDevicesRequestThunk } from '../../redux/deviceList/deviceListThunk';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import DeviceList from './DeviceList';
import { getDevices } from '../../redux/deviceList/deviceListSelector';
import { getUser } from '../../redux/auth/authSelector';
import { deleteDeviceThunk } from '../../redux/deleteDevice/deleteDeviceThunk';

const DeviceListContainer = () => {
    const dispatch = useDispatch();
    const devices = useSelector(getDevices);
    const user = useSelector(getUser);

    useEffect(() => {
        dispatch(GetDevicesRequestThunk())
    }, [dispatch])

    const onDeleteDevice = (id) => {
        dispatch(deleteDeviceThunk(id))
    }


    return <>
        <DeviceList devices={devices} user={user} onDeleteDevice={onDeleteDevice} />        
    </>
}

export default compose(withAuthRedirect)(DeviceListContainer);
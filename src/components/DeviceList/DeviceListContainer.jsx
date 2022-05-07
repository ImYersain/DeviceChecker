import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { GetDevicesRequestThunk } from '../../redux/deviceList/deviceListThunk';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import DeviceList from './DeviceList';
import { getDevices } from '../../redux/deviceList/deviceListSelector';


const DeviceListContainer = () => {
    const dispatch = useDispatch();
    const devices = useSelector(getDevices);

    useEffect(() => {
        dispatch(GetDevicesRequestThunk())
    }, [dispatch])

    
    return <>
        <DeviceList devices={devices} />        
    </>
}

export default compose(withAuthRedirect)(DeviceListContainer);
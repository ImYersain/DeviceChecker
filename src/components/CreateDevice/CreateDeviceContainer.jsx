import React, {useState} from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { CreateDevice } from './CreateDevice';
import { useDispatch } from 'react-redux';
import { requestPostThunk } from '../../redux/createDevice/createDeviceThunk';

const CreateDeviceContainer = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const [model, setModel] = useState(null);
    const [os, setOs] = useState(null);
    const [manufacturer, setManufacturer] = useState(null);
    const [image, setImage] = useState(null);

    const onIdChange = (e) => {
        const value = e.target.value;
        setId(value)
    }
    const onModelChange = (e) => {
        const value = e.target.value;
        setModel(value)
    }
    const onOsChange = (e) => {
        const value = e.target.value;
        setOs(value)
    }
    const onManufacturerChange = (e) => {
        const value = e.target.value;
        setManufacturer(value)
    }
    const onImageChange = (e) => {
        const value = e.target.value;
        setImage(value)
    }


    const onPostRequest = (e) => {
        e.preventDefault();
        dispatch(requestPostThunk({id, model, os, manufacturer, image}))
    }


    return <>
        <CreateDevice onIdChange={onIdChange} onModelChange={onModelChange} onOsChange={onOsChange} 
        onManufacturerChange={onManufacturerChange} onImageChange={onImageChange} onPostRequest={onPostRequest}
        id={id} model={model} os={os} manufacturer={manufacturer} image={image}
        />
    </>
}


export default compose(withAuthRedirect)(CreateDeviceContainer) 
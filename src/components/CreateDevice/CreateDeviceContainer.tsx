import React, {useEffect, useState} from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { CreateDevice } from './CreateDevice';
import { useDispatch, useSelector } from 'react-redux';
import { requestPostThunk } from '../../redux/createDevice/createDeviceThunk';
import { useNavigate } from 'react-router';
import { selectWasCreate } from '../../redux/createDevice/createDeviceSelector';
import { AppDispatch } from '../../redux/redux-store';

const CreateDeviceContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [id, setId] = useState(null);
    const [model, setModel] = useState(null);
    const [vendor, setVendor] = useState('');
    const [os, setOs] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const wasCreated = useSelector(selectWasCreate);

    useEffect(() => {
        if(wasCreated){
            navigate('/')
        }
    }, [wasCreated, navigate]);


    const onIdChange = (e: any) => {
        const value = e.target.value;
        setId(value)
    }
    const onModelChange = (e: any) => {
        const value = e.target.value;
        setModel(value)
    }
    
    const onImageChange = (e: any) => {
        const value = e.target.value;
        setImage(value)
    }
    const onHome = () => {
        navigate('/')
    }
   
    const handleChangeOs = (event: any) => {
        setOs(event.target.value);
    };
   
    const handleChangeVendor = (event: any) => {
        setVendor(event.target.value);
    };

    const onPostRequest = (e: any) => {
        dispatch(requestPostThunk({id, model, os, vendor, image}))
    }


    return <>
        <CreateDevice onIdChange={onIdChange} onModelChange={onModelChange} 
            onImageChange={onImageChange} onPostRequest={onPostRequest}
            id={id} model={model} image={image} onHome={onHome} vendor={vendor} os={os}
            handleChangeVendor={handleChangeVendor} handleChangeOs={handleChangeOs}
        />
    </>
}


export default compose(withAuthRedirect)(CreateDeviceContainer) 
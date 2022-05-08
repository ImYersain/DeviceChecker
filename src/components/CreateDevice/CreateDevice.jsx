import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './CreateDeviceContainer.module.scss';


export const CreateDevice = ({onIdChange, onModelChange, onOsChange, onManufacturerChange, onImageChange, onPostRequest, id, onHome, ...props}) => {

    const textFieldCreater = (placeholder, value, onChange) => {
        return <TextField onChange={onChange} placeholder={placeholder} hiddenLabel id="filled-hidden-label-small" defaultValue={value} variant="filled" size="small" />
    }

    return <>
    <div className={styles.createFormWrapper}>
        <div>
            <h3>New device</h3>
            <Stack
                component="form" sx={{ width: '25ch'}} spacing={2} noValidate autoComplete="off" >
                {/* <TextField onChange={onIdChange} placeholder='id' hiddenLabel id="filled-hidden-label-small" defaultValue={id} variant="filled" size="small" /> */}
                {textFieldCreater('id', id, onIdChange)}
                {textFieldCreater('model', props.model, onModelChange)}
                {textFieldCreater('os', props.os, onOsChange)}
                {textFieldCreater('manufacturer', props.manufacturer, onManufacturerChange)}
                {textFieldCreater('image', props.image, onImageChange)}
                <Button onClick={onPostRequest} size='small' variant="text"  style={{ color: 'black', backgroundColor: 'orange', width: '100px'}}>Add device</Button>
                <Button onClick={onHome} size='small' variant="text"  style={{ color: 'black', backgroundColor: 'orange', width: '100px'}}>Home</Button>
            </Stack>
        </div> 
    </div>
        
        
    </>
}
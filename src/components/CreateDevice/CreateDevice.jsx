import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';

import styles from './CreateDeviceContainer.module.scss';
import { FormControl, InputLabel, MenuItem } from '@mui/material';


export const CreateDevice = ({onIdChange, onModelChange, handleChangeVendor, handleChangeOs, onImageChange, onPostRequest, id, onHome, ...props}) => {

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

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">OS</InputLabel>
                        <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={props.os} onChange={handleChangeOs} autoWidth label="Age">
                        <MenuItem value='ios'>IOS</MenuItem>
                        <MenuItem value='android'>Android</MenuItem>
                        <MenuItem value='windows'>Windows</MenuItem>
                        </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Brand</InputLabel>
                            <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={props.vendor} onChange={handleChangeVendor} autoWidth label="OS">
                            <MenuItem value='apple'>APPLE</MenuItem>
                            <MenuItem value='samsung'>SAMSUNG</MenuItem>
                            <MenuItem value='acer'>ACER</MenuItem>
                            <MenuItem value='lg'>LG</MenuItem>
                            <MenuItem value='xiaomi'>XIAOMI</MenuItem>
                            <MenuItem value='lenovo'>LENOVO</MenuItem>
                            <MenuItem value='motorola'>MOTOROLA</MenuItem>
                            <MenuItem value='huawei'>HUAWEI</MenuItem>
                            <MenuItem value='asus'>ASUS</MenuItem>
                            </Select>
                </FormControl>
                {textFieldCreater('image', props.image, onImageChange)}
                <Button onClick={onPostRequest} size='small' variant="text"  style={{ color: 'black', backgroundColor: 'orange'}}>Add device</Button>
                <Button onClick={onHome} size='small' variant="text"  style={{ color: 'black', backgroundColor: 'orange'}}>Home</Button>
            </Stack>
        </div> 
    </div>
        
        
    </>
}
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';

import styles from './CreateDeviceContainer.module.scss';
import { FormControl, InputLabel, MenuItem } from '@mui/material';


type Nullable<T> = T | null;
type functionsType = (arg: any) => void;
interface PropsType {
    onIdChange: functionsType,
    onModelChange: functionsType, 
    handleChangeVendor: functionsType,
    handleChangeOs: functionsType,
    onImageChange: functionsType,
    onPostRequest: () => void,
    onHome: () => void,

    id: Nullable<number>,
    image: Nullable<string>,
    os: Nullable<string>,
    vendor: Nullable<string>,
    model: Nullable<string>
}


export const CreateDevice:FC<PropsType> = ({onIdChange, onModelChange, handleChangeVendor, handleChangeOs, onImageChange, onPostRequest, id, onHome, ...props}) => {
    const brands = [{id: 1, name: 'APPLE'}, {id: 2, name: 'SAMSUNG'}, {id: 3, name: 'ACER'}, {id: 4, name: 'LG'}, {id: 5, name: 'XIAOMI'}, {id: 6, name: 'LENOVO'}, {id: 7, name: 'MOTOROLA'}, {id: 8, name: 'HUAWEI'}, {id: 9, name: 'ASUS'}];
    const operationSystems= [{id: 1, name: 'IOS'}, {id: 2, name: 'ANDROID'}, {id: 3, name: 'WINDOWS'}];

    const textFieldCreater = (placeholder: string, value: number | string | null, onChange: (arg: any) => void) => {
        return <TextField onChange={onChange} placeholder={placeholder} hiddenLabel id="filled-hidden-label-small" defaultValue={value} variant="filled" size="small" />
    }


    return <>
    <div className={styles.createFormWrapper}>
        <div className={styles.createForm}>
            <h3>New device</h3>
            <Stack
                component="form" sx={{ width: '25ch'}} spacing={2} noValidate autoComplete="off" >
                {textFieldCreater('id', id, onIdChange)}
                {textFieldCreater('model', props.model, onModelChange)}

                <FormControl sx={{ m: 1 }}>
                        <InputLabel>OS</InputLabel>
                            <Select value={props.os} onChange={handleChangeOs} autoWidth label="Age">
                            {operationSystems.map(({name, id}) => <MenuItem key={id} sx={{width: '220px'}} value={name.toLowerCase()}>{name}</MenuItem>)}
                            </Select>
                </FormControl>

                <FormControl sx={{ m: 1 }}>
                        <InputLabel>Brand</InputLabel>
                            <Select value={props.vendor} onChange={handleChangeVendor} autoWidth label="OS">
                            {brands.map(({name, id}) => <MenuItem key={id} sx={{width: '220px'}} value={name.toLocaleLowerCase()}>{name}</MenuItem>)}
                            </Select>
                </FormControl>
                {textFieldCreater('image', props.image, onImageChange)}
                <Button onClick={onPostRequest} size='small' variant="text">Add device</Button>
                <Button onClick={onHome} size='small' variant="text">Home</Button>
            </Stack>
        </div> 
    </div>
    </>
}
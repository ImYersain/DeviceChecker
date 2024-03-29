import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import notFound from '../../assets/images/not-found.png';
import { DeviceType } from '../../types/device';
import { UserType } from '../../types/user';
import styles from './DeviceList.module.scss';



interface PropsType {
    device: DeviceType,
    user: UserType | null, 
    onDeleteDevice: (arg: number | null) => void,
    onBorrow: (arg: number | null) => void,
    onBringBackDevice: (arg: number | null) => void
}

export const Device:FC<PropsType> = ({device, user, onDeleteDevice, onBorrow, onBringBackDevice}) => {
    
    const isDisabled = device.hasOwnProperty('borrowed');

    return (
            <Card sx={{ maxWidth: 345, margin: '30px 10px' }} >
                <div className={styles.CardImage}>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={device.image? device.image: notFound}
                        alt="phone"
                    />
                </div>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {device.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Brand: {device.vendor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        OS: {device.os}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Status: {device.borrowed? `borrowed by ${device.borrowed.user.name}`: 'avialible'}</b>
                    </Typography>
                </CardContent>
                <CardActions>
                    {device.borrowed? <Button onClick={() => onBringBackDevice(device.id)} style={{ margin: '0 auto', color: 'black', backgroundColor: 'orange' }} > bring back</Button>:null}
                    <Button disabled={isDisabled} variant='contained' onClick={() => onBorrow(device.id)} style={{ margin: '0 auto', color: (isDisabled?'gray':'black'), backgroundColor: (isDisabled?'#edf2f6':'orange')}} size="large" >Take it</Button>
                    {user?.type === 'admin'? <Button type='submit' onClick={e => onDeleteDevice(device.id)} style={{ margin: '0 auto', color: 'black', backgroundColor: 'red' }} size="large" >Delete</Button> : null}
                </CardActions>
            </Card>
    )
}
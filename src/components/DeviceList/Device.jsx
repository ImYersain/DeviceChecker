import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import notFound from '../../assets/images/not-found.png';

export const Device = ({device, user, onDeleteDevice, onBorrow}) => {
    
    const isDisabled = device.hasOwnProperty('borrowed')

    return (
            <Card sx={{ maxWidth: 345, margin: '30px 10px' }} >
                <div style={{'height': '180px', 'width': '120px', 'margin':'20px auto'}}>
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
                        <b>Status:</b> {device.borrowed? `borrowed by ${device.borrowed.user.name}`: 'avialible'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button disabled={isDisabled} variant='contained' onClick={() => onBorrow(device.id)} style={{ margin: '0 auto', color: 'black' }} size="large" >Take it</Button>
                    {user.type === 'admin'? <Button type='submit' onClick={e => onDeleteDevice(device.id)} style={{ margin: '0 auto', color: 'black', backgroundColor: 'red' }} size="large" >Delete</Button> : null}
                </CardActions>
            </Card>
    )
}
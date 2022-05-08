import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Device = ({device, user, onDeleteDevice}) => {

    return (
            <Card sx={{ maxWidth: 345, margin: '30px 10px' }} >
                <div style={{'height': '140px', 'width': '100px', 'margin':'10px auto'}}>
                <CardMedia
                    component="img"
                    width="100%"
                    image={device.image}
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
                    <Button style={{ margin: '0 auto', color: 'black', backgroundColor: 'orange' }} size="large" >Take it</Button>
                    {user.type === 'admin'? <Button type='submit' onClick={e => onDeleteDevice(device.id)} style={{ margin: '0 auto', color: 'black', backgroundColor: 'red' }} size="large" >Delete</Button> : null}
                </CardActions>
            </Card>
    )
}
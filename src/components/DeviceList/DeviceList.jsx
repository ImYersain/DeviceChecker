import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './DeviceList.module.scss';


const Device = () => {
    return (
        <>
            {/* <div className={styles.ItemCard}>
                    <img src='https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580992-Product-1-I-637824115977343671_800x800.jpg?v=1646776346'/>
                    <h3>Iphone 13 PRO Green</h3>
                    <div>Apple</div>
                    <div>IOS</div>
                    <button>Take it</button>
            </div> */}

            <Card sx={{ maxWidth: 345 }} className={styles.ItemCard} >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580992-Product-1-I-637824115977343671_800x800.jpg?v=1646776346"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Iphone 13 PRO Green
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Brand: Apple
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    OC: IOS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Status: Busy
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{margin:'0 auto', color: 'black', backgroundColor:'orange'}} size="large" >Take it</Button>
                </CardActions>
            </Card>
        </>
    )
}

const DeviceList = () => {
    return (
        <>
            <div className={styles.SearchPanel}>
                <input type="checkbox" ></input>
            </div>
            <div className={styles.DeviceListWrapper}>
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
                <Device />
            </ div>
        </>
    )
}

export default DeviceList;
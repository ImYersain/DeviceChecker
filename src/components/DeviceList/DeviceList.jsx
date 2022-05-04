import React from 'react';

import styles from './DeviceList.module.scss';


const Device = () => {
    return (
        <>
            <div className={styles.ItemCard}>
                    <img src='https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580992-Product-1-I-637824115977343671_800x800.jpg?v=1646776346'/>
                    <h3>Iphone 13 PRO Green</h3>
                    <div>Apple</div>
                    <div>IOS</div>
                    <button>Take it</button>
                </div>
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
            </ div>
        </>
    )
}

export default DeviceList;
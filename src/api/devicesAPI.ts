import { DeviceType } from './../types/device';
import { instance, RequestPropsType } from "./Api"



export const devicesAPI = {

    getDevices(token: any ){
        return instance.get<Array<DeviceType>>(`/phones`, { 
            headers: {
                'Auth-Token': token
            }
        })
        .then(response => {
            return response.data
        })
    },
    
    postDevice({id, model, os, vendor, image}:DeviceType, token: any){
        return instance.post(`/phones/`,
         {
            'code': id,
            'os': os,
            'vendor': vendor,
            'model': model,
            'image': image,
            }, 
        { headers: {
            'Auth-Token': token
        }})
        
    },

    deleteDevice({token, id}: RequestPropsType){
        return instance.delete(`/phones/${id}`,  
        {  headers: {
                'Auth-token': token
            }
        })
    },

    borrowDevice(token: any, id: string | null){
        return instance.post(`/phones/${id}/borrow`, {},
        { headers: {
            'Auth-token': token
        }
    })
    },

    bringBackDevice(token: any, id: string | null){
        return instance.post(`/phones/${id}/return`, {},
        { headers: {
            'Auth-token': token
        }
    })
    }
    
}
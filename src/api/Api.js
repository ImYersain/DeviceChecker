import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://js-test-api.etnetera.cz/api/v1'})



export const authAPI = {
    
    login(login, password){
        return instance.post(`/login`,{ login, password })
    },  
    logout(){
        return instance.delete(`/login`)
    },
    userMe({token, id}){
        return instance.get(`users/${id}`, {
            headers: {
                'Auth-Token': token
            }
        })
    }
}

export const devicesAPI = {
    
    getDevices(token){
        return instance.get(`/phones`, { 
            headers: {
                'Auth-Token': token
            }
        })
        .then(response => {
            return response.data
        })
    },
    
    postDevice({id, model, os, vendor, image}, token){
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

    deleteDevice({token, id}){
        return instance.delete(`/phones/${id}`,  
        {  headers: {
                'Auth-token': token
            }
        })
    },

    borrowDevice(id, token){
        return instance.post(`/phones/${id}/borrow`, {},
        { headers: {
            'Auth-token': token
        }
    })
    },

    bringBackDevice(id, token){
        return instance.post(`/phones/${id}/return`, {},
        { headers: {
            'Auth-token': token
        }
    })
    }
    
}
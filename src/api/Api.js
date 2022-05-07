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
    
    postDevice({token, id, model, os, vendor, image}){
        return instance.post(`/phones/`, { 
            headers: {
                'phone': {
                    'id': id,
                    'os': os,
                    'vendor': vendor,
                    'model': model,
                    'image': image,
                },
                'Auth-Token': token
            }
        })
        .then(response => {
            return response.data
        })
    },

    getDevice(id){
        return instance.get(`/phones/${id}`)
        .then(response => {
            return response.data
        })
    }
}
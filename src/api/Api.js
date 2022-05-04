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
            console.log(response.data)
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


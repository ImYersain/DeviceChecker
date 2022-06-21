import { UserType } from './../types/user';
import { instance, RequestPropsType } from "./Api"




export const authAPI = {
    
    login(login: string | null, password: string | null){
        return instance.post<UserType>(`/login`,{ login, password })
    },  
    logout(){
        return instance.delete(`/login`)
    },
    userMe({token, id}: RequestPropsType){
        return instance.get<UserType>(`users/${id}`, {
            headers: {
                'Auth-Token': token
            }
        })
    }
}
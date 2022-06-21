import * as axios from 'axios';


export const instance = axios.default.create({
    baseURL: 'https://js-test-api.etnetera.cz/api/v1'})


export interface RequestPropsType {
    token: null | any | string
    id: string | number | null 
}

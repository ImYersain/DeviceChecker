import * as axios from 'axios';


export const instance = axios.default.create({
    baseURL: 'https://js-test-api.etnetera.cz/api/v1'})


export interface RequestPropsType {
    token: any,
    id: string | number | null 
}

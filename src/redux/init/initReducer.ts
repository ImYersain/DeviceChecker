import { createSlice } from '@reduxjs/toolkit';


interface InitialStateType {
    isInit: boolean
}
const initialState: InitialStateType = {
    isInit: false
}


export const initilazeSlice = createSlice({
    name: 'intialize',
    initialState,
    reducers: {
        initialize(state){
            state.isInit = true
        }
    }
})


export default initilazeSlice.reducer
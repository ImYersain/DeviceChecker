import {INIT} from './initActionCreater';


const initialState = {
    isInit: false
}

export const initilazeReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT: {
            return {
                isInit: true
            }
        }
        default: return state
    }
}
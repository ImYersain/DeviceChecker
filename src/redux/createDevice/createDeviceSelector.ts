import { RootState } from './../redux-store';


export const selectWasCreate = (state: RootState) => {
    return state.createDevicePage.wasCreated
}
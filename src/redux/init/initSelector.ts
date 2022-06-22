import { RootState } from "../redux-store"

export const getIsInit = (state: RootState) => {
    return state.init.isInit
}
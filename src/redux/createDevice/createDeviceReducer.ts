import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from '../../types/auth';
import { DeviceType } from '../../types/device';



interface InitialStateType {
  postDeviceRequestStatus: AuthType,
  device: DeviceType | null,
  wasCreated: boolean
}

const initialState: InitialStateType = {
  postDeviceRequestStatus: {
    pending: false,
    success: false,
    error: false,
  },
  device: {
    id: null,
    os: null,
    vendor: null,
    model: null,
    image: null,
  },
  wasCreated: false,
};



export const createDeviceSlice = createSlice({
  name: 'createDevice',
  initialState,
  reducers: {
    postRequest(state){
        state.postDeviceRequestStatus.pending = true
    },
    postSuccess(state, action: PayloadAction<DeviceType>){
        state.postDeviceRequestStatus.pending = false
        state.postDeviceRequestStatus.success = true
        state.device = action.payload
        state.wasCreated = true
    },
    postError(state){
      state.postDeviceRequestStatus.pending = false
      state.postDeviceRequestStatus.success = false
      state.postDeviceRequestStatus.error = true
      state.device = null
    },
    devicesSuccess(state){
      state.wasCreated = false
    }
  }
})


export default createDeviceSlice.reducer
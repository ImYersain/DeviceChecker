export const selectDeviceReducer = (state) => state.deviceListPage

export const getDevices = (state) => {
    return selectDeviceReducer(state).devices
}

export const hasToBeSorted = (state) => {
    const {sortOs, sortVendor, areAllowed} =  selectDeviceReducer(state)
    return sortOs !== 'all' || sortVendor !== 'all' || areAllowed
}

export const selectSortedDevices = (state) => {
    const {sortOs, sortVendor, devices, areAllowed} = selectDeviceReducer(state);

    let sortedDevices = [] 

    if(sortOs !== 'all') {
        sortedDevices = [...devices.filter(device => device.os?.toLowerCase() === sortOs.toLowerCase())]
    }
    if(sortVendor !== 'all') {
        sortedDevices = [...devices.filter(device => device.vendor?.toLowerCase() === sortVendor.toLowerCase())]
    }




    if(sortOs !== 'all' && sortVendor !== 'all') {
        sortedDevices = [...devices.filter(device => device.os?.toLowerCase() === sortOs.toLowerCase() && device.vendor?.toLowerCase() === sortVendor.toLowerCase())]
    }

    if(areAllowed) {
        const areSortedDevices = sortedDevices.length && sortOs !== 'all' && sortVendor !== 'all'
        const sortingArray = areSortedDevices ? sortedDevices : devices
        sortedDevices = sortingArray.filter(device => !Boolean(device.borrowed?.user))
    }


    return sortedDevices
}
export const addDataLocalStorage = (key, data) => {
    localStorage.setItem(key,data)
}

export const getByKeyFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    if(value){
        return value
    }
    return null
}

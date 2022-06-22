export const addDataLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, data)
}

export const getByKeyFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if(value){
        return value
    }
    return null
}

import { useEffect, useState } from "react";

function getSavedValue(key, initValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    //this is to check if initialvalue is a function, if its a function then it will return the function
    if (initValue instanceof Function) return initValue()
    return initValue;
}

const useLocalStorage = (key, initValue)=>{
    const [value, setValue] = useState(()=>{
        return getSavedValue(key, initValue)
    })
    
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage;
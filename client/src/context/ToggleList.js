import React, { createContext, useState } from 'react'

export const ToggleList = createContext();

const ToggleListProvider = (props) => {
    const [ toggleList, changeToggle ] = useState([
        new Array(10).fill(true)
    ])
    
    const toggleListVal = (x) => {
        changeToggle(toggleList[x] = !toggleList[x])
    }
    
    return (
        <ToggleList.Provider value={{toggleList, toggleListVal: toggleListVal}}>
            {props.children}
        </ToggleList.Provider>
    )
}

export default ToggleListProvider
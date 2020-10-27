import React, { createContext, useState, useEffect } from 'react'
import { listLocation } from '../services/listingServices'

export const ShowList = createContext();

const ShowListProvider = (props) => {
    const [ list, changeList ] = useState([])
    

    useEffect(() => {
      async function fetchData(){
         let listed = await listLocation().then(data => data.data)
          
          changeList(() => list.concat(listed))
      }
      fetchData()
      
  }, [])
    
    return (
        <ShowList.Provider value={{list}}>
            {props.children}
        </ShowList.Provider>
    )
}

export default ShowListProvider

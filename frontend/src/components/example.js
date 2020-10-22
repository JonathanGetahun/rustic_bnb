import React, { useState, useEffect } from 'react'
import { listLocations } from '../services/listingServices'


 function  Example() {
    

    const [ url, changeURL ] = useState([])

        let listed;

        useEffect(() => {
            //React doesnt want the entire useEffect function to be async,
            //you need to write your async function inside so it doesn't give you a warning
            async function fetchData(){
                listed = await listLocations().then(data => data.data)
                changeURL(url.concat(listed))
            }
            fetchData()
        }, [])
        
        
    return (
        <div>
            <h1>Working?</h1>
            <div>
                {url.map((imageURL, index) => {
                   <img src={imageURL} key={index} alt="JJ" />
                })}
            </div>
        </div>
    )
}

export default Example

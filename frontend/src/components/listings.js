import React, { useState, useEffect } from 'react'
import SearchResults from './SearchResults'
import { listLocation } from '../services/listingServices'
import '../styling/searchResults.css'
import '../styling/searchPage.css'




function Listings() {

    const [url, changeURL ] = useState([]);
    
    let listed; 
    let final;

    useEffect(() => {
        async function fetchData(){
            listed = await listLocation().then(data => data.data)
            
            changeURL(url.concat(listed))
        }
        fetchData()
        
    }, [])

    console.log(url)

    const placeList = url.map((data,i) => {
       
        return <SearchResults
                   key={i}
                   img={data.images}
                   location="Private room in center of London"
                   title="Stay at this spacious Edwardian House"
                   description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen ·  Washing Machine"
                   star={4.73}
                   price="£30 / night"
                   total="£117 total"
               />
    })

    return (
        <div>
            {placeList}
        </div>
    )
}

export default Listings

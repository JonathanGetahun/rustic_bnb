import React, { useEffect } from 'react'
import SearchResults from './SearchResults'
import '../../styling/searchResults.css'
import '../../styling/searchPage.css'

import { fetchListings } from '../../actions/listing_actions'
import { useDispatch, useSelector } from 'react-redux'


  function Listings(props) {

const dispatch = useDispatch()

    

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])
    
    let placeList;
   const list = useSelector(state => state.list)

 
    if(!list) return <div>loading..</div> 
    else {
     placeList = list.map((data,i) => {

        return <SearchResults
                   key={i}
                   img={data.images}
                   location={data.location}
                   title={data.locationName}
                   amenities={data.amenities}
                   description={data.description}
                   star={data.Rating}
                   price={`$${data.Price}`}
                   id={data.id}
                   host={data.host}
                   locationTag={data.locationTag}

               />
    })
}



    return (
        <div>
            { placeList ? placeList : `Comeback later`}
        </div>
    )
}



export default Listings

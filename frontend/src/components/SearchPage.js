import React, { useEffect } from 'react'
import '../styling/searchPage.css'
import { Button } from '@material-ui/core'
import Listings from './Listings'
import GoogleMap from './GoogleMap'

import {useSelector} from 'react-redux'


// import ShowListProvider from '../context/ShowList'
// import ToggleListProvider from '../context/ToggleList'


const SearchPage = () =>{

  const list = useSelector(state => state.list)
  let amount = 0;

  
  
  list.forEach((listing) => {
    console.log('amount',amount)
    if(listing.display == true) amount++;
    if(amount >= 0 && listing.display == false) amount--;
    })
  

    return (
        <div className='searchPage'>
            <div className='searchPage_row'>

                <div className='searchPage_column_listings'>
                    <div className='searchPage_info'> 
                    <h1>{amount} Stays nearby</h1>
                    <Button variant="outlined">Type of Place</Button>
                    <Button variant="outlined">Price</Button>
                    <Button variant="outlined">Rooms and Number of Beds</Button>
                    <Button variant="outlined">More filters</Button>
                    </div>
                
                <ul className='searchPage_listings'>
                    <li className='searchPage_item'>
                        {(amount == 0) ? 'Sorry wait for updates': null}
                        <Listings /> 
                    </li>
                </ul>
                </div>
                <div className='searchPage_column_map'>
                <div className='searchPage_map'>
                   
                  <GoogleMap  />
            
                </div>
                
                </div>

            </div>
        </div>
    )
}

// const linksFromSomewhere = list.map((data) => {
//   return {
//     coords: data.locationTag,
//     title: data.locationName
//   }
// })

// const mapProps = {
//   onMount: addMarkers,
//   onMountProps: linksFromSomewhere
// }


// function addMarkers(map, links){
//   links.forEach((link, index) => {
//     const marker = new window.google.maps.Marker({
//       map,
//       position: link.coords,
//       label: `${index+1}`,
//       title: link.title,
//     })
//     marker.addListener(`click`, ()=> {
//       window.location.href = link.url
//     })
//   })
// }


export default SearchPage


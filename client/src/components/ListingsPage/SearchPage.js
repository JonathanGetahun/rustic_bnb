import React from 'react'
import '../../styling/searchPage.css'
import { Button } from '@material-ui/core'
import Listings from './Listings'
import GoogleMap from './GoogleMap'

import {useSelector} from 'react-redux'



const SearchPage = () =>{


  const list = useSelector(state => state.list)

    return (
        <div className='searchPage'>
            <div className='searchPage_row'>

                <div className='searchPage_column_listings'>
                    <div className='searchPage_info'> 
                    <h1>{list.length} Stays nearby</h1>
                    <Button variant="outlined">Type of Place</Button>
                    <Button variant="outlined">Price</Button>
                    <Button variant="outlined">Rooms and Number of Beds</Button>
                    <Button variant="outlined">More filters</Button>
                    </div>
                
                <ul className='searchPage_listings'>
                    <li className='searchPage_item'>
    {list.length === 0 ? <h1> No listings in area, try adjusting your search with zoom or refreshing...</h1> : <Listings />} 
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


export default SearchPage


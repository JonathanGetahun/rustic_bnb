import React from 'react'
import '../styling/searchPage.css'
import { Button } from '@material-ui/core'
import Listings from './Listings'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

function SearchPage() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <Marker
            position={{ lat: -34.397, lng: 150.644 }}
          />
        </GoogleMap>
      ));

    return (
        <div className='searchPage'>
            <div className='searchPage_row'>
                <div className='searchPage_column_listings'>
                    <div className='searchPage_info'> 
                    <h1>Stays nearby</h1>
                    <Button variant="outlined">Type of Place</Button>
                    <Button variant="outlined">Price</Button>
                    <Button variant="outlined">Rooms and Number of Beds</Button>
                    <Button variant="outlined">More filters</Button>
                    </div>
                <ul className='searchPage_listings'>
                    <li className='searchPage_item'>
                        <Listings />
                    </li>
                </ul>
                </div>
                <div className='searchPage_column_map'>
                <div className='searchPage_map'>
                    <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtUEgnaiz_BohRiu6JZItc89SJWk_DecI&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `1027px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />      
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage

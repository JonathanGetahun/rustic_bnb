import React from 'react'
import '../styling/searchResults.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"
import Slider from './Slider'
import { Link } from 'react-router-dom'

function SearchResults({
    img, 
    title,
    description,
    star,
    price, 
    id,
    host,
    location,
    amenities, 
    locationTag
}) {
// console.log("display:", show)

   
    return (
      
        //  <div className="searchResult" style={{ display: (show ? 'flex' : 'none') }} >
        <Link to={{pathname: `/search/${id}`, 
            state: {
                img: img,
                title: title,
                description: description,
                star: star,
                price: price,
                id: id,
                host:host,
                location: location,
                amenities: amenities,
                locationTag: locationTag
            }
        }} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="searchResult" >
            {/* <img src={img} alt="" /> */}
            
            <Slider img={img}/>
            <FavoriteBorderIcon className="searchResults_heart" />
            <div className='searchResult_info'>
                <div className="searchResult_infoTop">
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{location}</p>
                    {/* {console.log(amenities)} */}
                    <p>{`${amenities[0]} · ${amenities[1]} · ${amenities[2]} · ${amenities[3]}`}</p>
                </div>

                <div className="searchResult_infoBottom">
                    <div className="searchResult_stars">
                        <StarIcon className="searchResult_star" />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResults_price">
                        <p><strong>{price}</strong></p>
                    </div>
                </div>
            </div>

        </div> 
        </Link>
    ) 
}

export default SearchResults

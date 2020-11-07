import React from 'react'
import '../../styling/bookingResults.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"
import Slider from '../Slider'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Button } from "@material-ui/core"

import ReviewModal from '../Reviews.js/ReviewModal'
import { deleteBooking } from '../../services/bookingServices'
import { useSelector } from 'react-redux'

function BookingResults({
    img, 
    title,
    description,
    startDate,
    price, 
    id,
    endDate,
    location,
    amenities, 
    bookingId
}) {
    //controls which one(review or cancel) shows depending on date
    let cancel = false;

    //state to access user email
    const user = useSelector(state => state.user)
    
// console.log("display:", show)
    let today = moment().format('YYYY-MM-DD')
    let adjStartDate = moment(startDate).format('YYYY-MM-DD')

    if (moment(today).isBefore(adjStartDate)){
        cancel = true;
    } 
    let startNewDate = startDate.substring(0,10)
    let endNewDate = endDate.substring(0,10)

    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload()
        //order matters, userId first then bookingId
        deleteBooking(user.email, bookingId)
    }
   
    return (
      
        //  <div className="searchResult" style={{ display: (show ? 'flex' : 'none') }} >
        <Link to={{pathname: `/search/2`}} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="bookingResults" >
            {/* <img src={img} alt="" /> */}
            
            <Slider img={img}/>
            {cancel 
                ? <Button 
                    className="booking_button" 
                    variant="contained" 
                    color="secondary"
                    onClick={handleCancel}> Cancel Booking</Button> 
                : <div className="booking_button">{<ReviewModal id={id}/>}</div>}
            <div className='bookingResult_info'>
                {/* <div className="bookingResult_infoTop"> */}
                    <h3>{title}</h3>
                    <p>{location}</p>
                    <br></br>
                {/* </div> */}

            <div className="bookingResult_date">
                <h2 style={{color: "green"}}>Confirmed!</h2>
                
                <h3>Check-in Date: {startNewDate}</h3>
                <h3>Check-out Date: {endNewDate}</h3>
            </div>

                <div className="bookingResult_infoBottom">
                    <div className="bookingResult_stars">
                        {/* <StarIcon className="bookingResult_star" /> */}
                        {/* <p><strong>{star}</strong></p> */}
                    </div>
                    <div className="bookingResults_price">
                        {/* <p><strong>{price}</strong></p> */}
                    </div>
                </div>
            </div>

        </div> 
        </Link>
    ) 
}

export default BookingResults

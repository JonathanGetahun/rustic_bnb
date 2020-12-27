import React from 'react'
import '../../styling/bookingResults.css'
import Slider from '../ListingsPage/Slider'
import { Link } from 'react-router-dom'
import moment from 'moment'
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
        <div className="result">
        <Link to={{pathname: `/search/${id}`}} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="bookingResults" >
            {/* <img src={img} alt="" /> */}
            
            <Slider img={img}/>
            
            {/* {cancel 
                ? <Button 
                    className="booking_button" 
                    variant="contained" 
                    color="secondary"
                    onClick={handleCancel}> Cancel Booking</Button> 
                : <button 
                    className="booking_button" >{ReviewModal(id)}</button>} */}
                {/* <div className="bookingResult_infoTop"> */}
                <div className="result_title_location">
                <h3>{title}</h3>
                 <p>{location}</p>

                 
                </div>
                <div className="bookingResult_date">
                <h2 style={{color: "green"}}>Confirmed!</h2>
                
                <h3>Check-in Date: {startNewDate}</h3>
                <h3>Check-out Date: {endNewDate}</h3>
                
            </div>
                    <br></br>
                {/* </div> */}



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

         {/* </div>  */}
         </Link> 
         <div className="result_button">
         {cancel ? <button 
                    className="booking_button" 
                    onClick={handleCancel}> <p>Cancel Booking</p></button> 
                     : ReviewModal(id)}
         </div>
 
         </div>
    ) 
}

export default BookingResults

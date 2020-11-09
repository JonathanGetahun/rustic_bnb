import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBookings } from '../../services/bookingServices'
import BookingResults from './BookingResults'
import '../../styling/bookings.css'
import { useHistory } from 'react-router-dom'


function Bookings() {

    const [user, setUser] = useState(null)
    const state = useSelector(state => state.user)
    //using the objectId from the url 
    //to send as req param and get back bookings
    let par = window.location.href
    let url = par.substring(28)
    
    
    let bookingList;
    let heading;
    let bookings;

    const history = useHistory()
    
    
    useEffect(() => {
        let info;
        async function getBook(){
            
            info  = await getBookings(url)
            // console.log("info", info)
            setUser(info)
           
        }
        getBook()
        
       
       // eslint-disable-next-line
    }, [] )

    if(!user) {
        return <div>Loading....</div> 
    } else if (Object.keys(state).length === 0){
        // return <h1> Please log in and try again</h1>
        history.push(`/home`)
    }else {
        
        heading = <div className="booking_heading" >
            {/* have to use inline worth max amount of points in prio */}
            <h1 style={{fontFamily: 'Source Code Pro'}}>Hi, {user.data.firstName} here are your bookings!</h1>
            <h2>Plan and manage your upcoming trips here</h2>
            </div>
        
        bookings = user.data.bookings
        console.log("user", user)
     bookingList = bookings.map((data,i) => {
       
        //get Id from server/update mongo so that you can link back to search page
        return <BookingResults
                   key={i}
                   img={data.images}
                   location={data.location}
                   title={data.locationName}
                   amenities={data.amenities}
                   description={data.description}
                   startDate={data.startDate}
                   endDate={data.endDate}
                   price={`$${data.Price}`}
                   id={data.id}
                   bookingId={data._id}
                   
                //    show={data.display}
               />
    })
}
    
    
    return (
        <div className='booking_info'>
            {heading}
           
            {bookingList}
            
        </div>
    )
}

export default Bookings

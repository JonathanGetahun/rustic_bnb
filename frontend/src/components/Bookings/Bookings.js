import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBookings } from '../../services/bookingServices'

function Bookings() {

    const [user, setUser] = useState(null)
    const state = useSelector(state => state.user)
    let par = window.location.href
    let url = par.substring(28)
    console.log("params here", url)
    
    
    useEffect(() => {
        let info;
        async function getBook(){
            info  = await getBookings(url)
            setUser(info)
        }
        getBook()
        
       console.log("made it here", url, user)
    }, [] )
    
    
    return (
        <div>
            Hi, my nigga here are your listings. 
            {console.log(user)}
            
        </div>
    )
}

export default Bookings

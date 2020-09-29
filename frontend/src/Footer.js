import React from 'react'
import './footer.css'

function Footer() {
    if(window.location.pathname==='/') return null;
    return (
        <div className='footer'>
            <p>2020 Created By: Jonathan Getahun</p>
        </div>
    )
}

export default Footer

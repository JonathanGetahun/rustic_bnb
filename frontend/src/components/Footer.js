import React from 'react'
import '../styling/footer.css'
import logo from '../styling/GitHub-Mark-32px.png'

function Footer() {
    if(window.location.pathname==='/') return null;
    return (
        <div className='footer'>
            <p>2020 Created By: Jonathan Getahun</p>
            <div><a href="https://github.com/JonathanGetahun"> <img src={logo} alt="my github" /></a></div>
        </div>
    )
}

export default Footer

import React from 'react'
import './start.css'

function Start() {
    return (
        <body className="bodyStart">
            <img src="https://i.imgur.com/5gjRSmB.gif" alt="" id="bg" />
        <div className="start">
        <div className="start_heading">
            <h2>Mother Nature is Calling.</h2>
            <h4>Find a place to recharge and escape the day to day.</h4>
        </div>
        <div className="start_location">
        <div className="start_input">
        <p>Where?</p>
        <input type="text" placeholder="anywhere" />
        </div>
        <div className="start_arrow">

        </div>
        </div>
        <div className="start_authentication">

        </div>
        </div>
        </body>

    )
}

export default Start

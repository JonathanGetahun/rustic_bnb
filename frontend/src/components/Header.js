import React from 'react'
import '../styling/header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'

function Header() {
    //so that it doesn't show up in the front page, checks the url
    if(window.location.pathname==='/') return null;
    return (
        <div className='header'>
            <Link to='/home'>
            <img className="header_icon"
            src={require("../styling/logo.png")}
            alt="?" />
            </Link>
        

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default Header

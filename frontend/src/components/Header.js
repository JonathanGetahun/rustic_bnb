import React, { useState } from 'react'
import '../styling/header.css'
import SearchIcon from "@material-ui/icons/Search"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'
import LoginContent from './Modal_Parts/Login_Container'
import SignUpContent from './Modal_Parts/SignUp_Container'

function Header() {
    //so that it doesn't show up in the front page, checks the url

    const [ drop, setDrop ] = useState(false)
    const handleDropdown = () => setDrop(!drop)

    const [showLogin, setLogin ] = useState(false);
    const openModalLogin = () => setLogin(true);
    const closeModalLogin = () => setLogin(false);

    const [showSignUp, setShow ] = useState(false);
    const openModalSignUp = () => setShow(true);
    const closeModalSignUp = () => setShow(false);

    if(window.location.pathname==='/') return null;
    return (
        <div>
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
            <div  className={drop ? "header_dropdown" : "hide"}>
                <ul>
                    <li onClick={() => openModalLogin()}> Log In </li>
                    <hr />
                    <li onClick={() => openModalSignUp}> Sign Up </li>
                </ul>
                </div>
                {showSignUp && <SignUpContent closeModal={closeModalSignUp} show={showSignUp} />}
                {showLogin && <LoginContent closeModal={closeModalLogin} show={showLogin} />}
                <Avatar />
                <ExpandMoreIcon className="header_expand" onClick={handleDropdown}/>    
            </div>
            </div>
        </div>
            
    )
}

export default Header

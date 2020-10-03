import React, { useState, useEffect } from 'react'
import '../styling/header.css'
import useOnClickOutside from 'use-onclickoutside'
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


    const [showSignUp, setSignUp] = useState(false);
    const openModalSignUp = () => setSignUp(true);



    const handleClickOutside = (e) => {
        console.log('global click')
        setDrop(false)
      }

    useEffect(()=> {
        window.addEventListener('dblclick', handleClickOutside)
    }, [drop])

    if(window.location.pathname==='/') return null;
    return (
        <div>
        <div className='header' >
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
            <div  onBlur={handleDropdown} className={drop ? "header_dropdown" : "hide"}>
                <ul>
                    <li onClick={() => openModalLogin()}> Log In </li>
                    <hr />
                    <li onClick={() => openModalSignUp}> Sign Up </li>
                </ul>
                </div>
                <LoginContent open={showLogin} setLogin={setLogin} setSignUp={setSignUp} />
                <SignUpContent open={showSignUp} setSignUp={setSignUp} setLogin={setLogin} />
                
                <Avatar />
                <ExpandMoreIcon className="header_expand" onClick={handleDropdown}/>    
            </div>
            </div>
        </div>
            
    )
}

export default Header

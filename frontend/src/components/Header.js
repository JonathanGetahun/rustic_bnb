import React, { useState, useEffect, useRef } from 'react'
import '../styling/header.css'
import SearchIcon from "@material-ui/icons/Search"
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'
import LoginContent from './Modal_Parts/Login_Container'
import SignUpContent from './Modal_Parts/SignUp_Container'
import { getCurrentUser, logout } from '../services/userServices'
// import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, logoutUser } from '../actions/user_actions'
import { useHistory } from 'react-router-dom'


function Header() {

    const history = useHistory()

    //hooks for the dropdown conditionals 
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const [showLogin, setLogin ] = useState(false);
    const openModalLogin = () => setLogin(true);
    const [showSignUp, setSignUp] = useState(false);
    const openModalSignUp = () => setSignUp(true);

    const [showUser, setUser ] = useState(false)
    const autoCompleteRef = useRef(null)

  const logged = useSelector(state => state.user)
  const dispatch = useDispatch();


  console.log("user",showUser)


    useEffect(()=> {
        
        if(logged.logged){
            setUser(true)
            
        }
    }, [logged])

    // useEffect(() => {
    //   if(!logged.logged) {
    //     setUser(false)
    //     console.log("reached?")
    //   }
    // }, [logged])
  

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    const handleLogout = (event) => {
        // logout()
        setUser(false)
        dispatch(logoutUser())
        window.location.reload()
    }

    //handles the Reservations Tab
    const handleBooked = () => {
      history.push(`/users/${logged.id}`)
    }
    let autoComplete;
    // useEffect(() => {
    //   const onLoad = () =>  autoComplete = new window.google.maps.places.SearchBox(autoCompleteRef.current)
    //   if(!window.google){
    //     // const script = document.createElement('script')
    //     // script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAlBHUa-VwmusSueaeZay0Z0SIdveaqTHM&libraries=places'
    //     // document.head.append(script)
    //     // script.addEventListener('load', onLoad)
    //     // return () => script.removeEventListener('load', onLoad)
    //     onLoad()
    // } else {
    //     onLoad()
    //     }  
    // }, )
    
    // useEffect(() => {
    //   if(window.google){
    //     console.log('activate')
    //   const input = document.getElementById("autocomplete-search")
    //   const autocomplete = new window.google.maps.places.Autocomplete(input)
    //   }
    //   console.log('not active')
    // }, [window.google])
    


    //so that it doesn't appear at the start page
    if(window.location.pathname==='/') return null;

    
    
    return (
        
        <div className='header' >
            <Link to='/home'>
            <img className="header_icon"
            src={require("../styling/logo.png")}
            alt="?" />
            </Link>
        

            <div className="header_center" >
                {/* ref={autoCompleteRef} */}
                <input type="text" id="autocomplete-search" placeholder="Enter a destination"/>
                <SearchIcon />
            </div>

            <div className='header_right'>
                        
                {showUser ? 
                        <>
                                        <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                >
                    <Avatar />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                <MenuItem onClick={() => handleBooked()}>Reservations</MenuItem>
              </Menu>
                        </>
                        :

                    <>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                >
                    <Avatar />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => openModalLogin()}>Log In</MenuItem>
                <MenuItem onClick={() => openModalSignUp()}>Sign Up</MenuItem>
              </Menu>

                {/* </div> */}
                <LoginContent open={showLogin} setLogin={setLogin} setSignUp={setSignUp} />
                <SignUpContent open={showSignUp} setSignUp={setSignUp} setLogin={setLogin} />
       
                    </>
                }
   
            </div>
            </div>
        
            
    )
}

export default Header

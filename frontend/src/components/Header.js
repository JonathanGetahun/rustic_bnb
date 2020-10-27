import React, { useState, useEffect } from 'react'
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





function Header() {

    // const history = useHistory()

    //hooks for the dropdown conditionals 
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const [showLogin, setLogin ] = useState(true);
    const openModalLogin = () => setLogin(true);
    const [showSignUp, setSignUp] = useState(false);
    const openModalSignUp = () => setSignUp(true);

    const [showUser, setUser ] = useState(false)

    useEffect(()=> {
        const user = getCurrentUser()
        if(user){
            setUser(true)
        }
    }, [showUser])
    // if(getCurrentUser()){
    //     setUser(true)
    // }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    const handleLogout = (event) => {
        logout()
        setUser(false)
        console.log("working")
    }

    //so that it doesn't appear at the start page
    if(window.location.pathname==='/') return null;

    return (
        
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
                <MenuItem onClick={() => openModalSignUp}>Sign Up</MenuItem>
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

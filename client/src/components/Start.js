import React, { useState, useEffect } from 'react'
import '../styling/start.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LoginContent from './Modal_Parts/Login_Container'
import SignUpContent from './Modal_Parts/SignUp_Container'



function Start() {
    const history = useHistory();

    const [showLogin, setLogin ] = useState(false);
    const openModalLogin = (event) => setLogin(true);
    

    const [showSignUp, setSignUp ] = useState(false);
    const openModalSignUp = (event) => setSignUp(true);
    

   

    return (
        
        <div className="bodyStart">
            <img src="https://i.imgur.com/5gjRSmB.gif" alt="" id="bg" />
            <div className="start_logo">
                <img src={require("../styling/logo.png")} alt="" onClick={() => {
                history.push('/home')
                history.go(0)}} className="logo" />
            </div>
        <div className="start">
            
        <div className="start_heading">
            <h2>Mother Nature is Calling.</h2>
            <h4>Find a place to recharge and escape the day to day.</h4>
        </div>
        <div className="start_location">
        <p>Where?</p>
        <div className="start_input">
        <input type="text" placeholder="anywhere" />
        
            <ArrowForwardIcon onClick={openModalSignUp}
            className="arrow" fontSize="large"/>  
        
        </div>
        </div>
        <div className="start_authentication">
        <Button className="login" 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={openModalLogin}> Login </Button>
            {/*Basically you can change parent component state using hooks when you pass them to their children*/}
            <LoginContent open={showLogin} setLogin={setLogin} setSignUp={setSignUp} />

        <Button className="signup" 
            variant="contained" 
            size="large"
            onClick={openModalSignUp}> Sign-Up </Button>
            {/* {showSignUp && <SignUpContent closeModal={closeModalSignUp} show={showSignUp} />} */}
            <SignUpContent open={showSignUp} setSignUp={setSignUp} setLogin={setLogin} />
        </div>
        <div>
        {/* <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => handleLogin(e)}
          >
            Demo Login
          </Button> */}
        </div>
        </div>
        </div>
        
    )
}

export default Start

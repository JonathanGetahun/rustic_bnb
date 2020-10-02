import React, { useState } from 'react'
import '../styling/start.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LoginContent from './Modal_Parts/Login_Container'
import SignUpContent from './Modal_Parts/SignUp_Container'


function Start() {
    const history = useHistory();

    const [showLogin, setLogin ] = useState(false);
    const openModalLogin = () => setLogin(true);
    const closeModalLogin = () => setLogin(false);

    const [showSignUp, setShow ] = useState(false);
    const openModalSignUp = () => setShow(true);
    const closeModalSignUp = () => setShow(false);


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
        
            <ArrowForwardIcon onClick={() => {
                history.push('/search')
                history.go(0)}}
            className="arrow" fontSize="large"/>  
        
        </div>
        </div>
        <div className="start_authentication">
        <Button className="login" 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => openModalLogin()}> Login </Button>
            {showLogin && <LoginContent closeModal={closeModalLogin} show={showLogin} />}

        <Button className="signup" 
            variant="contained" 
            size="large"
            onClick={()=> openModalSignUp()}> Sign-Up </Button>
            {showSignUp && <SignUpContent closeModal={closeModalSignUp} show={showSignUp} />}
        </div>
        </div>
        </div>
        
    )
}

export default Start

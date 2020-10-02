import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './loginContent.css'
import SignUpContent from './SignUp_Container'


function LoginContent(props) {

    const [ open, setOpen ] = useState(false)
    const { show, closeModal } = props;


    function handleSubmit(e){
        e.preventDefault();
    }

    function handleSignUpButton(){
      closeModal();
      console.log(open)
      setOpen(!false)
      console.log(open)
    }

    useEffect( () => {
        console.log("works?")
    }, [open])

    //added so that the component doesn't get affected by parent css
    //and is being rendered from the "modal-root" DOM node from the index.html file
    return ReactDOM.createPortal(
      <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
        <div className={show ? "modal" : "hide"}>
          <button onClick={closeModal} id="close">X</button>
       
        <div className="login_form">
            <h1> Log in to Continue </h1>
            <form onSubmit={handleSubmit}>
                <input className="username" type='text' name='username' placeholder='Email Address' />
                <input className="password" type='password' name='password' placeholder='password' />
                <button className="login_button"> Sign In</button>
            </form>
        </div>
        <div className="login_demo">
            <h3 className="login_demo_pointer" type="submit">Demo Login</h3>
            </div>
        <hr />
        <div className="login_switch">Don't have an account. 
        <button className="signup_link" onClick={handleSignUpButton}>Sign Up</button>
        {open && <SignUpContent open={open} closeModal={closeModal} show={show} />} </div>
        </div>
      </>, document.getElementById("modal-root")
    );
}

export default LoginContent

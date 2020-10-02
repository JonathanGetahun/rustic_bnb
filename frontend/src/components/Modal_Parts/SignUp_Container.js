import React from 'react'
import ReactDOM from 'react-dom'
import './signUpContent.css'

function SignUpContent(props) {
    const { show, closeModal } = props;

    function handleSubmit(e){
        e.preventDefault();
    }

    //added so that the component doesn't get affected by parent css
    //and is being rendered from the "modal-root" DOM node from the index.html file
    return ReactDOM.createPortal(
      <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
        <div className={show ? "modalSignUp" : "hide"}>
          <button onClick={closeModal} id="close">X</button>
       
        <div className="login_form">
            <h1> Sign Up to Begin </h1>
            <form onSubmit={handleSubmit}>
                <input className="firstName" type='text' name='firstName' placeholder='First Name' />
                <input className="lastName" type='text' name='lastName' placeholder='Last Name' />
                <input className="email" type='email' name='email' placeholder="Email Address" />
                <input className="password" type='password' name="password" placeholder="password" />
                <button className="login_button_signup"> Sign Up</button>
            </form>
        </div>
        <hr />
        <div className="login_switch">Already Have an Account. Log In</div>
        </div>
      </>, document.getElementById("modal-root")
    );
}

export default SignUpContent

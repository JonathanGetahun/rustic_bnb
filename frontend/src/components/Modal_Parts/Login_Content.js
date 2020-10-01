import React from 'react'
import ReactDOM from 'react-dom'
import './loginContent.css'

function LoginContent(props) {

    const { show, closeModal } = props;

    //added so that the component doesn't get affected by parent css
    //and is being rendered from the "modal-root" DOM node from the index.html file
    return ReactDOM.createPortal(
      <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
        <div className={show ? "modal" : "hide"}>
          <button onClick={closeModal}>X</button>
          <h1>Modal heading</h1>
          <p>This is modal content</p>
        </div>
      </>, document.getElementById("modal-root")
    );
}

export default LoginContent

// import React, { useState } from 'react'
// import './Modal.css'
// import LoginContainer from './Modal_Parts/Login_Container'
// import LoginContent from './Modal_Parts/Login_Content'

// function Modal(props) {
//     const [show, setShow ] = useState(true);
//     const openModal = () => setShow(true);
//     const closeModal = () => setShow(false);

//     const { value } = props;

//     let component;
//     switch(value){
//         case 'login':
//             component = <LoginContent openModal={openModal} show={show} /> 
//             console.log("works")
//             break;
//         default:
//             return null;
//     }

//     return (
//         <div className="login">
//         {/* <h1> Create Login Modal</h1>
//         {!show && <button onClick={openModal}>Show modal</button>}
//         <LoginContent closeModal={closeModal} show={show} /> */}
//         {console.log(component)}
//         {component}
//         </div>

//     )
// }

// export default Modal

//a converter from class to functional component so I can open modal

import React, { useState, useEffect } from 'react'
import LoginContent from '../Modal_Parts/Login_Container'

function ViewLogin({open}) {

    const [showLogin, setLogin ] = useState(false);
    const [showSignUp, setSignUp] = useState(false)

    useEffect(() => {
        setLogin(open)
    }, [open])
    
    return (
        <div>
            <LoginContent open={showLogin} setLogin={setLogin} setSignUp={setSignUp} />
        </div>
    )
}

export default ViewLogin

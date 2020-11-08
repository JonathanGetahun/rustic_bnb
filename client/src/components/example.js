import React from 'react'
import ReviewModal from './Reviews.js/ReviewModal'
import { Button } from '@material-ui/core'

// import '../styling/Slider.css'

import GoogleMap from './GoogleMap'

import { loginUser } from '../services/userServices'

function Example() {
    
const handleLogin = async (e) => {
    e.preventDefault()
    await loginUser({
        email:"demo@gmail.com",
        password:"aaaaaa"
    })
}

    // useEffect(() => {
        //React doesnt want the entire useEffect function to be async,
        //you need to write your async function inside so it doesn't give you a warning
    //     async function fetchData(){
    //         listed = await listLocations().then(data => data.data)
    //         changeURL(url.concat(listed))
    //     }
    //     fetchData()
    // }, [])


    return (
        <div className="Slider-Container">
            {/* <button className="Slider-prev">Prev</button>
            <img src={url[0]} alt="JJ" height="250" widht="200"/>
            <button className="Slider-next">Next</button> */}
            {/* <Carousel>
                <img src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"} height="200" width="200"/>
                <img src={url[1]} height="200" width="200"/>
            </Carousel> */}
            {/* <GoogleMap /> */}
            <h1>hehe</h1>
            {ReviewModal()}
            {/* <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => handleLogin(e)}
          >
            Demo Login
          </Button> */}
        </div>
    )
}

export default Example

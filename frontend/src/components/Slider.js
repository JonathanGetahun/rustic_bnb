import React, {useState, useEffect} from 'react'
import { listLocation } from '../services/listingServices'
import '../styling/Slider.css'
import Carousel from 'nuka-carousel'



function Slider( {img}) {
    
    const [ url, changeURL ] = useState([])

    let listed;

    // useEffect(() => {
    //     //React doesnt want the entire useEffect function to be async,
    //     //you need to write your async function inside so it doesn't give you a warning
    //     async function fetchData(){
    //         listed = await listLocations().then(data => data.data)
    //         changeURL(url.concat(listed))
    //     }
    //     fetchData()
    // }, [])

    useEffect(() => {
        async function fetchData(){
            listed = await listLocation().then(data => data.data)
            changeURL(url.concat(listed))
        }
        fetchData()
    }, [])

    
    return (
        <div className="Slider-Container">
            {/* <button className="Slider-prev">Prev</button>
            <img src={url[0]} alt="JJ" height="250" widht="200"/>
            <button className="Slider-next">Next</button> */}


        {/*has pagination when scrolling through at the bottom*/}
            <Carousel>
                <img src={img[0]} height="250" width="440" alt='1'/>
                <img src={img[1]} height="250" width="440" alt='1'/>
                <img src={img[2]} height="250" width="440" alt='1'/>
                <img src={img[3]} height="250" width="440" alt='1'/>
                <img src={img[4]} height="250" width="440" alt='1'/>
            </Carousel>
        </div>
    )
}

export default Slider

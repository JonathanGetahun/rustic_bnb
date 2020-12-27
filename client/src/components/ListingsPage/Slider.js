import React, {useState, useEffect} from 'react'
import { listLocation } from '../../services/listingServices'
import '../../styling/Slider.css'
import Carousel from 'nuka-carousel'



function Slider( {img}) {
    
    const [ url, changeURL ] = useState([])

    let listed;


    useEffect(() => {
        async function fetchData(){
            // eslint-disable-next-line
            listed = await listLocation().then(data => data.data)
            changeURL(url.concat(listed))
        }
        fetchData()
    }, [])

    
    return (
        <div className="Slider-Container">


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

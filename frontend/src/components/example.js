import React from 'react'

// import '../styling/Slider.css'

import GoogleMap from './GoogleMap'



function Example() {
    


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
            <GoogleMap />
        </div>
    )
}

export default Example

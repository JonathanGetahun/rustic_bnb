import React, { useEffect, useRef, useState } from 'react'


  


export default function ViewMap({lat, lng}) {
    

    


    const ref = useRef(null)
    const [map, setMap] = useState(null)



    useEffect(() => {
        const onLoad = () => setMap(new window.google.maps.Map(ref.current, {
            zoom: 10,
            center: new window.google.maps.LatLng(lat,lng)}))
        if(!window.google){
            const script = document.createElement('script')
            script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAlBHUa-VwmusSueaeZay0Z0SIdveaqTHM'
            document.head.append(script)
            script.addEventListener('load', onLoad)
            return () => script.removeEventListener('load', onLoad)
            
            
        } else {
            onLoad()
            }  
            
    }, [lat, lng])

    if(map){
        
            
            const newLocation = new window.google.maps.LatLng(lat, lng)
             new window.google.maps.Marker({
              map,
              position: newLocation,
              title: "Book",
            })

          

       
          
    }    

 


    
    return (

        <div
            id="google-map-2"
            style={{width:'100%', height:'400px',}}
            ref={ref}
            />
    )

}

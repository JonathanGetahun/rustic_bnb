import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, updateDisplay } from '../actions/listing_actions'
  


export default function GoogleMap() {
    const dispatch = useDispatch()

    //added dispatch for eslint
    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])
    

   const originalList = useSelector(state => state.list)


    const ref = useRef(null)
    const [map, setMap] = useState(null)

    let markers = [];



    useEffect(() => {
        const onLoad = () => setMap(new window.google.maps.Map(ref.current, {
            zoom: 4,
            gestureHandling: 'greedy',
            center: new window.google.maps.LatLng(39.642567,-110.387054)}))
        if(!window.google){
            const script = document.createElement('script')
            script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAlBHUa-VwmusSueaeZay0Z0SIdveaqTHM'
            document.head.append(script)
            script.addEventListener('load', onLoad)
            return () => script.removeEventListener('load', onLoad)
            
            
        } else {
            onLoad()
            }  
           
    }, [])



    if(map){
        
        originalList.forEach((link, index) => {
            
            const newLocation = new window.google.maps.LatLng(link.locationTag[0].lat, link.locationTag[0].lng)
            var pinIcon = {
                url: `https://chart.googleapis.com/chart?chst=d_bubble_icon_text_small&chld=snack|bb|$${link.Price}|FFBB00|000000`
            };
            new window.google.maps.Marker({
              map,
              position: newLocation,
            //   label: `$${link.Price}`,
              icon: pinIcon,
              title: link.locationName,
            })
            // link.newLocation = newLocation
           
            markers.push(newLocation)
            
            // marker.addListener(`click`, (event)=> {
            //   event.preventDefault()
            // })
          })
          
        // USED FOR ADDING LATLNG LOCATION INTO LIST ARRAY STATE
        //   dispatch(updateLocation)
          
    }    


    
    
    useEffect(() => {
        let displayCheck = [];
        
        if (map) {
                
             if(markers){
                 new window.google.maps.event.addListener(map, 'bounds_changed',  function() {
                    let bounds = map.getBounds()
                    
                         markers.map( (marker) => {
                            if((bounds.contains(marker)) === false ){
                                displayCheck.push(false)
                            } else {
                                displayCheck.push(true)
                            }
                            
                            return displayCheck;
                        })
                       
                        dispatch(updateDisplay(displayCheck))
                        displayCheck=[]
                        
                
               
                 });
            
                    }
            
        }
        // console.log("after", displayCheck)
        // displayCheck=[]
        // eslint-disable-next-line
    }, [map])

 


    
    return (

        <div
            id="google-map"
            style={{width:'100%', height:'1026px',}}
            ref={ref}
            />
    )

}




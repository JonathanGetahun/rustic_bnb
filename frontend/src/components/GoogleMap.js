import React, { useEffect, useRef, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, updateLocation, updateDisplay } from '../actions/listing_actions'
  


export default function GoogleMap() {
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(fetchListings())
    }, [])
    
   const list = useSelector(state => state.list)
   const originalList = useSelector(state => state.list)


    const ref = useRef(null)
    const [map, setMap] = useState(null)

    let markers = [];
    // // const {list } = useContext(ShowList)
    // const { toggleList } = useContext(ToggleList)
    // const {toggleListVal} = useContext(ToggleList)
    // var myLatLng = 


    useEffect(() => {
        const onLoad = () => setMap(new window.google.maps.Map(ref.current, {
            zoom: 6,
            center: new window.google.maps.LatLng(40.642567,-120.387054)}))
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
            
            const newLocation = new window.google.maps.LatLng(link.locationTag.lat, link.locationTag.lng)
            const marker = new window.google.maps.Marker({
              map,
              position: newLocation,
              label: `${index+1}`,
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


    
    //adding another google api script will break this
    useEffect(() => {
        let displayCheck = [];
        
        if (map) {
                
             if(markers){
                 window.google.maps.event.addListener(map, 'bounds_changed',  function() {
                    let bounds = map.getBounds()
                
                    
                        console.log('markers', markers)
                         markers.map( (marker) => {
                            
                           console.log('entering', markers)
                            if((bounds.contains(marker)) === false ){
    
                                displayCheck.push(false)
                            } else {
                                displayCheck.push(true)
                            }
    
                            
                            
                        })
                        console.log('?',displayCheck)
                        dispatch(updateDisplay(displayCheck))
                        displayCheck=[]
                        
                
               
                 });
            
                    }
            
        }
        // console.log("after", displayCheck)
        // displayCheck=[]
        
    }, [map])

 


    
    return (

        <div
            id="google-map"
            style={{width:'100%', height:'1026px',}}
            ref={ref}
            />
    )

}




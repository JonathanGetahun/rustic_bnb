import React, { useEffect, useRef, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, updateLocation, updateDisplay } from '../actions/listing_actions'
  


export default function GoogleMap({ options, onMount, className, onMountProps}) {
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(fetchListings())
    }, [])
    
   const list = useSelector(state => state.list)


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
        list.forEach((link, index) => {
            let newLocation = new window.google.maps.LatLng(link.locationTag.lat, link.locationTag.lng)
            const marker = new window.google.maps.Marker({
              map,
              position: newLocation,
              label: `${index+1}`,
              title: link.locationName,
            })
            link.newLocation = newLocation
            
            markers.push(newLocation)
            
            marker.addListener(`click`, ()=> {
              window.location.href = link.url
            })
          })

          dispatch(updateLocation)
          
    }    


    //Coolest thing is google has configured map to update based off of viewing bounds, I
    //can use effect hook here to conditionally control what renders
    
    useEffect(() => {

        
        if (map) {

             
                 window.google.maps.event.addListener(map, 'bounds_changed',  function() {
                    let bounds = map.getBounds()

                    
                     list.forEach( (marker, i) => {
                        
                         
                        if (marker.display === true && (bounds.contains(marker.newLocation)) === false){
                            dispatch(updateDisplay(marker))
                            
                            
                        } else if(marker.display === false && (bounds.contains(marker.newLocation) === true)) {
                                dispatch(updateDisplay(marker))
                        }

                        console.log("noting", i)
                        
                    })
                    
             });
            

            
        }

    }, [map])

 


    
    return (

        <div
            id="google-map"
            style={{width:'100%', height:'1026px',}}
            ref={ref}
            />
    )

}




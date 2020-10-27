import React, { useEffect, useRef, useState, useContext } from 'react'
import { ShowList } from '../context/ShowList'
import { ToggleList } from '../context/ToggleList'

  


export default function GoogleMap({ options, onMount, className, onMountProps}) {

    const ref = useRef(null)
    const [map, setMap] = useState(null)

    let markers = [];
    const {list } = useContext(ShowList)
    const { toggleList } = useContext(ToggleList)
    const {toggleListVal} = useContext(ToggleList)
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
            markers.push(newLocation)
            marker.addListener(`click`, ()=> {
              window.location.href = link.url
            })
          })

          
    }    


    //Coolest thing is google has configured map to update based off of viewing bounds, I
    //can use effect hook here to conditionally control what renders
    
    useEffect(() => {

        if (map) {

             function letsGo() {
                 window.google.maps.event.addListener(map, 'bounds_changed',  function() {
                    let bounds = map.getBounds()

                    let i = 0;
                     markers.forEach(async (marker) => {
                        
                         
                        if ((bounds.contains(marker)) === false){
                            console.log("hello", marker)
                            await toggleListVal(i)
                        } else {
                            await toggleListVal(i)
                        }
                        i++;
                    })
                    console.log('after',toggleList)
             });
            }

            letsGo()
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




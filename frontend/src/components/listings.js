import React, { useContext, useEffect } from 'react'
import SearchResults from './SearchResults'
import '../styling/searchResults.css'
import '../styling/searchPage.css'
import { ShowList } from '../context/ShowList'
import { ToggleList } from '../context/ToggleList'




 function Listings() {

    // const [url, changeURL ] = useState([]);
    
    // let listed; 
    

    // useEffect(() => {
    //     async function fetchData(){
    //         listed = await listLocation().then(data => data.data)
            
    //         changeURL(url.concat(listed))
    //     }
    //     fetchData()
        
    // }, [])

    // console.log("this",listOfListings)

    const { list } = useContext(ShowList)
    const { toggleList } = useContext(ToggleList)
    let placeList = [];
    useEffect(() => {

        async function workDisplay(){
            placeList.concat(await list.map((data,i) => {
       
                return <SearchResults
                           key={i}
                           img={data.images}
                           location="Private room in center of London"
                           title={data.locationName}
                           description={data.amenities}
                           star={data.Rating}
                           price={`$${data.Price}`}
                           show={toggleList[i]}
                       />
            }))
        }
        workDisplay()
    }, [toggleList])



    return (
        <div>
            {placeList}
        </div>
    )
}

export default Listings

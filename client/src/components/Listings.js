import React, { useContext, useEffect } from 'react'
import SearchResults from './SearchResults'
import '../styling/searchResults.css'
import '../styling/searchPage.css'

import { fetchListings } from '../actions/listing_actions'
import { useDispatch, useSelector } from 'react-redux'


  function Listings(props) {

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

    // const { list } = useContext(ShowList)
    // const { toggleList } = useContext(ToggleList)
    
const dispatch = useDispatch()

    
   
    useEffect(() => {
        dispatch(fetchListings())
    }, [])
    
    let placeList;
   const list = useSelector(state => state.list)

   console.log(list)
    console.log("props:",list)
    if(!list) return <div>loading..</div> 
    else {
     placeList = list.map((data,i) => {

        return <SearchResults
                   key={i}
                   img={data.images}
                   location={data.location}
                   title={data.locationName}
                   amenities={data.amenities}
                   description={data.description}
                   star={data.Rating}
                   price={`$${data.Price}`}
                   id={data.id}
                   host={data.host}
                   amenities={data.amenities}
                   locationTag={data.locationTag}
                //    show={data.display}
               />
    })
}

        

        




    return (
        <div>
            { placeList ? placeList : `Comeback later`}
        </div>
    )
}



export default Listings

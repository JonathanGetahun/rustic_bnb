import { RECEIVE_LISTINGS, UPDATE_LOCATION, UPDATE_DISPLAY} from './types'
import * as ListingServices from '../services/listingServices'
import store from '../reduxStore'


//action creator broken up for ease of readability, goes into dispatch f(x) below
//which will dispatch the listings to the Reducer

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    payload: listings
})

export const updateLocation = (newLocation) => ({
    type: UPDATE_LOCATION,
    payload: newLocation
})

 const receiveDisplay = (marker) =>  ({
    type: UPDATE_DISPLAY,
    payload: marker
})

//able to have a second return functino that takes in the dispatch function as a parameter
//because of the redux thunk middleware 
export const fetchListings = () => dispatch => (
    ListingServices.listLocation().then(listings => dispatch(receiveListings(listings)))
)

export const updateDisplay =  (display) => async (dispatch) => {
    const originalList = store.getState().originalList
    console.log('OG',originalList)
    console.log('sent-display', display)
    let newLocations = await originalList.filter((og, i) => {
        if(display[i]){
            console.log('reacghing',display[i])
            return og
        }
    })
    console.log('newOG', newLocations)
    dispatch(receiveDisplay(newLocations))
    
}


// export const fetchListings = () => {
// return function (dispatch) {
//     ListingServices.listLocation().then(list => 
//         list.forEach(listing => {
//             dispatch(receiveListings(listing))
//     }))}}
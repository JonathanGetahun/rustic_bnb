import { RECEIVE_LISTINGS, UPDATE_LOCATION, UPDATE_DISPLAY} from './types'
import * as ListingServices from '../services/listingServices'
import { useDispatch } from 'react-redux'
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

export const updateDisplay = (marker) =>  ({
    type: UPDATE_DISPLAY,
    payload: marker
})

export const fetchListings = () => dispatch => (
    ListingServices.listLocation().then(listings => dispatch(receiveListings(listings)))
)



// export const fetchListings = () => {
// return function (dispatch) {
//     ListingServices.listLocation().then(list => 
//         list.forEach(listing => {
//             dispatch(receiveListings(listing))
//     }))}}
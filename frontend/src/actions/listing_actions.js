import { RECEIVE_LISTINGS } from './types'
import * as ListingServices from '../services/listingServices'

//action creator broken up for ease of readability, goes into dispatch f(x) below
//which will dispatch the listings to the Reducer

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    payload: listings
})


export const fetchListings = (data) => dispatch => (
    ListingServices.listLocation(data).then(listings => dispatch(receiveListings(listings)))
)
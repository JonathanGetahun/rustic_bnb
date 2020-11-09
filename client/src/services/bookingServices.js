import axios from 'axios';


export const createBooking = (bookingData) => {
    const response = axios.post('/customers', bookingData);
    console.log("NEW BOOKING:",response)
    return response
}

export const getBookings = (id) => {
    const response = axios.get(`/customers/${id}`)
    return response
}

export const deleteBooking = (email, bookingObjId) => {
    console.log("Parameters are both strings and received properly"
        , email, bookingObjId)
    // const response =  axios.delete(`/users`, 
    //     {userId: email, bookingId: bookingObjId})
    let url = '/customers';
    let data = {userId: email,
        bookingId: bookingObjId}

    const response = axios.request({
        method: 'delete',
        url,
        data
    })
    return response
}

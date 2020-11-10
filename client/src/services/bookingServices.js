import axios from 'axios';


export const createBooking = (bookingData) => {
    const response = axios.post('/api/consumers', bookingData);
    console.log("NEW BOOKING:",response)
    return response
}

export const getBookings = async (id) => {
    const response = await axios.get(`/api/consumers/${id}`)
    return response
}

export const deleteBooking = (email, bookingObjId) => {
    // const response =  axios.delete(`/users`, 
    //     {userId: email, bookingId: bookingObjId})
    let url = '/api/consumers';
    let data = {userId: email,
        bookingId: bookingObjId}

    const response = axios.request({
        method: 'delete',
        url,
        data
    })
    return response
}

import axios from 'axios';


export const createBooking = (bookingData) => {
    const response = axios.post('/consumers', bookingData);
    console.log("NEW BOOKING:",response)
    return response
}

export const getBookings = async (id) => {
    const response = await axios.get(`/consumers/${id}`)
    return response
}

export const deleteBooking = (email, bookingObjId) => {
    // const response =  axios.delete(`/users`, 
    //     {userId: email, bookingId: bookingObjId})
    let url = '/consumers';
    let data = {userId: email,
        bookingId: bookingObjId}

    const response = axios.request({
        method: 'delete',
        url,
        data
    })
    return response
}

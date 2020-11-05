import axios from 'axios';


export const createBooking = (bookingData) => {
    const response = axios.post('/users', bookingData);
    return response
}

export const getBookings = (id) => {
    const response = axios.get(`/users/${id}`)
    return response
}


const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    images: {
        type: Array
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }, 
    location: {
        type:String
    },
    locationName: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    id: Number
})

module.exports = mongoose.model('Booking', bookingSchema)
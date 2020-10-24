const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const listingsSchema = new mongoose.Schema({
    locationName: {
        type: String
    }, 
    images:[String],
    amenities: {
        type:Array
    }, 
    locationTag:[Number],
    price: Number,
    rating: Number,
    favorited: Boolean,
    book: Boolean
})

module.exports = mongoose.model('listing', listingsSchema)
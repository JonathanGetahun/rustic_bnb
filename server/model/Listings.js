const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const listingsSchema = new mongoose.Schema({
    locationName: {
        type: String
    }, 
    images: {
        type:Array
    },
    amenities: {
        type:Array
    }, 
    locationTag:Array,
    price: Number,
    rating: Number,
    favorited: Boolean,
    book: Boolean,
    id:Number,
    host:String,
    location:String,
    display:Boolean, 
   
            accuracy: Array,
            communication: Array,
            cleanliness: Array,
            locationReview: Array,
            checkIn: Array,
            value: Array,
        
    reviewText: [
        {
            Date: Date,
            text: String
        }
    ]
})

module.exports = mongoose.model('listing', listingsSchema)
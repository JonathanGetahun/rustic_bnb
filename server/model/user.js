const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type:String,
        trim: true,
        unique: true
    },
    passwordHash: String, 
    bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}],
    id: Number
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema)
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
    bookings: [{type: mongoose.Schema.Types.Mixed, ref: 'Booking'}],
    id: Number
})
//Use mixed because mongoose will treat each value of array like its own schema,
//so you will only get the ObjectId if you use that.

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
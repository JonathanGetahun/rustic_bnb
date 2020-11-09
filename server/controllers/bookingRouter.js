const bookingRouter = require ('express').Router();
const Bookings = require('../model/bookings');
const User = require('../model/user');
const mongoose = require('mongoose')


bookingRouter.get('/:id', async(req, res) => {
    body=req.params;
    const user = await User.findById(body.id, function (err, user) {
        if (err) {
            res.send("user & booking not found", err)
        }
        console.log("made it here", user)
        res.json(user)
    })

    console.log("user? ", user)
})


bookingRouter.post('/', async (req, res) => {
    body = req.body;
 
    const user = await User.findOne({email: body.email}, function(err, user){
        if (err) {
            res.send('No user with that email', err.message)
        }

        return user
    })

    const booking = await new Bookings({
        images: body.images,
        startDate: body.startDate,
        endDate: body.endDate,
        location: body.location,
        locationName: body.locationName,
        price: body.price,
        user: user, 
        id: body.id
    }).save()
    

    //Has to be updated not on the instance but on the model itself
    await User.findOneAndUpdate({email: body.email}, {
        $push: {bookings: booking}
    }).populate("bookings")

    res.json(booking)
})

bookingRouter.delete('/', async(req, res) => {
    body = req.body

    console.log("body will not work", body)
    var id = mongoose.Types.ObjectId(body.bookingId)
    const deleted = await User.updateOne({email: body.userId},
        {$pull: {'bookings': {'_id':id}}}, {safe: true, multi: true})

    res.status(200).json(deleted)
})


module.exports = bookingRouter
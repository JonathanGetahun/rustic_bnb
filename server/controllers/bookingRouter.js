const bookingRouter = require ('express').Router();
const Bookings = require('../model/bookings');
const User = require('../model/user');



bookingRouter.get('/:id', async(req, res) => {
    body=req.params;
    console.log("this is ", body)
    const user = await User.findById(body.id, function (err, user) {
        if (err) {
            console.log("didnt end up working")
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
        user: user
    }).save()
    console.log(booking)

    //Has to be updated not on the instance but on the model itself
    await User.findOneAndUpdate({email: body.email}, {
        $push: {bookings: booking}
    }).populate("bookings")

    res.json(booking)
})










module.exports = bookingRouter
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../model/user')
const { response } = require('express')

loginRouter.post('/', async(request, response) => {
    const body = request.body
    console.log("body recieved", body)
    const user = await User.findOne({email: body.email})
    console.log("user", user)
    console.log("user pass: ", user.passwordHash)
    const passwordCorrect = user === null ? false 
        : await bcrypt.compare(body.password, user.passwordHash)

    if(!(user && passwordCorrect)) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    // use this information for creating the token, will go in jwt payload
    const userForToken = {
        email: user.email,
        id: user._id
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    // response.status(200).send({token, email: user.email, firstName: user.firstName, lastName: user.lastName})
    response.status(200).send({email: user.email, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        id: user._id,
        bookings: user.bookings})
})

module.exports = loginRouter
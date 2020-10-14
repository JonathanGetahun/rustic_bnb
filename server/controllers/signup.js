const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
const User = require('../model/user')

signupRouter.post('/', async(request, response) => {
    const body = request.body

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
})

signupRouter.get('/', async(request, response) => {
    const users = await User.find({})
    response.json(users)
})

module.exports = signupRouter
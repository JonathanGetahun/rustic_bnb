const listRouter = require('express').Router()
const { response } = require('express');
const Listings = require('../model/Listings')

listRouter.post('/', async (req,res) => {
    const body = req.body;

    const listing = new Listings({
        locationName: body.locationName
    })

    const list = await listing.save()

    res.json(list)
})

listRouter.get('/', async (req, res) => {

    const result = await Listings.find({})
    res.send(result)
})
module.exports = listRouter
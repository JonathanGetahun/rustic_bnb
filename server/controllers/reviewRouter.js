const mongoose = require('mongoose');
const Listings = require('../model/Listings');
const reviewRouter = require('express').Router()


reviewRouter.post('/', async (req,res) => {

    body = req.body;
    const result = await Listings.findOneAndUpdate({id: body.id}, {
        $push: {accuracy: body.accuracy,
            communication: body.communication,
            cleanliness: body.cleanliness,
            locationReview: body.locationReview,
            checkIn: body.checkIn,
            value: body.value,
            reviewText: {
                Date: body.reviewDate,
                text: body.text
            }},
        // $push: {communication: body.communication},
        // $push: {cleanliness: body.cleanliness},
        // $push: {locationReview: body.location},
        // $push: {checkIn: body.checkIn},
        // $push: {value: body.value},
        // $push: {reviewText: {
        //     Date: body.reviewDate,
        //     text: body.text
        // }}
    }).populate("reviewText")

    res.json(result)
})


module.exports = reviewRouter

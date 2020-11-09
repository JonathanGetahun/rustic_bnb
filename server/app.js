require('dotenv').config()
const express = require('express');
require('express-async-errors')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const signupRouter = require('./controllers/signupRouter')
const loginRouter = require('./controllers/loginRouter')
const s3Router = require('./controllers/s3Router')
const listRouter = require('./controllers/listingRouter')
const bookingRouter = require('./controllers/bookingRouter')
const reviewRouter = require('./controllers/reviewRouter')
const path = require('path')

const MONGO_URI = process.env.MONGODB_URI
if (app.get('env') === 'production') {
    mongoose.connect(MONGODB_URI
        , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log("connected to MongoDB")).catch(err => console.error(err))
} else {
    mongoose.connect(MONGO_URI
        , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log("connected to MongoDB")).catch(err => console.error(err))
}



app.use(cors())
app.use(express.json())

app.use('/goFindList', listRouter)
app.use('/customers', bookingRouter)
app.use('/home', s3Router)
app.use(express.static(path.join(__dirname, 'build')))
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.use('/', signupRouter)
app.use('/login', loginRouter)



app.use('/review', reviewRouter)

if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
}



module.exports = app
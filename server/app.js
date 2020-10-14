require('dotenv').config()
const express = require('express');
require('express-async-errors')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const signupRouter = require('./controllers/signup')
const loginRouter = require('./controllers/login')

const MONGO_URI = process.env.MONGODB_URI
mongoose.connect(MONGO_URI
    , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => console.log("connected to MongoDB")).catch(err => console.error(err))

app.use(cors())
app.use(express.json())
if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
}
app.use('/', signupRouter)
app.use('/login', loginRouter)


module.exports = app
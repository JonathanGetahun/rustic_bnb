const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')



app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://jonathangetahun:jonathangetahun@cluster0.rgzaa.mongodb.net/<dbname>?retryWrites=true&w=majority'
, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("connected to MongoDB")).catch(err => console.error(err))


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Server is good to go')
})
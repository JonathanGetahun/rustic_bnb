const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("nihao")
})


app.listen(4000, () => {
    console.log('Server is good to go')
})
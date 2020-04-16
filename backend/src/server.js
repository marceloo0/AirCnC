const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://marcell01:marcell01@cluster0-bogm6.mongodb.net/AirCnC?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)
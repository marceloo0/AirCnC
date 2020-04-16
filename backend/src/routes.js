const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')

const UserController = require('./Controllers/UserController')
const SpotController = require('./Controllers/SpotController')
const DashboardController = require('./Controllers/DashboardController')
const BookingController = require('./Controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.post('/spots', upload.single('thumbnail') , SpotController.store)
routes.get('/spots', SpotController.index)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/booking', BookingController.store)

module.exports = routes
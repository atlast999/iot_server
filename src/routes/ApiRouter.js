const express = require('express')
const router = express.Router()

const apiController = require('../controllers/ApiController')

//GET sensor values
router.get('/sensors', apiController.sensorValues)

//POST controll device
router.post('/devices', apiController.controllDevices)

module.exports = router
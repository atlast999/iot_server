const { response } = require('express')
const Sensor = require('../data/models/Sensor')
const mqttClient = require('../data/MqttClient')
class ApiController {

    //GET sensor values
    sensorValues(req, res, next){
        Sensor.find().limit(20).sort({ _id: -1 })
        .then(sensors => {
            res.json(sensors)
        })
        .catch(next)
        // Sensor.deleteMany({temperature: '88'})
        // .then(n => {
        //     res.json({res : n})
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    //POST controll device
    controllDevices(req, res, next){
        const request = req.body
        const response = mqttClient.sendCommand(request)
        res.json({
            status: response
        })
    }

}

module.exports = new ApiController()
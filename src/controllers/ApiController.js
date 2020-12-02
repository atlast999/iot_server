const Sensor = require('../data/models/Sensor')
const mqttClient = require('../data/MqttClient')
class ApiController {

    //GET sensor values
    sensorValues(req, res, next){
        console.log(req.body)
        Sensor.find()
        .then(sensors => {
            res.json(sensors)
        })
        .catch(next)
    }

    //POST controll device
    controllDevices(req, res, next){
        const request = req.body
        mqttClient.sendCommand(request)
        res.json({
            code: 200,
            status: request.command
        })
    }

}

module.exports = new ApiController()
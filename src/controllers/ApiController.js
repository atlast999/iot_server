const Sensor = require('../data/models/Sensor')
const mqttClient = require('../data/MqttClient')
class ApiController {

    //GET sensor values
    sensorValues(res, next){
        Sensor.find().limit(20).sort({ _id: -1 })
        .then(sensors => {
            res.json(sensors)
        })
        .catch(next)
        // Sensor.deleteMany({__v : 0})
        // .then(n => {
        //     res.json({res : n})
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    //GET clear sensors data
    clearData(res){
        Sensor.deleteMany({__v : 0})
        .then(n => {
            res.json({res : n})
        })
        .catch(err => {
            console.log(err)
        })
    }

    //POST controll device
    controllDevices(req, res){
        const request = req.body
        const response = mqttClient.sendCommand(request)
        res.json({
            status: response
        })
    }
    
    //face stuff
    
    // recognise(req, res, next){
    //     var file = req.file
    //     let fileData = fs.createReadStream(file.path)
    //     requestPromise({
    //         method: 'POST',
    //         uri: 'http://localhost:8000/api/recognite/',
    //         formData: {
    //           file: fileData
    //         }
    //       }).then(response => {
    //         res.json(JSON.parse(response))
    //       }).catch(err => {
    //         console.error(err)
    //       })
    // }

    // allUsers(req, res, next){
    //     fetcher.get('http://localhost:8000/api/all_users/')
    //     .then(response => {
    //         res.json(response.data)
    //     })
    //     .catch(next)
    // }

    // upload(req, res, next){
    //     var file = req.file
    //     let fileData = fs.createReadStream(file.path)
    //     requestPromise({
    //         method: 'POST',
    //         uri: 'http://localhost:8000/api/upload/',
    //         formData: {
    //           file: fileData,
    //           name: req.body.name,
    //           id : req.body.id,
    //         }
    //       }).then(response => {
    //         res.json(JSON.parse(response))
    //       }).catch(next)
    // }

    // delete(req, res, next){
    //     fetcher.post('http://localhost:8000/api/delete/', req.body)
    //     .then(response => {
    //         res.json(response.data)
    //     })
    //     .catch(next)
    // }

}

module.exports = new ApiController()
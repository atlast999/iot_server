const mqtt = require('mqtt')
const Sensor = require('./models/Sensor')
// var mqttClient = mqttClient = mqtt.connect('mqtt://broker.emqx.io', {port: 1883})
var mqttClient = mqtt.connect('mqtt://localhost', {port: 1883})
//docker
// var mqttClient = mqtt.connect('mqtt://host.docker.internal', {port: 1883})
const sensorTopic = 'iot20201/group2/sensors'
const deviceTopic = 'iot20201/group2/devices'

async function setup(){
    
    mqttClient.subscribe(sensorTopic, function(err){
        if(!err){
            console.log('Mqtt client subscribed topics: ' + sensorTopic)
        } else {
            console.log('Mqtt error occurs')
        }
    })

    mqttClient.on('message', function(topic, payload){
        if(topic == sensorTopic){
            try{
                const message = JSON.parse(payload.toString())
                const sensor = new Sensor({
                    temperature: message.temperature,
                    humidity: message.humidity
                })
                if(sensor.humidity == '21' || sensor.humidity == '1.00'){
                    return
                }
                sensor.save()
                .then(sensor => {
                    console.log(sensor)
                })
                .catch(err => {
                    console.log(err)
                })
            }
            catch(err){
                console.log(err)
            }
            
        }
    })
}

function sendCommand(request){
    var command = 'on'
    var response = '1'
    if(request.command == '0'){
        command = 'off'
        response = '0'
    }
    mqttClient.publish(deviceTopic, command)
    return response
}

module.exports = {setup, sendCommand}

// const   sensorTopic = 'iot20201/group2/sensors'
// const   deviceTopic = 'iot20201/group2/devices'
// var a=  {
//             temperature: "21",
//             humidity: "79",
//         }
// var b=  {
//             command: "0"
//         }
        
const mqtt = require('mqtt')
const Sensor = require('./models/Sensor')
var mqttClient = mqttClient = mqtt.connect('mqtt://broker.emqx.io', {port: 1883})

const sensorTopic = 'iot20201/group2/sensors'
const deviceTopic = 'iot20201/group2/devices'

async function setup(){
    
    mqttClient.subscribe(sensorTopic, function(err){
        if(!err){
            console.log('Mqtt client subscribed topics')
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
    if(request.command == '0'){
        command = 'off'
    }
    mqttClient.publish(deviceTopic, command)
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
        
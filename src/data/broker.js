const mosca = require('mosca')

const broker = new mosca.Server({port: 1883})

function setup(){
  broker.on('clientConnected', function(client) {
    console.log('client connected: ', client.id)
  })
  
  // fired when a message is received
  broker.on('published', function(packet, client) {
    console.log('Published: ', packet.topic)
  })
  
  broker.on('ready', function(){
    console.log('broker ready')
  })
}

module.exports = {setup}


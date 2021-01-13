const mongoose = require('mongoose')
const mqttClient = require('./MqttClient')

// const uri = "mongodb+srv://hoan999:123hoan123@cluster0.px8as.mongodb.net/testdb?retryWrites=true&w=majority"
const uri = "mongodb://127.0.0.1:27017/testdb"
async function connect(app){
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database is connected successfully')
        //connect successfully -> start server
        app.listen(3000, () => console.log("Server is listening"))

        //setup mqtt broker && client
        mqttClient.setup()

    } catch(error){
        console.log('Database connection error!! ' + error)
    }
}

// mqttBroker.setup(mqttClient)

module.exports = {connect}

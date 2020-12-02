const mongoose = require('mongoose')
const mqttClient = require('./MqttClient')

const uri = "mongodb+srv://hoan999:123hoan123@cluster0.px8as.mongodb.net/testdb?retryWrites=true&w=majority"
async function connect(app){
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database is connected successfully')
        //connect successfully -> start server
        app.listen(3000, () => console.log("Server is listening"))

        //setup mqtt client
        mqttClient.setup()

    } catch(error){
        console.log('Database connection error!! ' + error)
    }
}

module.exports = {connect}

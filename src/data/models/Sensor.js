const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Sensor = new Schema({
    temperature: String,
    humidity: String,
}, {
    timestamps: true,
})
module.exports = mongoose.model('sensors', Sensor)
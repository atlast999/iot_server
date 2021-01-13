const express = require('express')
const router = express.Router()

const apiController = require('../controllers/ApiController')

//GET clear data
router.get('/clear', apiController.clearData)

//GET sensor values
router.get('/sensors', apiController.sensorValues)

//POST controll device
router.post('/devices', apiController.controllDevices)

//face stuff

const multer = require('multer')
const path = require('path')
const fileUpload = multer({
    dest : 'tmp/',
    storage : multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, path.join('c:/Users/Thanh Hoan Nguyen/Desktop/GitSpace/nodeServer/tmp/'))
        },
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    })
})

//GET all users
router.get('/all_users', apiController.allUsers)

router.post('/upload', fileUpload.single('file'), apiController.upload)

router.post('/recognite', fileUpload.single('file'), apiController.recognise)

router.post('/delete', apiController.delete)

module.exports = router
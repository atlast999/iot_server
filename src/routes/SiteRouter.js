const express = require('express')
const router = express.Router()
const siteController = require('./../controllers/SiteController')

//GET - home page
router.get('/home', siteController.homePage)

module.exports = router
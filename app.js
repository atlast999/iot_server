const express = require('express')
const database = require('./src/data/Database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//passport
const passport = require('./src/passport/Passport')
app.use(passport.initialize())

//routes
const userRouter = require('./src/routes/UserRouter')
app.use('/user', userRouter)

const apiRouter = require('./src/routes/ApiRouter')
app.use('/api', apiRouter)

database.connect(app)


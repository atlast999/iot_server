const express = require('express')
const database = require('./src/data/Database')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//web ui
const exhbs = require('express-handlebars')
app.engine('handlebars', exhbs({
    helpers : {
        addOne: (n) => n + 1,
    }
}))
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'handlebars')


//passport
const passport = require('./src/passport/Passport')
app.use(passport.initialize())

//routes
const userRouter = require('./src/routes/UserRouter')
app.use('/user', userRouter)

const apiRouter = require('./src/routes/ApiRouter')
app.use('/api', apiRouter)

const siteRouter = require('./src/routes/SiteRouter')
app.use('/', siteRouter)

database.connect(app)


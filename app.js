const config = require('./config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`

mongoose 
  .connect(mongoUrl, {})
  .then(() => {
    console.log('MongoDB jakoś połączone')
  })
  .catch((err) => {
    throw err 
  })

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res, next) => {
  
  res.redirect('/events')
} )

const eventsRoutes = require('./app/routers/EventsRoutes')()
app.use('/events', eventsRoutes)

app.listen(config.app.port, () => {
  console.log('Express server is up! Być może ale info nie 100%')
})

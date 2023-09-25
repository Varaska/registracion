const express = require('express')
const router = express.Router()
const EventController = require('../controllers/EventsController')

module.exports = () => {

  //GET /events
  router.get('/', EventController.index )
  router.get('/bla', (req, res, next) => {
    console.log('działa')
  } )
  
  //POST (create) /events/add
  router.post('/add', EventController.create )

  //DELETE /events/delete/:id
  router.delete('/delete/:id', EventController.delete )

  return router
}

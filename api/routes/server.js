const express = require('express')
const cors = require('cors')
const mongoConnect = require('../mongoConnect').mongoConnect

const app = express()

// async function startUp() {
//   // make sure we can connect to external services before starting the server
//   await mongoConnect(server)
// }

// startUp()

server()

function server() {
  // Health check
  app.use(function (req, res, next) {
    if (req.originalUrl === '/') {
      res.sendStatus(200)
    } else {
      next()
    }
  })

  app.use(cors())

  app.use('/appointments', require('../controllers/appointments'))
  app.use('/slots', require('../controllers/slots'))

  const port = process.env.PORT || 3001

  app.listen(port)

  console.log(`Server listening on port ${port}`)
}

module.exports = app

const mongoose = require('mongoose')

exports.mongoConnect = async function (cb) {
  const mongo = `mongodb+srv://stepbro31@gmail.com:Pbdb3370!@cluster0-q0jbl.mongodb.net/appointments`
  let intervalTimer

  // check elasticsearch is running
  async function ping() {
    try {
      console.log(`checking ${mongo}`)

      if (intervalTimer) {
        clearInterval(intervalTimer)
      }

      await mongoose.connect(`${mongo}?retryWrites=true`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      console.log(`connected to ${mongo}`)

      cb()
    } catch (e) {
      console.log(`error connecting to ${mongo}`)
      intervalTimer = setInterval(() => {
        ping()
      }, 2000)
    }
  }

  ping()
}

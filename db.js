const mongoose = require('mongoose')
require('dotenv').config()
const mongoConnection = async () => {
// Connection to mongodb from mongoose
  const MONGO_URL = process.env.MONGO_URI
  try {
    await mongoose.connect(MONGO_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB is connected')
  } catch (err) {
    console.log(err)
  }
}

mongoConnection()

module.exports = mongoConnection

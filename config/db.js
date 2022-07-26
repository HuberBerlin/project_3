const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.trap.bold.green.bgBlack)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB

import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/chatroom'

mongoose.connect(mongoUrl, { useMongoClient: true })
  .then(() => console.log('Connected to database'))

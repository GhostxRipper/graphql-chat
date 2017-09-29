import mongoose from 'mongoose'

const { Schema } = mongoose

const schema = new Schema({
  title: String,
  users: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message', default: [] }],
})

export default mongoose.model('Chatroom', schema)

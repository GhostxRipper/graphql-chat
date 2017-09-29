import mongoose from 'mongoose'
import User from './User'
import Chatroom from './Chatroom'

const { Schema } = mongoose

const schema = new Schema({
  text: String,
  createdAt: { type: Date },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  chatroom: { type: Schema.Types.ObjectId, ref: 'Chatroom' }
})

schema.post('save', ({ _id, user, chatroom }, next) => {
  if (user) {
    User.findOne({ _id: user })
      .exec()
      .then(doc => {
        if (!doc.messages.includes(_id)) doc.messages.push(_id)
        return doc.save()
      }).catch(err => console.error(err))
  }
  if (chatroom) {
    Chatroom.findOne({ _id: chatroom })
      .exec()
      .then(doc => {
        if (!doc.messages.includes(_id)) doc.messages.push(_id)
        return doc.save()
      }).catch(err => console.error(err))
  }
  next()
})

export default mongoose.model('Message', schema)

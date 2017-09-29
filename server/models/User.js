import mongoose from 'mongoose'

import Chatroom from './Chatroom'

const { Schema } = mongoose

const schema = new Schema({
  displayName: String,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message', default: [] }],
  chatroom: { type: Schema.Types.ObjectId, ref: 'Chatroom' }
})

schema.post('save', ({ _id, chatroom }, next) => {
  if (chatroom) {
    Chatroom.findById(chatroom)
      .exec()
      .then(doc => {
        if (!doc.users.includes(_id)) doc.users.push(_id)
        return doc.save()
      }).catch(err => console.error(err))
  }

  next()
})

export default mongoose.model('User', schema)

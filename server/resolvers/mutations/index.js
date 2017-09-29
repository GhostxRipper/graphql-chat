import { Message, Chatroom, User } from '../../models'
import { pubsub } from '../../subscriptions'

export const addMessage = (obj, args, context) =>
  Message.create({
    text: args.text,
    user: args.userId,
    chatroom: args.chatroomId,
    createdAt: Date.now(),
  })
    .then(message => {
      pubsub.publish('messageAdded', { messageAdded: message })
      return message
    })
    .catch(e => {
      console.error(e)
      throw e
    })

export const addChatroom = (obj, args, context) =>
  Chatroom.create({
    title: args.title,
  })
    .catch(e => {
      console.error(e)
      throw e
    })

export const addUser = (obj, args, context) =>
  User.create({
    displayName: args.displayName,
    chatroom: args.chatroomId,
  })

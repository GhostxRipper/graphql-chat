import { Chatroom, Message, User } from '../../models'

export const chatrooms = (obj, args, context) => Chatroom.find({})

export const chatroom = (obj, args, context) => Chatroom.findById(args.id)

export const users = (obj, args, context) =>
  'chatroomId' in args
    ? User.find({ chatroom: args.chatroomId })
    : User.find({})

export const user = (obj, args, context) => User.findbyId(args.id).exec()

export const messages = (obj, args, context) =>
  'chatroomId' in args
    ? Message.find({ chatroom: args.chatroomId })
    : Message.find({})

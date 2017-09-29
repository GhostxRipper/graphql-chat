import { Message, User } from '../models'

export const ChatroomResolve = {
	users(obj) {
		return User.find({
			chatroom: obj._id
		}).exec()
	},
	messages(obj) {
		return Message.find({
			chatroom: obj._id
		}).sort({ createdAt: -1 })
	}
}

export const MessageResolve = {
	user(obj) {
		return User.findById(obj.user)
	}
}

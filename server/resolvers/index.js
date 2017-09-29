import { chatrooms, chatroom, users, user, messages } from './query'
import { addMessage, addChatroom, addUser } from './mutations'
import { messageAdded } from './subscriptions'
import { MessageResolve, ChatroomResolve } from './associations'

export default {
	Query: {
		chatrooms,
		chatroom,
		users,
		user,
		messages,
	},
	Chatroom: ChatroomResolve,
	Message: MessageResolve,
	Mutation: {
		addMessage,
		addChatroom,
		addUser,
	},
	Subscription: {
		messageAdded,
	}
}

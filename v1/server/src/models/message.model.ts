import { Document, Schema, model } from 'mongoose';

interface Message extends Document {
	name: string;
	email: string;
	subject: string;
	message: string;
	created: Date;
}

const MessageSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
		required: true,
		default: Date.now(),
	},
});

const Messages = model<Message>('Messages', MessageSchema);

export default Messages;

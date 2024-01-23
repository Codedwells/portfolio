import { Document, Schema, model } from 'mongoose';

interface AdminDoc extends Document {
	email: string;
	password: string;
}

const AdminSchema: Schema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const Admin = model<AdminDoc>('Admin', AdminSchema);

export default Admin;

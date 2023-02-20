import mongoose from 'mongoose';
const URL = process.env.MONGO_URL ? process.env.MONGO_URL : '';

const connectDB = (): void => {
	mongoose.connect(URL, () => {
		console.log('Connected to the database!!');
	});
};

export default connectDB;

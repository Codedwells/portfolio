import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', true);

const connectDB = (): void => {
	mongoose
		.connect(process.env.MONGO_URL || '')
		.then(() => {
			console.log('Connected to the DB...');
		})
		.catch((err) => {
			console.log('Error:', err.message);
		});
};

export default connectDB;

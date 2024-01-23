import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Admin from '../models/admin.model';

export const newAdmin = async (req: Request, res: Response): Promise<void> => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			res.status(400).json({
				status: 'error',
				data: {
					message: 'No field is to be empty',
					result: '',
				},
			});
			return;
		}

		const hashedPass = await bcrypt.hash(password, 10);

		const newAdm = new Admin({
			email,
			password: hashedPass,
		});

		await newAdm.save();

		res.status(200).json({
			status: 'success',
			data: {
				message: 'A new admin has been added',
				result: '',
			},
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'loginAdmin: Internal Server Error!!', result: '' },
		});
		console.error('loginAdmin', err.message);
	}
};

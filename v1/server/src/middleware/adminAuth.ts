import { NextFunction, Request, Response } from 'express';
import Admin from '../models/admin.model';

export const AdminAuth = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const { email } = req.body();
		const isAdm = await Admin.findOne({ email });

		if (!isAdm![0]) {
			res.status(400).json({
				status: 'error',
				data: {
					message: 'Sorry you are not an admin.',
					result: '',
				},
			});
			return;
		}

		next();
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

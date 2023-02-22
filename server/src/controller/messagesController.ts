import { Request, Response } from 'express';

import Messages from '../models/message.model';

export const addMessage = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, email, subject, message } = req.body();

		if (!name || !email || !subject || !message) {
			res.status(400).json({
				status: 'error',
				data: { message: 'A field might be empty!!', result: '' },
			});
			return;
		}

		const newMessage = new Messages({
			name,
			email,
			subject,
			message,
			created: Date.now(),
		});

		await newMessage.save();

		res.status(200).json({
			status: 'success',
			data: {
				message:
					'Your message has been received.I will get back to you as soon as I see it.',
				result: '',
			},
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

export const getMessage = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const messages = await Messages.find({}).sort({ created: -1 });

		res.status(200).json({
			status: 'success',
			data: { message: 'Data has been queried.', result: messages },
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

export const deleteMessage = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const id = req.params.id;

		let deleted = await Messages.findByIdAndDelete({ _id: id });

		if (!deleted) {
			res.status(400).json({
				status: 'error',
				data: { message: 'An error occured please try again!!', result: '' },
			});

			return;
		}

		res
			.status(200)
			.json({ status: 'success', message: 'Message has been removed!!' });
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

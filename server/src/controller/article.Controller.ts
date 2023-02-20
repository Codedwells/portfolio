import { Response, Request } from 'express';
import axios from 'axios';

export const getArticles = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const query = `
        {
            user(username: "misiochaabel") {
                publication {
                    posts{
                        slug
                        title
                        brief
                        coverImage
                    }
                }
                }
            }
        `;

		const response = await fetch('https://api.hashnode.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});

		const data = await response.json();
		res.json(data);
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

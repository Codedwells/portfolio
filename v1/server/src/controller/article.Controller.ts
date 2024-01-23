import { Response, Request } from 'express';
import Article from '../models/article.model';

export const setArticles = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		let { pg } = req.params;
		console.log(pg);

		const query = `
        {
            user(username: "misiochaabel") {
                publication {
                    posts (page:${pg}){
                    title
    				slug
    				brief
    				coverImage
    				dateUpdated
    				dateAdded
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
		const posts = data.data?.user.publication.posts;

		var articleInDB = await Article.find({}).sort({ created: 1 }).limit(1);

		if (articleInDB.length < 1 && !!posts) {
			for (let a of posts) {
				const { title, slug, brief, coverImage, dateUpdated, dateAdded } = a;

				const newArticle = new Article({
					title,
					slug,
					brief,
					coverImage,
					dateUpdated: new Date(dateUpdated).toISOString(),
					dateAdded: new Date(dateAdded).toISOString(),
				});

				await newArticle.save();
			}

			res.status(200).json({
				status: 'success',
				data: {
					message: 'Articles have been added to the database!!',
					result: '',
				},
			});

			return;
		} else if (!!articleInDB[0] && !!posts) {
			for (let a of posts) {
				const { title, slug, brief, coverImage, dateUpdated, dateAdded } = a;

				const isInDB = await Article.findOne({ slug });

				if (isInDB) return;

				const newArticle = new Article({
					title,
					slug,
					brief,
					coverImage,
					dateUpdated: new Date(dateUpdated).toISOString(),
					dateAdded: new Date(dateAdded).toISOString(),
				});

				await newArticle.save();
			}

			res.status(200).json({
				status: 'success',
				data: { message: 'New articles have been update!!', result: '' },
			});
			return;
		}

		res.status(200).json({
			status: 'success',
			data: { message: 'Your aticles are the latest', result: '' },
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'setArticle: Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

export const getArticles = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		var articles = await Article.find({}).sort({ dateAdded: -1 });

		var latest3: {}[] = [];
		latest3 = latest3.concat(articles.splice(0, 3));

		res.status(200).json({
			status: 'success',
			data: {
				message: 'Articles have been queried.',
				result: { latest3, articles },
			},
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'getArticles: Internal Server Error!!', result: '' },
		});
		console.error(err.message);
	}
};

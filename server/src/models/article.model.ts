import { Document, Schema, model } from 'mongoose';

interface ArticleDoc extends Document {
	title: string;
	slug: string;
	brief: string;
	coverImage: string;
	dateAdded: string;
	dateUpdated: string;
}

const ArticleSchema: Schema = new Schema({
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		require: true,
	},
	brief: {
		type: String,
		required: true,
	},
	coverImage: {
		type: String,
		required: true,
	},
	dateAdded: {
		type: String,
		required: true,
	},
	dateUpdated: {
		type: String,
		required: true,
	},
});

const Article = model<ArticleDoc>('Article', ArticleSchema);

export default Article;

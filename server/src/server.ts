import express from 'express';
import helmet from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import { urlencoded, json } from 'body-parser';

import connectDB from './connectDb';
import router from './routes/router';
import path from 'path';

dotenv.config();
const PORT = process.env.PORT;

/** Middleware */
const app = express();

app.use(compression());
app.use(morgan('tiny'));
app.use(helmet());
app.use(
	cors({
		origin: ['https://abeldev.netlify.app','https://abeldev.site'],
		credentials: true,
	})
);
app.use(urlencoded({ extended: true }));
app.use(json());

/** Static */
app.use(express.static(path.join(__dirname, 'public')));

/** Routes */
app.use('/', router);

connectDB();
app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});

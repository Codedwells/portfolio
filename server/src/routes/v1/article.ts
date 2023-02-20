import { Router } from 'express';
import { getArticles } from '../../controller/article.Controller';

const router = Router();

router.get('/', getArticles);

export default router;

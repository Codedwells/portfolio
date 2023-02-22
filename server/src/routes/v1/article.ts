import { Router } from 'express';
import { setArticles, getArticles } from '../../controller/article.Controller';

const router = Router();

router.get('/all', getArticles);
router.get('/:pg', setArticles);

export default router;

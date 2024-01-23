import { Router } from 'express';

import messages from './messages';
import admin from './admin';
import article from './article';

const router = Router();

router.use('/messages', messages);
router.use('/admin', admin);
router.use('/article', article);

export default router;

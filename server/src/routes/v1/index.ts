import { Router } from 'express';

import messages from './messages';
import admin from './admin';

const router = Router();

router.use('/messages', messages);
router.use('/admin', admin);

export default router;

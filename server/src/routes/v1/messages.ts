import { Router } from 'express';

import { addMessage, getMessage } from '../../controller/messagesController';

const router = Router();

router.get('/', getMessage);
router.post('/', addMessage);

export default router;

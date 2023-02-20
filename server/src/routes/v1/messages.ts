import { Router } from 'express';

import { addMessage, getMessage } from '../../controller/messagesContrller';

const router = Router();

router.get('/message', getMessage);
router.post('/message', addMessage);

export default router;

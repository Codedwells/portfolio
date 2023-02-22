import { Router } from 'express';

import { addMessage, deleteMessage, getMessage } from '../../controller/messagesController';

const router = Router();

router.get('/', getMessage);
router.post('/', addMessage);
router.delete('/:id',deleteMessage)

export default router;

import { Router } from 'express';
import { newAdmin } from '../../controller/adminController';

const router = Router();

router.post('/newAdmin', newAdmin);

export default router;

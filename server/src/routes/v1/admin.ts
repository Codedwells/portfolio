import { Router } from 'express';
import { loginAdmin, newAdmin } from '../../controller/adminController';

const router = Router();

router.post('/login', loginAdmin);
router.post('/newAdmin', newAdmin);

export default router;

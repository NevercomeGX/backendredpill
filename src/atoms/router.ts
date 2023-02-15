import { Router } from 'express';
import users from './users';
import emailss from './emailss';

const router = Router();

router.use('/users', users);
router.use('/emailss', emailss);

export default router;

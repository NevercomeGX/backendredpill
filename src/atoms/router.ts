import { Router } from 'express';

import emailss from './emailss';

const router = Router();

router.use('/emailss', emailss);

export default router;

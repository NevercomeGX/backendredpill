import Router from 'express';
import * as controllers from './controllers';
// import { authenticate } from '../../middleware';

const router = Router();

router.post('/login', controllers.login);
router.post('/signup', controllers.signup);
router.get('/profile', controllers.profile);
router.patch('/profile', controllers.editProfile);
router.post('/logout', controllers.logout);
router.post('/change-password', controllers.changePassword);

export default router;

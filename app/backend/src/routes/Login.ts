import { Router } from 'express';
import auth from '../middleware/Auth';
import loginMiddleware from '../middleware/Login';
import LoginController from '../controllers/Login';

const router = Router();
const controller = new LoginController();

router.get('/validate', auth, controller.validate.bind(controller));
router.post('/', loginMiddleware, controller.post.bind(controller));

export default router;

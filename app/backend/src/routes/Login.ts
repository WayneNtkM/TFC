import { Router } from 'express';
import loginMiddleware from '../middleware/Login';
import LoginController from '../controllers/Login';

const router = Router();
const controller = new LoginController();

router.post('/', loginMiddleware, controller.post.bind(controller));

export default router;

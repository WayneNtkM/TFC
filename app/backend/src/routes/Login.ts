import { Router } from 'express';
import LoginController from '../controllers/Login';

const router = Router();
const controller = new LoginController();

router.post('/', controller.post.bind(controller));

export default router;

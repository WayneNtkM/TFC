import { Router } from 'express';
import MatchesController from '../controllers/Matches';

const router = Router();
const controller = new MatchesController();

router.get('/', controller.getMacthes.bind(controller));

export default router;

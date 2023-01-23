import { Router } from 'express';
import auth from '../middleware/Auth';
import MatchesController from '../controllers/Matches';

const router = Router();
const controller = new MatchesController();

router.post('/', auth, controller.postMatch.bind(controller));
router.patch('/:id/finish', controller.setProgress.bind(controller));
router.get('/', controller.getMacthes.bind(controller));

export default router;

import { Router } from 'express';
import auth from '../middleware/Auth';
import MatchesController from '../controllers/Matches';

const router = Router();

router.post('/', auth, MatchesController.postMatch);
router.patch('/:id/finish', MatchesController.setProgress);
router.patch('/:id', MatchesController.patchMatch);
router.get('/', MatchesController.getMacthes);

export default router;

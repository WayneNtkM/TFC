import { Router } from 'express';
import TeamsController from '../controllers/Teams';

const router = Router();

router.get('/:id', TeamsController.getTeamByID);
router.get('/', TeamsController.getTeams);

export default router;

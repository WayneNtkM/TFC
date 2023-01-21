import { Router } from 'express';
import TeamsController from '../controllers/Teams';

const router = Router();
const controller = new TeamsController();

router.get('/:id', controller.getTeamByID.bind(controller));
router.get('/', controller.getTeams.bind(controller));

export default router;

import { Router } from 'express';
import LeaderboardsController from '../controllers/Leaderboards';

const router = Router();
const controller = new LeaderboardsController();

router.get('/home', controller.getLeaderboardHome.bind(controller));
router.get('/away', controller.getLeaderboardAway.bind(controller));
router.get('/', controller.getLeaderboard.bind(controller));

export default router;

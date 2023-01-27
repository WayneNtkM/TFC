import { Router } from 'express';
import LeaderboardsController from '../controllers/Leaderboards';

const router = Router();

router.get('/home', LeaderboardsController.getLeaderboardHome);
router.get('/away', LeaderboardsController.getLeaderboardAway);
router.get('/', LeaderboardsController.getLeaderboard);

export default router;

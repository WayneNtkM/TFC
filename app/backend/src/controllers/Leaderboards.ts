import { RequestHandler } from 'express';
import LeaderboardService from '../services/Leaderboards';

export default class Leaderboards {
  public static getLeaderboardHome: RequestHandler = async (_req, res) => {
    const home = await LeaderboardService.getLeaderboardsHome();
    return res.status(200).json(home);
  };

  public static getLeaderboardAway: RequestHandler = async (_req, res) => {
    const away = await LeaderboardService.getLeaderboardsAway();
    return res.status(200).json(away);
  };

  public static getLeaderboard: RequestHandler = async (_req, res) => {
    const leaderboard = await LeaderboardService.getLeaderboards();
    return res.status(200).json(leaderboard);
  };
}

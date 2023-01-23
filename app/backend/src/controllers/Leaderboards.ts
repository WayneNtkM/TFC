import { RequestHandler } from 'express';
import LeaderboardService from '../services/Leaderboards';

export default class Leaderboards {
  constructor(private _service = new LeaderboardService()) {}

  public getLeaderboardHome: RequestHandler = async (_req, res) => {
    const home = await this._service.getLeaderboardsHome();
    return res.status(200).json(home);
  };

  public getLeaderboardAway: RequestHandler = async (_req, res) => {
    const away = await this._service.getLeaderboardsAway();
    return res.status(200).json(away);
  };

  public getLeaderboard: RequestHandler = async (_req, res) => {
    const leaderboard = await this._service.getLeaderboards();
    return res.status(200).json(leaderboard);
  };
}

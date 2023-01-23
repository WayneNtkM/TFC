import leaderboards from '../utils/leaderboards';
import { IAwayMathes } from '../interfaces/Matches';
import MatchesModel from '../database/models/Matches';
import TeamsModel from '../database/models/Teams';

export default class Leaderboards {
  constructor(
    private _matches = MatchesModel,
    private _teams = TeamsModel,
  ) {}

  public async getLeaderboardsHome() {
    const matches = await this._teams.findAll({
      include: [
        { model: this._matches,
          as: 'matches',
          attributes: { exclude: ['id'] },
          where: { inProgress: false } },
      ],
    });

    const home = leaderboards.home(matches);

    return home;
  }

  public async getLeaderboardsAway() {
    const matches = await this._teams.findAll({
      include: [
        { model: this._matches,
          as: 'matchesAway',
          attributes: { exclude: ['id'] },
          where: { inProgress: false } },
      ],
    }) as unknown as IAwayMathes[];

    const away = leaderboards.away(matches);

    return away;
  }

  public async getLeaderboards() {
    const leaderboardHome = await this.getLeaderboardsHome();
    const leaderboardAway = await this.getLeaderboardsAway();

    const leaderboard = leaderboards.create(leaderboardHome, leaderboardAway);

    return leaderboard.sort((a, b) => {
      if (!a || !b) return -1;
      return b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn;
    });
  }
}

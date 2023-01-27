import Leaderboard from '../utils/Leaderboard';
import TeamsModel from '../database/models/Teams';
import { ITeam } from '../interfaces/Leaderboards';

export default class Leaderboards {
  public static async generateLeaderboard(matches: ITeam[]) {
    return matches.map((team) => new Leaderboard(team))
      .sort((a, b) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn);
  }

  public static async getLeaderboardsHome() {
    const matches = await TeamsModel.getAllHomeMacthes();
    const home = Leaderboards.generateLeaderboard(matches);
    return home;
  }

  public static async getLeaderboardsAway() {
    const matches = await TeamsModel.getAllAwayMacthes();
    const away = Leaderboards.generateLeaderboard(matches);
    return away;
  }

  public static async getLeaderboards() {
    const matches = await TeamsModel.getAllMatches();
    const leaderboard = Leaderboards.generateLeaderboard(matches);
    return leaderboard;
  }
}

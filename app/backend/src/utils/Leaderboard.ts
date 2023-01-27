import { IMatch } from '../interfaces/Matches';
import { ITeam } from '../interfaces/Leaderboards';

export default class Leaderboard {
  public name: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = '100.00';

  constructor(team: ITeam) {
    this.name = team.teamName;
    this.getStats(team);
  }

  private getStats = ({ matchesAway, matches }: ITeam) => {
    if (matches) this.setTeamGoals(matches, 'home');
    if (matchesAway) this.setTeamGoals(matchesAway, 'away');

    this.totalPoints = this.setTotalPoints();
    this.goalsBalance = this.setGoalsBalance();
    this.efficiency = this.getEfficiency();
  };

  private setTeamGoals = (matches: IMatch[], str: string) => {
    matches.forEach((e) => {
      const favor = e[str === 'home' ? 'homeTeamGoals' : 'awayTeamGoals'];
      const own = e[str === 'home' ? 'awayTeamGoals' : 'homeTeamGoals'];

      if (favor > own) this.totalVictories += 1;
      else if (own > favor) this.totalLosses += 1;
      else this.totalDraws += 1;

      this.goalsFavor += favor;
      this.goalsOwn += own;
      this.totalGames += 1;
    });
  };

  public setTotalPoints = () => (this.totalVictories * 3) + this.totalDraws;

  public setGoalsBalance = () => this.goalsFavor - this.goalsOwn;

  public getEfficiency = () => (this.totalGames
    ? (((this.totalPoints) / (this.totalGames * 3)) * 100).toFixed(2)
    : '100.00');
}

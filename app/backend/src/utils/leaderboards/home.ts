import { IMatch, IHomeMathes } from '../../interfaces/Matches';

const countPoints = (matches: IMatch[]) => matches.map((e) => {
  if (e.homeTeamGoals > e.awayTeamGoals) return 3;
  if (e.homeTeamGoals < e.awayTeamGoals) return 0;
  return 1;
}).reduce((acc: number, curr: number) => acc + curr, 0);

const countVictories = (matches: IMatch[]) => matches
  .filter((el) => el.homeTeamGoals > el.awayTeamGoals).length;

const countDraws = (matches: IMatch[]) => matches
  .filter((el) => el.homeTeamGoals === el.awayTeamGoals).length;

const countLoses = (matches: IMatch[]) => matches
  .filter((el) => el.homeTeamGoals < el.awayTeamGoals).length;

const countGoalsFavor = (matches: IMatch[]) => matches
  .reduce((acc, c) => acc + c.homeTeamGoals, 0);

const countGoalsOwn = (matches: IMatch[]) => matches
  .reduce((acc, c) => acc + c.awayTeamGoals, 0);

const calcEfficiency = (matches: IMatch[]) => {
  const points = countPoints(matches);
  const games = matches.length;
  return ((points / (games * 3)) * 100).toFixed(2);
};

const leaderboardsHome = (matches: IHomeMathes[]) => matches.map((e) => ({
  name: e.teamName,
  totalPoints: countPoints(e.matches),
  totalGames: e.matches.length,
  totalVictories: countVictories(e.matches),
  totalDraws: countDraws(e.matches),
  totalLosses: countLoses(e.matches),
  goalsFavor: countGoalsFavor(e.matches),
  goalsOwn: countGoalsOwn(e.matches),
  goalsBalance: countGoalsFavor(e.matches) - countGoalsOwn(e.matches),
  efficiency: calcEfficiency(e.matches),
})).sort((a, b) => b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);

export default leaderboardsHome;

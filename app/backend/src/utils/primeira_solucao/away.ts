// import { IMatch, IAwayMathes } from '../../interfaces/Matches';

// const countPoints = (matches: IMatch[]) => matches.map((e) => {
//   if (e.homeTeamGoals < e.awayTeamGoals) return 3;
//   if (e.homeTeamGoals > e.awayTeamGoals) return 0;
//   return 1;
// }).reduce((acc: number, curr: number) => acc + curr, 0);

// const countVictories = (matches: IMatch[]) => matches
//   .filter((el) => el.homeTeamGoals < el.awayTeamGoals).length;

// const countDraws = (matches: IMatch[]) => matches
//   .filter((el) => el.homeTeamGoals === el.awayTeamGoals).length;

// const countLoses = (matches: IMatch[]) => matches
//   .filter((el) => el.homeTeamGoals > el.awayTeamGoals).length;

// const countGoalsFavor = (matches: IMatch[]) => matches
//   .reduce((acc, c) => acc + c.awayTeamGoals, 0);

// const countGoalsOwn = (matches: IMatch[]) => matches
//   .reduce((acc, c) => acc + c.homeTeamGoals, 0);

// const calcEfficiency = (matches: IMatch[]) => {
//   const points = countPoints(matches);
//   const games = matches.length;
//   return ((points / (games * 3)) * 100).toFixed(2);
// };

// const leaderboardsAway = (matches: IAwayMathes[]) => matches.map((e) => ({
//   name: e.teamName,
//   totalPoints: countPoints(e.matchesAway),
//   totalGames: e.matchesAway.length,
//   totalVictories: countVictories(e.matchesAway),
//   totalDraws: countDraws(e.matchesAway),
//   totalLosses: countLoses(e.matchesAway),
//   goalsFavor: countGoalsFavor(e.matchesAway),
//   goalsOwn: countGoalsOwn(e.matchesAway),
//   goalsBalance: countGoalsFavor(e.matchesAway) - countGoalsOwn(e.matchesAway),
//   efficiency: calcEfficiency(e.matchesAway),
// })).sort((a, b) => b.totalPoints - a.totalPoints
//   || b.totalVictories - a.totalVictories
//   || b.goalsBalance - a.goalsBalance
//   || b.goalsFavor - a.goalsFavor
//   || b.goalsOwn - a.goalsOwn);

// export default leaderboardsAway;

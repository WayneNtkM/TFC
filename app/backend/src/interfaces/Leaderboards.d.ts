export interface ILeaderboards {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

export interface IMatches {
  totalPoints?: number;
  totalVictories?: number;
  goalsFavor?: number;
  goalsOwn?: number;
  goalsBalance?: number;
}

export interface IMatchBody {
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatch {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IHomeMathes {
  teamName: string;
  matches: IMatch[];
}

export interface IAwayMathes {
  teamName: string;
  matchesAway: IMatch[];
}

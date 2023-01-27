import { IMatch } from './Matches';

export interface ITeam {
  teamName: string;
  matches: IMatch[];
  matchesAway: IMatch[];
}

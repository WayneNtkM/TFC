import { Op } from 'sequelize';
import { IMatch, IMatchBody } from '../interfaces/Matches';
import MatchesModel from '../database/models/Matches';
import TeamsModel from '../database/models/Teams';

export default class Matches {
  public static async getMatches(inProgress: string) {
    const where = inProgress ? { inProgress: inProgress === 'true' } : undefined;

    const matches = await MatchesModel.getAllMatches(where);
    return matches;
  }

  public static async postMatch({ awayTeamId,
    homeTeamGoals, homeTeamId, awayTeamGoals }: IMatchBody) {
    if (homeTeamId === awayTeamId) {
      return { isError: true,
        message: 'It is not possible to create a match with two equal teams',
        status: 422 };
    }

    const team = await TeamsModel.findAll({
      where: { id: { [Op.in]: [awayTeamId, homeTeamId] } } });

    if (!team[0] || !team[1]) {
      return { isError: true,
        message: 'There is no team with such id!',
        status: 404 };
    }

    const match = await MatchesModel
      .create({ awayTeamGoals, awayTeamId, homeTeamGoals, homeTeamId, inProgress: true });
    return { data: match, isError: false, status: 201 };
  }

  public static async setProgress(id: string) {
    await MatchesModel.update({ inProgress: false }, {
      where: { id },
    });
    return { message: 'Finished', status: 200 };
  }

  public static async patchMatch(id: string, { homeTeamGoals, awayTeamGoals }: IMatch) {
    await MatchesModel.update({ homeTeamGoals, awayTeamGoals }, {
      where: { id },
    });
    return { message: 'Updated' };
  }
}

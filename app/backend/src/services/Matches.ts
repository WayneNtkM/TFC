import { Op } from 'sequelize';
import { IMatchBody } from '../interfaces/Matches';
import MatchesModel from '../database/models/Matches';
import TeamsModel from '../database/models/Teams';

export default class Matches {
  constructor(private _model = MatchesModel) {}

  public async getMatches(inProgress: string) {
    const where = inProgress ? { inProgress: inProgress === 'true' } : undefined;

    const matches = await this._model.findAll({
      where,
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async postMatch({ awayTeamId, homeTeamGoals, homeTeamId, awayTeamGoals }: IMatchBody) {
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

    const match = await this._model
      .create({ awayTeamGoals, awayTeamId, homeTeamGoals, homeTeamId, inProgress: true });
    return { data: match, isError: false, status: 201 };
  }

  public async setProgress(id: string) {
    await this._model.update({ inProgress: false }, {
      where: { id },
    });
    return { message: 'Finished', status: 200 };
  }
}

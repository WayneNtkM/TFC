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
}

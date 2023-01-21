import TeamsModel from '../database/models/Teams';

export default class Teams {
  constructor(private _model = TeamsModel) {}

  public async getTeams() {
    const teams = await this._model.findAll();
    return teams;
  }

  public async getTeamByID(id: string) {
    const team = await this._model.findByPk(id);
    return team;
  }
}

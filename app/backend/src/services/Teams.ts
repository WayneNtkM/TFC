import TeamsModel from '../database/models/Teams';

export default class Teams {
  public static async getTeams() {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async getTeamByID(id: string) {
    const team = await TeamsModel.findByPk(id);
    return team;
  }
}

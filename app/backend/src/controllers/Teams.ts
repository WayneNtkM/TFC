import { RequestHandler } from 'express';
import TeamsService from '../services/Teams';

export default class Teams {
  constructor(private _service = new TeamsService()) {}

  public getTeams: RequestHandler = async (_req, res) => {
    const teams = await this._service.getTeams();
    return res.status(200).json(teams);
  };

  public getTeamByID: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const teams = await this._service.getTeamByID(id);
    return res.status(200).json(teams);
  };
}

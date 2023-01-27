import { RequestHandler } from 'express';
import TeamsService from '../services/Teams';

export default class Teams {
  public static getTeams: RequestHandler = async (_req, res) => {
    const teams = await TeamsService.getTeams();
    return res.status(200).json(teams);
  };

  public static getTeamByID: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const teams = await TeamsService.getTeamByID(id);
    return res.status(200).json(teams);
  };
}

import { RequestHandler } from 'express';
import MatchesService from '../services/Matches';

export default class Matches {
  constructor(private _service = new MatchesService()) {}

  public getMacthes: RequestHandler = async (req, res) => {
    const { inProgress } = req.query;

    const matches = await this._service.getMatches(inProgress as unknown as string);
    return res.status(200).json(matches);
  };
}

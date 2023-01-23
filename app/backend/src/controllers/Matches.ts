import { RequestHandler } from 'express';
import MatchesService from '../services/Matches';

export default class Matches {
  constructor(private _service = new MatchesService()) {}

  public getMacthes: RequestHandler = async (req, res) => {
    const { inProgress } = req.query;

    const matches = await this._service.getMatches(inProgress as unknown as string);
    return res.status(200).json(matches);
  };

  public postMatch: RequestHandler = async (req, res) => {
    const match = req.body;

    const { isError, status, data, message } = await this._service.postMatch(match);

    if (isError) {
      return res.status(status).json({ message });
    }

    return res.status(status).json(data);
  };

  public setProgress: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { message, status } = await this._service.setProgress(id);
    return res.status(status).json({ message });
  };

  public patchMatch: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { message } = await this._service.patchMatch(id, body);
    return res.status(200).json({ message });
  };
}

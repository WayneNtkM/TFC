import { RequestHandler } from 'express';
import MatchesService from '../services/Matches';

export default class Matches {
  public static getMacthes: RequestHandler = async (req, res) => {
    const { inProgress } = req.query;

    const matches = await MatchesService.getMatches(inProgress as unknown as string);
    return res.status(200).json(matches);
  };

  public static postMatch: RequestHandler = async (req, res) => {
    const match = req.body;

    const { isError, status, data, message } = await MatchesService.postMatch(match);

    if (isError) {
      return res.status(status).json({ message });
    }

    return res.status(status).json(data);
  };

  public static setProgress: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { message, status } = await MatchesService.setProgress(id);
    return res.status(status).json({ message });
  };

  public static patchMatch: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { message } = await MatchesService.patchMatch(id, body);
    return res.status(200).json({ message });
  };
}

import { RequestHandler } from 'express';
import LoginService from '../services/Login';

export default class Login {
  constructor(private _service = new LoginService()) {}

  public post: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const { token, message, status, isError } = await this._service.post({ email, password });

    if (isError) {
      return res.status(status).json({ message });
    }

    return res.status(status).json({ token });
  };
}
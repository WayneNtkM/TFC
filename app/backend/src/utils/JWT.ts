// import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/Login';

export default class JWT {
  private _secret: Secret = process.env.JWT_SECRET as Secret;
  private _config: SignOptions = { algorithm: 'HS256', expiresIn: '1h' };

  public createToken(payload: IUser) {
    const token = jwt.sign({ ...payload }, this._secret, this._config);
    return token;
  }
}

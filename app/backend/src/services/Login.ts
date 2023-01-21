import * as bcrypt from 'bcryptjs';
import hashPassword from '../utils/hashPassword';
import JWT from '../utils/JWT';
import UserModel from '../database/models/User';
import { IUser } from '../interfaces/Login';

export default class Login {
  constructor(private _model = UserModel) {}
  private _jwt = new JWT();

  public async post({ email, password }: IUser) {
    const user = await this._model.findOne({ where: { email } });
    const hash = hashPassword(password) as string;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { message: 'Incorrect email or password', status: 401, isError: true };
    }

    const token = this._jwt.createToken({ email, password: hash });
    return { token, isError: false, status: 200 };
  }
}
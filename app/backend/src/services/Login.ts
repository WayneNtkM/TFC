import * as bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import UserModel from '../database/models/User';
import { IUser, IUserBody } from '../interfaces/Login';

export default class Login {
  private _jwt = new JWT();

  public async post({ email, password }: IUserBody) {
    const user = await UserModel.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { message: 'Incorrect email or password', status: 401, isError: true };
    }

    const token = this._jwt.createToken({ email, id: user.id, role: user.role });
    return { token, isError: false, status: 200 };
  }

  public static async findOne(user: IUser) {
    const response = await UserModel
      .findOne({ where: { email: user.email } }) as { role: string };
    return { role: response.role };
  }
}

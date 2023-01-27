export interface IUser {
  id: number;
  email: string;
  role: string;
}

export interface IUserBody {
  email: string;
  password: string;
}

export interface IJWTLogin {
  email: string,
  password: string,
  iat: number,
  exp: number
}

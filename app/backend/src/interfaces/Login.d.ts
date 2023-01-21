export interface IUser {
  email: string;
  password: string;
}

export interface IJWTLogin {
  email: string,
  password: string,
  iat: number,
  exp: number
}

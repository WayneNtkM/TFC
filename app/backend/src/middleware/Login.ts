import { RequestHandler } from 'express';
import validateLogin from './validation/login.validation';

const loginMiddleware: RequestHandler = (req, res, next) => {
  const isError = validateLogin(req.body);
  if (isError) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};

export default loginMiddleware;

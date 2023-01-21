import { RequestHandler } from 'express';
import JWT from '../utils/JWT';

const jwt = new JWT();

const auth: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ message: 'Token not found' });
  }

  const decoded = jwt.verify(authorization);

  req.body.user = decoded;

  return next();
};

export default auth;
